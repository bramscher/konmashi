import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import * as z from 'zod';

// Zod schema for validating incoming brand identity data
// This should ideally match or be compatible with the one in BrandSetupPage
const brandIdentityApiSchema = z.object({
  brandName: z.string().min(1).max(100),
  industry: z.string().min(1).max(100),
  voiceDescriptors: z.array(z.string()).min(1), // Expecting an array here
  targetAudience: z.string().min(1).max(500),
  // userId is implicitly from the authenticated session, not from the body usually for security
  // but if BrandSetupPage sends it, we might need to align or decide.
  // For now, let's assume userId is derived from session.
});

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });

  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (sessionError || !session || !session.user) {
      console.error('Auth error in API:', sessionError);
      return NextResponse.json({ error: 'Unauthorized: No active session' }, { status: 401 });
    }

    const userId = session.user.id;
    const rawData = await request.json();

    // Validate incoming data
    const validationResult = brandIdentityApiSchema.safeParse(rawData);
    if (!validationResult.success) {
      return NextResponse.json({ error: 'Invalid input', details: validationResult.error.flatten() }, { status: 400 });
    }

    const { brandName, industry, voiceDescriptors, targetAudience } = validationResult.data;

    // Use a Prisma transaction to ensure both operations succeed or fail together
    const result = await prisma.$transaction(async (tx) => {
      // 1. Upsert BrandIdentity
      const brandIdentity = await tx.brandIdentity.upsert({
        where: { userId },
        update: {
          brandName,
          industry,
          voiceDescriptors,
          targetAudience,
          updatedAt: new Date(),
        },
        create: {
          userId,
          brandName,
          industry,
          voiceDescriptors,
          targetAudience,
        },
      });

      // 2. Update User's hasCompletedOnboarding status
      const updatedUser = await tx.user.update({
        where: { id: userId },
        data: { hasCompletedOnboarding: true },
        select: { id: true, hasCompletedOnboarding: true } // Select only what's necessary
      });

      return { brandIdentity, user: updatedUser };
    });

    return NextResponse.json({ 
      message: 'Brand identity saved and user onboarding status updated.',
      brandIdentity: result.brandIdentity,
      userOnboardingStatus: result.user.hasCompletedOnboarding 
    });

  } catch (error) {
    console.error('Error in /api/brand-identity:', error);
    let errorMessage = 'Internal server error while saving brand identity.';
    if (error instanceof z.ZodError) {
        errorMessage = 'Validation error processing your request.';
        return NextResponse.json({ error: errorMessage, details: error.flatten() }, { status: 400 });
    }
    // Add more specific error handling if needed
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });

  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (sessionError || !session || !session.user) {
      console.error('Auth error in API:', sessionError);
      return NextResponse.json({ error: 'Unauthorized: No active session' }, { status: 401 });
    }

    const userId = session.user.id;
    const brandIdentity = await prisma.brandIdentity.findUnique({
      where: { userId },
    });

    if (!brandIdentity) {
      return NextResponse.json({ error: 'Brand identity not found' }, { status: 404 });
    }

    return NextResponse.json({ brandIdentity });
  } catch (error) {
    console.error('Error in GET /api/brand-identity:', error);
    return NextResponse.json({ error: 'Internal server error while retrieving brand identity.' }, { status: 500 });
  }
} 