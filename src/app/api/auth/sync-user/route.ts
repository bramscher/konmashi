import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
// import { createSupabaseServerClient } from '@/lib/supabase' // We will use createRouteHandlerClient directly
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const { id, email: payloadEmail } = await request.json()

    // Verify the request is from an authenticated user
    const supabase = createRouteHandlerClient({ cookies })
    
    const { data: { session } } = await supabase.auth.getSession()

    if (!session || session.user.id !== id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Determine the email to use. Prioritize payload, then session.
    const email = payloadEmail || session.user.email;

    if (!email) {
      // This should ideally not happen if the user is authenticated via Supabase
      console.error('Critical: Email not found for user during sync operation.', { userId: id });
      return NextResponse.json({ error: 'Email is required for user sync.' }, { status: 400 });
    }

    const updateData: { email?: string; updatedAt: Date } = {
      updatedAt: new Date(),
    };
    if (payloadEmail) { // Only include email in update if it was in the payload
      updateData.email = payloadEmail;
    }

    // Upsert user in our database
    const user = await prisma.user.upsert({
      where: { id },
      update: updateData,
      create: {
        id,
        email, // Use the determined email which must be valid now
      },
      // Ensure we select the field we need for the auth context
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        hasCompletedOnboarding: true,
        // Add other fields from Prisma User model if needed in authContext.prismaUser
      }
    })

    return NextResponse.json({ user })
  } catch (error) {
    console.error('[VERBOSE] Error syncing user (raw object):', error);
    if (error instanceof Error) {
      console.error('[VERBOSE] Error syncing user (message):', error.message);
      console.error('[VERBOSE] Error syncing user (stack):', error.stack);
      // Basic check for specific error messages if needed
      if (error.message.includes("cookies() should be awaited")) {
        // This specific check might be redundant if the previous fix worked, but keeping for safety
        return NextResponse.json(
          { error: "Server configuration error related to cookie handling." },
          { status: 500 }
        );
      }
    }
    // Ensure a generic response is always sent if other checks don't return
    return NextResponse.json(
      { error: 'Internal server error. Check server logs for more details.' }, // Updated message to guide user
      { status: 500 }
    );
  }
} 