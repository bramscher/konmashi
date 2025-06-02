import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from '@supabase/auth-helpers-nextjs';
import { prisma } from '@/lib/prisma';
import { createServerClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const supabase = createServerClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const userId = session.user.id;
    const { name, licenseCount } = await req.json();
    if (!name || !licenseCount || typeof name !== 'string' || typeof licenseCount !== 'number') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }
    // Create the team
    const team = await prisma.team.create({
      data: {
        name,
        licenseCount,
        members: {
          create: {
            userId,
            role: 'ADMIN',
          },
        },
      },
      include: {
        members: true,
      },
    });
    return NextResponse.json({ team });
  } catch (error) {
    console.error('Error creating team:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 