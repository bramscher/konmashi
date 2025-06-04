"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BrandSetupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [hasBrands, setHasBrands] = useState(false);

  useEffect(() => {
    async function checkBrands() {
      setLoading(true);
      try {
        const res = await fetch('/api/brand/list');
        const data = await res.json();
        if (res.ok && data.brands && data.brands.length > 0) {
          setHasBrands(true);
          router.replace('/dashboard/brands');
        } else {
          setHasBrands(false);
        }
      } catch {
        setHasBrands(false);
      }
      setLoading(false);
    }
    checkBrands();
  }, [router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading…</div>;
  }

  if (hasBrands) {
    return null;
  }

  // For first-time onboarding, just prompt to go to Manage Brands
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Set Up Your First Brand</h1>
        <p className="text-center mb-6 text-muted-foreground">Tell us about your brand to help Konmashi generate the perfect content for you.</p>
        <div className="text-center">
          <a href="/dashboard/brands" className="underline text-blue-600">Go to Manage Brands</a>
        </div>
      </div>
    </div>
  );
} 