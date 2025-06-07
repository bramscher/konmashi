import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { getDefaultBrandColor } from '@/lib/theme-config';

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const userId = session.user.id;
  const { name } = await req.json();
  if (!name || typeof name !== 'string') {
    return NextResponse.json({ error: 'Brand name is required.' }, { status: 400 });
  }
  // Find the user's current team (first membership)
  const membership = await prisma.teamMember.findFirst({ where: { userId } });
  if (!membership) {
    return NextResponse.json({ error: 'You are not a member of any team.' }, { status: 403 });
  }
  const teamId = membership.teamId;
  
  // Get current brand count for this team to assign default color
  const brandCount = await prisma.brand.count({ where: { teamId } });
  const defaultThemeColor = getDefaultBrandColor(brandCount);
  
  // Create the brand
  const brand = await prisma.brand.create({
    data: {
      name,
      teamId,
      themeColor: defaultThemeColor,
      memberships: {
        create: {
          userId,
          role: 'ADMIN',
        },
      },
    },
    include: { memberships: true },
  });
  return NextResponse.json({ brand });
} 