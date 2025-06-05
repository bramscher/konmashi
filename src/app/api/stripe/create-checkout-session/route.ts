import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const userId = session.user.id;
    const { teamId, priceId, quantity } = await req.json();
    if (!teamId || !priceId || !quantity || typeof teamId !== 'string' || typeof priceId !== 'string' || typeof quantity !== 'number') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }
    // Check if user is ADMIN for the team
    const membership = await prisma.teamMember.findFirst({ where: { userId, teamId, role: 'ADMIN' } });
    if (!membership) {
      return NextResponse.json({ error: 'You are not an admin for this team.' }, { status: 403 });
    }
    // Get the team and its Stripe customer ID
    const team = await prisma.team.findUnique({ where: { id: teamId } });
    if (!team) {
      return NextResponse.json({ error: 'Team not found' }, { status: 404 });
    }
    let stripeCustomerId = team.stripeCustomerId;
    // If no Stripe customer, create one
    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        metadata: { teamId: team.id, teamName: team.name },
      });
      stripeCustomerId = customer.id;
      await prisma.team.update({ where: { id: team.id }, data: { stripeCustomerId } });
    }
    // Create the Stripe Checkout Session
    const sessionObj = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer: stripeCustomerId,
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/settings?checkout=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/settings?checkout=cancel`,
      metadata: {
        teamId: team.id,
      },
    });
    return NextResponse.json({ url: sessionObj.url });
  } catch (error) {
    console.error('Error creating Stripe Checkout Session:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 