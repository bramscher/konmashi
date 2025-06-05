function getStripeId(val: any): string | undefined {
  if (!val) return undefined;
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && typeof val.id === 'string') return val.id;
  return undefined;
}

import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';

const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  if (!STRIPE_WEBHOOK_SECRET || !sig) {
    return NextResponse.json({ error: 'Webhook secret or signature missing' }, { status: 400 });
  }

  let event;
  const buf = Buffer.from(await req.arrayBuffer());
  try {
    event = stripe.webhooks.constructEvent(buf, sig, STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const teamId = session.metadata?.teamId;
        const subscriptionId = getStripeId(session.subscription);
        if (teamId && subscriptionId) {
          await prisma.team.update({
            where: { id: teamId },
            data: {
              stripeSubscriptionId: subscriptionId,
              subscriptionStatus: 'active',
            },
          });
        }
        break;
      }
      case 'customer.subscription.updated':
      case 'customer.subscription.created': {
        const subscription = event.data.object;
        const customerId = getStripeId(subscription.customer);
        const status = subscription.status;
        const quantity = subscription.items.data[0]?.quantity || 1;
        // Find the team by Stripe customer ID
        const team = await prisma.team.findFirst({ where: { stripeCustomerId: customerId } });
        if (team) {
          await prisma.team.update({
            where: { id: team.id },
            data: {
              licenseCount: quantity,
              subscriptionStatus: status,
              stripeSubscriptionId: subscription.id,
            },
          });
        }
        break;
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        const customerId = getStripeId(subscription.customer);
        // Find the team by Stripe customer ID
        const team = await prisma.team.findFirst({ where: { stripeCustomerId: customerId } });
        if (team) {
          await prisma.team.update({
            where: { id: team.id },
            data: {
              subscriptionStatus: 'canceled',
            },
          });
        }
        break;
      }
      case 'invoice.paid': {
        // Optionally handle invoice paid events
        break;
      }
      default:
        console.log(`Unhandled Stripe event type: ${event.type}`);
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error handling Stripe webhook event:', error);
    return NextResponse.json({ error: 'Webhook handler error' }, { status: 400 });
  }
} 