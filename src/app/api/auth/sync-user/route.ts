import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const { id, email: payloadEmail } = await request.json()

    // Get all cookies
    const allCookies = await cookies();
    console.log('All cookies:', Array.from(allCookies));
    // Get the Supabase auth token from the correct cookie name (await cookies() for App Router)
    const rawToken = (await cookies()).get('sb-ovzistntcsomqddezegq-auth-token')?.value;
    console.log('Raw Supabase auth token:', rawToken, 'Type:', typeof rawToken);
    // If the token is a JSON array, parse and use the first element
    let token = rawToken;
    if (typeof rawToken === 'string' && rawToken.startsWith('[')) {
      try {
        const arr = JSON.parse(rawToken);
        token = Array.isArray(arr) ? arr[0] : rawToken;
        console.log('Parsed token from array:', token);
      } catch (e) {
        console.log('Error parsing token array:', e);
      }
    }
    if (!token) {
      console.log('No Supabase auth token found');
      return NextResponse.json({ error: 'Unauthorized: No auth token found' }, { status: 401 })
    }

    // Create a Supabase client with the token
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { global: { headers: { Authorization: `Bearer ${token}` } } }
    )

    // Get the user session
    const { data: { user: sessionUser }, error: sessionError } = await supabase.auth.getUser(token)
    console.log('Result of supabase.auth.getUser():', sessionUser, sessionError);

    if (sessionError || !sessionUser || sessionUser.id !== id) {
      return NextResponse.json({ error: 'Unauthorized: Invalid or expired token' }, { status: 401 })
    }

    // Determine the email to use. Prioritize payload, then session.
    const email = payloadEmail || sessionUser.email;

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