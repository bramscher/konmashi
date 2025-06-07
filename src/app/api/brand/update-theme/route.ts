import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { BrandThemeColor, COLOR_DISPLAY_NAMES } from '@/lib/theme-config';

export async function PUT(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const userId = session.user.id;
  const { brandId, themeColor }: { brandId: string; themeColor: BrandThemeColor } = await req.json();
  
  if (!brandId || !themeColor) {
    return NextResponse.json({ error: 'Brand ID and theme color are required.' }, { status: 400 });
  }
  
  // Validate theme color
  if (!COLOR_DISPLAY_NAMES[themeColor]) {
    return NextResponse.json({ error: 'Invalid theme color.' }, { status: 400 });
  }
  
  try {
    // Check if user is team admin or brand admin
    const brand = await prisma.brand.findUnique({
      where: { id: brandId },
      include: {
        team: {
          include: {
            members: {
              where: { userId },
            },
          },
        },
        memberships: {
          where: { userId },
        },
      },
    });
    
    if (!brand) {
      return NextResponse.json({ error: 'Brand not found.' }, { status: 404 });
    }
    
    // Check permissions: user must be team admin or brand admin
    const isTeamAdmin = brand.team.members[0]?.role === 'ADMIN';
    const isBrandAdmin = brand.memberships[0]?.role === 'ADMIN';
    
    if (!isTeamAdmin && !isBrandAdmin) {
      return NextResponse.json({ error: 'Insufficient permissions. Only team or brand admins can update theme colors.' }, { status: 403 });
    }
    
    // Update brand theme color
    const updatedBrand = await prisma.brand.update({
      where: { id: brandId },
      data: { themeColor },
      include: {
        identities: true,
      },
    });
    
    return NextResponse.json({ 
      brand: {
        ...updatedBrand,
        identity: updatedBrand.identities[0] || null,
        identities: undefined,
      },
      message: `Brand theme updated to ${COLOR_DISPLAY_NAMES[themeColor]}` 
    });
    
  } catch (error) {
    console.error('Error updating brand theme:', error);
    return NextResponse.json({ error: 'Failed to update brand theme.' }, { status: 500 });
  }
} 