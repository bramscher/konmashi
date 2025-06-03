'use client'

import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import DroidChat from '@/components/ui/PersonaChat'

export default function DashboardPage() {
  const auth = useAuth()
  const { user, hasCompletedOnboarding, loading, signOut } = auth
  const router = useRouter()
  const pathname = usePathname()
  const [selectedDroid, setSelectedDroid] = useState('orchestrator')

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
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar selectedPersona={selectedDroid} onSelectPersona={setSelectedDroid} />
      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">Welcome to your Konmashi Dashboard</h1>
        {/* Two-column layout: Chat (left), Canvas (right) */}
        <section className="mb-10 flex flex-col md:flex-row gap-6 h-[70vh]">
          {/* Left: Chat or Persona Widget */}
          <div className="flex-1 md:w-1/2 h-full flex flex-col">
            {selectedDroid && <DroidChat droidKey={selectedDroid} />}
          </div>
          {/* Right: Canvas */}
          <div className="flex-1 md:w-1/2 h-full bg-muted rounded-lg flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold mb-2">Canvas Area</h2>
            <p className="text-muted-foreground text-center max-w-xs">This area will display outputs, previews, and context for the selected persona. (To be flushed out.)</p>
          </div>
        </section>
        {/* Existing dashboard content can go here, or be moved into persona widgets as needed */}
      </main>
    </div>
  )
} 