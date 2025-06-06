'use client'

import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState, useContext } from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import DroidChat from '@/components/ui/PersonaChat'
import { KroidContext } from '@/app/ClientRoot'

const DEFAULT_DROIDS = {
  orchestrator: {},
  strategist: {},
  copywriter: {},
  designer: {},
  analyst: {},
  community: {},
};

type DroidKey = keyof typeof DEFAULT_DROIDS;

export default function DashboardPage() {
  const auth = useAuth()
  const { user, prismaUser, hasCompletedOnboarding, loading, signOut } = auth
  const router = useRouter()
  const pathname = usePathname()
  const { selectedDroid, setSelectedDroid } = useContext(KroidContext)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  // Redirect to brand setup if onboarding is not complete
  useEffect(() => {
    if (!loading && user && hasCompletedOnboarding === false) {
      if (pathname !== '/dashboard/brand-setup') {
        router.push('/dashboard/brand-setup');
      }
    }
  }, [user, hasCompletedOnboarding, loading, router, pathname]);

  // Existing useEffect for debugging auth context - keep for console confirmation
  useEffect(() => {
    console.log('DashboardPage useEffect fired. Auth context:', auth);
  }, [auth]);

  // Welcome message logic
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Morning';
    if (hour < 18) return 'Afternoon';
    return 'Evening';
  }
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const greeting = getGreeting();
  const userNameRaw = prismaUser?.email?.split('@')[0] || user?.email?.split('@')[0] || 'User';
  const userName = capitalize(userNameRaw);
  const teamName = (prismaUser as any)?.teamMemberships?.[0]?.team?.name || 'your team';

  if (loading && !user) { // Show loading only if user is not yet available (initial load)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading authentication...</p>
        </div>
      </div>
    )
  }

  // If user needs to be redirected for onboarding, show minimal content or a specific loading state
  // until the redirect happens. Or, if brand-setup is also using this layout, it might be fine.
  // For now, if hasCompletedOnboarding is false, and we are not on brand-setup, this component might render briefly.
  // The redirect should happen quickly.
  if (hasCompletedOnboarding === false && pathname !== '/dashboard/brand-setup') {
      return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Redirecting to brand setup...</p>
            </div>
        </div>
        );
  }

  if (!user) {
    // This case should ideally be handled by the redirect above if loading is false
    // Or, it might be briefly hit if loading becomes false but user is still null before redirect happens.
    return null 
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-2">
        {greeting}, {userName} <span className="text-primary font-bold">@</span> <span className="text-muted-foreground">{teamName}</span>, what do you want to do today?
      </h1>
      {/* Main dashboard content: Chat or Persona Widget */}
      <div className="flex-1 flex flex-col">
        {selectedDroid && <DroidChat droidKey={selectedDroid} />}
      </div>
      {/* Existing dashboard content can go here, or be moved into persona widgets as needed */}
    </>
  )
} 