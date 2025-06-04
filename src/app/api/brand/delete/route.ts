import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function DELETE(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const userId = session.user.id;
    const { brandId } = await request.json();
    if (!brandId) {
      return NextResponse.json({ error: 'Missing brandId' }, { status: 400 });
    }
    // Check if user is admin for the brand's team
    const brand = await prisma.brand.findUnique({
      where: { id: brandId },
      include: { team: { include: { members: true } } },
    });
    if (!brand) {
      return NextResponse.json({ error: 'Brand not found' }, { status: 404 });
    }
    const isAdmin = await prisma.teamMember.findFirst({
      where: { teamId: brand.teamId, userId, role: 'ADMIN' },
    });
    if (!isAdmin) {
      return NextResponse.json({ error: 'You do not have permission to delete this brand.' }, { status: 403 });
    }
    // Delete all related data (cascade)
    await prisma.$transaction([
      prisma.brandIdentity.deleteMany({ where: { brandId } }),
      prisma.brandMembership.deleteMany({ where: { brandId } }),
      prisma.contentRequest.deleteMany({ where: { brandId } }),
      prisma.socialConnection.deleteMany({ where: { brandId } }),
      prisma.generatedContent.deleteMany({ where: { brandId } }),
      prisma.ideabankEntry.deleteMany({ where: { brandId } }),
      prisma.brand.delete({ where: { id: brandId } }),
    ]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting brand:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 