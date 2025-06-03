"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Base",
    price: 49.99,
    annual: 49.99 * 12 * 0.85,
    description: "For individuals and small teams getting started with AI-powered content.",
    features: [
      "Includes 1,000 content creation tokens/month",
      "1 brand workspace",
      "Up to 3 connected social accounts",
      "Unlimited content generation",
      "Ideabank & Kanban workflow",
      "Basic analytics dashboard",
      "Email support"
    ],
    cta: "Start Base Plan"
  },
  {
    name: "Creator",
    price: 149,
    annual: 149 * 12 * 0.85,
    description: "For creators and growing businesses who want more power and flexibility.",
    features: [
      "Includes 5,000 content creation tokens/month",
      "Up to 3 brand workspaces",
      "Up to 10 connected social accounts",
      "Advanced content scheduling",
      "Brand voice learning",
      "Priority email support"
    ],
    cta: "Start Creator Plan"
  },
  {
    name: "Agency Starter",
    price: 499,
    annual: 499 * 12 * 0.85,
    description: "For agencies managing multiple clients and brands at scale.",
    features: [
      "Includes 10,000 content creation tokens/month",
      "10+ brand workspaces",
      "Unlimited social accounts",
      "Multi-client dashboard",
      "Team collaboration tools",
      "Dedicated onboarding & support"
    ],
    cta: "Start Agency Plan"
  }
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header/Navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold">Konmashi</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Simple, transparent pricing. No hidden fees. Save 15% with annual billing.
        </p>
        <div className="flex justify-center items-center mb-12 gap-4">
          <span className="text-muted-foreground font-medium">Monthly</span>
          <button
            className={`w-14 h-8 rounded-full border transition-colors ${annual ? 'bg-primary' : 'bg-muted'}`}
            onClick={() => setAnnual(!annual)}
            aria-label="Toggle annual pricing"
          >
            <span
              className={`block w-7 h-7 rounded-full bg-white shadow transition-transform ${annual ? 'translate-x-6' : ''}`}
              style={{ transform: annual ? 'translateX(24px)' : 'translateX(0)' }}
            />
          </button>
          <span className="text-muted-foreground font-medium">Annual <span className="text-primary">(15% off)</span></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-8 rounded-2xl border bg-card flex flex-col items-center shadow-sm relative ${plan.name === 'Creator' ? 'border-primary ring-2 ring-primary' : ''}`}>
              {plan.name === 'Creator' && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full shadow">
                  Most Purchased
                </div>
              )}
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="text-muted-foreground mb-2">{plan.description}</div>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold text-primary">
                  ${annual ? plan.annual.toFixed(0) : plan.price}
                </span>
                <span className="text-muted-foreground ml-2 mb-1 text-lg">/mo</span>
              </div>
              {annual && (
                <div className="text-xs text-primary mb-2">Billed annually (${(annual ? plan.annual : plan.price * 12).toFixed(0)}/yr)</div>
              )}
              <ul className="text-left mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-primary">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={"/signup"}>
                <Button size="lg" className="w-full">{plan.cta}</Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 text-muted-foreground text-sm max-w-2xl mx-auto">
          All plans include access to your 24/7 AI marketing team, unlimited content generation, and core platform features. Cancel anytime. For custom or enterprise plans, <Link href="/contact" className="underline">contact us</Link>.
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by creators and businesses worldwide. Built with security and privacy in mind.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <span>SOC 2 Compliant</span>
            <span>•</span>
            <span>GDPR Ready</span>
            <span>•</span>
            <span>99.9% Uptime SLA</span>
          </div>
        </div>
      </section>
    </div>
  );
} 