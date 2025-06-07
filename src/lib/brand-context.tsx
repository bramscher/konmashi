'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';
import { applyBrandTheme, BrandThemeColor } from '@/lib/theme-config';

interface Brand {
  id: string;
  name: string;
  teamId: string;
  themeColor: BrandThemeColor;
  createdAt: string;
  updatedAt: string;
  identity?: any; // BrandIdentity
}

interface BrandContextType {
  selectedBrand: Brand | null;
  setSelectedBrand: (brand: Brand | null) => void;
  brands: Brand[];
  setBrands: (brands: Brand[]) => void;
  loading: boolean;
  error: string | null;
  refreshBrands: () => Promise<void>;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [selectedBrand, setSelectedBrandState] = useState<Brand | null>(null);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Custom setter that also updates localStorage and applies theme
  const setSelectedBrand = (brand: Brand | null) => {
    setSelectedBrandState(brand);
    if (brand && typeof window !== 'undefined') {
      localStorage.setItem('selectedBrandId', brand.id);
      console.log('Applying brand theme:', brand.name, brand.themeColor);
      // Apply brand theme to CSS custom properties
      applyBrandTheme(brand.themeColor);
    } else if (typeof window !== 'undefined') {
      localStorage.removeItem('selectedBrandId');
    }
  };

  // Fetch brands from API
  const refreshBrands = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/brand/list');
      const data = await res.json();
      if (res.ok && data.brands) {
        setBrands(data.brands);
        
        // Restore selected brand from localStorage or default to first
        const lastId = typeof window !== 'undefined' ? localStorage.getItem('selectedBrandId') : null;
        const found = data.brands.find((b: Brand) => b.id === lastId) || data.brands[0] || null;
        setSelectedBrandState(found);
        
        if (found && typeof window !== 'undefined') {
          localStorage.setItem('selectedBrandId', found.id);
          console.log('Applying initial brand theme:', found.name, found.themeColor);
          // Apply the brand's theme immediately
          applyBrandTheme(found.themeColor);
        }
      } else {
        setError(data.error || 'Failed to load brands');
      }
    } catch (err) {
      setError('An unexpected error occurred while loading brands');
    } finally {
      setLoading(false);
    }
  };

  // Load brands on mount
  useEffect(() => {
    refreshBrands();
  }, []);

  const value: BrandContextType = {
    selectedBrand,
    setSelectedBrand,
    brands,
    setBrands,
    loading,
    error,
    refreshBrands,
  };

  return (
    <BrandContext.Provider value={value}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
} 