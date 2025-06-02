'use client'

import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const auth = useAuth()
  const { user, prismaUser, hasCompletedOnboarding, loading, signOut } = auth
  const router = useRouter()
  const pathname = usePathname()

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
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold">Konmashi</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {user.email}
            </span>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Welcome to your Konmashi Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Placeholder cards for future features */}
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-semibold mb-2">Content Generation</h3>
              <p className="text-muted-foreground mb-4">
                Create AI-powered content for your brand
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-semibold mb-2">Ideabank</h3>
              <p className="text-muted-foreground mb-4">
                Capture and organize your content ideas
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-semibold mb-2">Social Connections</h3>
              <p className="text-muted-foreground mb-4">
                Connect your social media accounts
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-semibold mb-2">Brand Identity</h3>
              <p className="text-muted-foreground mb-4">
                Define your brand voice and style
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-semibold mb-2">Content Calendar</h3>
              <p className="text-muted-foreground mb-4">
                Schedule and manage your posts
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Track your content performance
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">🚧 Under Construction</h2>
            <p className="text-muted-foreground">
              Your Konmashi dashboard is being built! The next development phase will include:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-1 text-muted-foreground">
              <li>AI-powered content generation</li>
              <li>Brand identity setup</li>
              <li>Content ideabank and management</li>
              <li>Social media integrations</li>
              <li>Content scheduling and publishing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 