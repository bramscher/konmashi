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
  // Find the user's current team (first membership)
  const membership = await prisma.teamMember.findFirst({ where: { userId } });
  if (!membership) {
    return NextResponse.json({ error: 'You are not a member of any team.' }, { status: 403 });
  }
  const teamId = membership.teamId;
  // Get all brands for this team, include BrandIdentity
  const brands = await prisma.brand.findMany({
    where: { teamId },
    include: {
      identities: true,
    },
    orderBy: { createdAt: 'asc' },
  });
  // Attach the first BrandIdentity (if any) as 'identity' for each brand
  const result = brands.map(b => ({
    ...b,
    identity: b.identities[0] || null,
    identities: undefined,
  }));
  return NextResponse.json({ brands: result });
} 