import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const userId = session.user.id;
  const { email } = await req.json();
  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  // Find the admin's current team (first ADMIN membership)
  const adminMembership = await prisma.teamMember.findFirst({
    where: { userId, role: 'ADMIN' },
    include: { team: true },
  });
  if (!adminMembership) {
    return NextResponse.json({ error: 'You are not an admin for any team.' }, { status: 403 });
  }
  const teamId = adminMembership.teamId;
  const team = adminMembership.team;

  // Check license count
  const memberCount = await prisma.teamMember.count({ where: { teamId } });
  if (memberCount >= team.licenseCount) {
    return NextResponse.json({ error: 'All licenses are in use. Please upgrade your plan to add more members.' }, { status: 400 });
  }

  // Check if user is already a member
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    const existingMembership = await prisma.teamMember.findFirst({ where: { userId: existingUser.id, teamId } });
    if (existingMembership) {
      return NextResponse.json({ error: 'User is already a member of this team.' }, { status: 400 });
    }
    // Add as member
    await prisma.teamMember.create({
      data: {
        userId: existingUser.id,
        teamId,
        role: 'MEMBER',
      },
    });
    return NextResponse.json({ message: 'User added to team.' });
  } else {
    // For MVP: just return success (invite flow can be implemented later)
    // In a real app, you would create a pending invite and send an email
    return NextResponse.json({ message: 'Invitation sent (MVP: user must sign up with this email to join the team).' });
  }
} 