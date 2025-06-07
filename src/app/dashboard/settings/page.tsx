"use client";

import { useAuth } from '@/lib/auth-context';
import { useBrand } from '@/lib/brand-context';
import BrandThemeSelector from '@/components/brand/BrandThemeSelector';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Palette } from 'lucide-react';

export default function UserSettingsPage() {
  const { user, prismaUser, signOut, loading } = useAuth();
  const { brands, selectedBrand } = useBrand();

  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if user is team admin
  const isTeamAdmin = (prismaUser as any)?.teamMemberships?.some((m: any) => m.role === 'ADMIN');

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      {/* Theme Administration - Only for Team Admins */}
      {isTeamAdmin && brands.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Brand Theme Administration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              As a team admin, you can customize the theme colors for each brand.
            </p>
            <div className="grid gap-4">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-gray-200"
                      style={{ backgroundColor: `rgb(var(--primary))` }}
                    />
                    <div>
                      <h3 className="font-medium">{brand.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Current theme: {brand.themeColor || 'RED'}
                      </p>
                    </div>
                  </div>
                  <BrandThemeSelector
                    brandId={brand.id}
                    currentTheme={brand.themeColor || 'RED'}
                    onThemeChange={() => {/* Theme change handled by context */}}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p><strong>Email:</strong> {user?.email}</p>
            <p className="text-muted-foreground">Profile editing coming soon.</p>
          </div>
        </CardContent>
      </Card>

      {/* Team Memberships */}
      <Card>
        <CardHeader>
          <CardTitle>Team Memberships</CardTitle>
        </CardHeader>
        <CardContent>
          {Array.isArray((prismaUser as any)?.teamMemberships) && (prismaUser as any).teamMemberships.length > 0 ? (
            <div className="space-y-2">
              {(prismaUser as any).teamMemberships.map((m: any) => (
                <div key={m.id} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">{m.team.name}</p>
                    <p className="text-sm text-muted-foreground">Role: {m.role}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">ID: {m.team.id}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No team memberships found.</p>
          )}
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <button
            onClick={signOut}
            className="bg-destructive text-destructive-foreground rounded px-4 py-2 hover:bg-destructive/90 transition-colors"
          >
            Sign Out
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
