"use client";
import { useEffect, useState } from 'react';
import BrandCreateForm from '@/components/brand/BrandCreateForm';
import BrandIdentityForm from '@/components/brand/BrandIdentityForm';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Pencil, PlusCircle, X } from 'lucide-react';

// TODO: Replace 'any' with a proper Brand type
export default function ManageBrandsPage() {
  const [brands, setBrands] = useState<any[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBrands = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/brand/list');
      const data = await res.json();
      if (res.ok) {
        setBrands(data.brands);
      } else {
        setError(data.error || 'Failed to load brands.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-2xl mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Manage Brands</CardTitle>
          </CardHeader>
          <CardContent>
            <BrandCreateForm onCreate={fetchBrands} />
          </CardContent>
        </Card>
      </div>
      {loading ? (
        <div>Loading brands…</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : brands.length === 0 ? (
        <div>No brands found.</div>
      ) : (
        <div className="w-full max-w-2xl flex flex-col gap-6">
          {brands.map((brand: any) => {
            // Determine if the identity is populated (not just brandName)
            const identity = brand.identity;
            const hasIdentity = identity && (
              identity.industry || identity.voiceDescriptors?.length > 0 || identity.targetAudience || identity.brandManifesto
            );
            return (
              <Card key={brand.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{brand.name}</span>
                    <button
                      className="flex items-center gap-1 text-blue-600 underline text-sm ml-2"
                      onClick={() => setEditing(editing === brand.id ? null : brand.id)}
                    >
                      {editing === brand.id ? (
                        <><X className="w-4 h-4 mr-1" /> Cancel</>
                      ) : hasIdentity ? (
                        <><Pencil className="w-4 h-4 mr-1" /> Edit Identity</>
                      ) : (
                        <><PlusCircle className="w-4 h-4 mr-1" /> Set Up Identity</>
                      )}
                    </button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {editing === brand.id && (
                    <BrandIdentityForm
                      brand={brand}
                      initial={brand.identity}
                      onSave={() => {
                        setEditing(null);
                        fetchBrands();
                      }}
                    />
                  )}
                  {brand.identity && editing !== brand.id && (
                    <div className="text-sm text-muted-foreground">
                      <div><b>Industry:</b> {brand.identity.industry}</div>
                      <div><b>Voice:</b> {(brand.identity.voiceDescriptors || []).join(', ')}</div>
                      <div><b>Audience:</b> {brand.identity.targetAudience}</div>
                      {brand.identity.brandManifesto && <div><b>Manifesto:</b> {brand.identity.brandManifesto}</div>}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
} 