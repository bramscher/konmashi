import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const userId = session.user.id;

  // Find the admin's current team (first ADMIN membership)
  const adminMembership = await prisma.teamMember.findFirst({
    where: { userId, role: 'ADMIN' },
    include: { team: true },
  });
  if (!adminMembership) {
    return NextResponse.json({ error: 'You are not an admin for any team.' }, { status: 403 });
  }
  const teamId = adminMembership.teamId;

  // Get all team members for this team
  const members = await prisma.teamMember.findMany({
    where: { teamId },
    include: { user: true },
    orderBy: { joinedAt: 'asc' },
  });

  return NextResponse.json({
    members: members.map(m => ({
      id: m.id,
      userId: m.userId,
      email: m.user.email,
      role: m.role,
      joinedAt: m.joinedAt,
    }))
  });
}

export async function PATCH(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const userId = session.user.id;
  const { memberId, newRole } = await req.json();
  if (!memberId || !['MEMBER', 'ADMIN'].includes(newRole)) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }
  // Find admin's current team
  const adminMembership = await prisma.teamMember.findFirst({
    where: { userId, role: 'ADMIN' },
  });
  if (!adminMembership) {
    return NextResponse.json({ error: 'You are not an admin for any team.' }, { status: 403 });
  }
  const teamId = adminMembership.teamId;
  // Prevent self-demotion
  const targetMember = await prisma.teamMember.findUnique({ where: { id: memberId } });
  if (!targetMember || targetMember.teamId !== teamId) {
    return NextResponse.json({ error: 'Member not found in your team.' }, { status: 404 });
  }
  if (targetMember.userId === userId) {
    return NextResponse.json({ error: 'You cannot change your own role.' }, { status: 400 });
  }
  await prisma.teamMember.update({
    where: { id: memberId },
    data: { role: newRole },
  });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const userId = session.user.id;
  const { memberId } = await req.json();
  if (!memberId) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }
  // Find admin's current team
  const adminMembership = await prisma.teamMember.findFirst({
    where: { userId, role: 'ADMIN' },
  });
  if (!adminMembership) {
    return NextResponse.json({ error: 'You are not an admin for any team.' }, { status: 403 });
  }
  const teamId = adminMembership.teamId;
  // Prevent self-removal
  const targetMember = await prisma.teamMember.findUnique({ where: { id: memberId } });
  if (!targetMember || targetMember.teamId !== teamId) {
    return NextResponse.json({ error: 'Member not found in your team.' }, { status: 404 });
  }
  if (targetMember.userId === userId) {
    return NextResponse.json({ error: 'You cannot remove yourself from the team.' }, { status: 400 });
  }
  await prisma.teamMember.delete({ where: { id: memberId } });
  return NextResponse.json({ success: true });
} 