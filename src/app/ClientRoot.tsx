'use client'

import { AuthProvider } from '@/lib/auth-context';
import { BrandProvider } from '@/lib/brand-context';
import { Toaster } from 'sonner';
import Footer from '@/components/footer';
import { createContext, useState } from 'react';
import { usePathname } from 'next/navigation';

// Kroid context for persona selection
const DEFAULT_DROIDS = {
  orchestrator: {},
  strategist: {},
  copywriter: {},
  designer: {},
  analyst: {},
  community: {},
};
type DroidKey = keyof typeof DEFAULT_DROIDS;

export const KroidContext = createContext<{
  selectedDroid: DroidKey;
  setSelectedDroid: (d: DroidKey) => void;
}>({
  selectedDroid: 'orchestrator',
  setSelectedDroid: () => {},
});

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const [selectedDroid, setSelectedDroid] = useState<DroidKey>('orchestrator');
  const pathname = usePathname();
  
  // Don't show footer on dashboard pages
  const isDashboard = pathname?.startsWith('/dashboard');
  
  return (
    <AuthProvider>
      <BrandProvider>
        <KroidContext.Provider value={{ selectedDroid, setSelectedDroid }}>
          <main className={isDashboard ? "min-h-screen" : "flex-grow"}>
            {children}
          </main>
          {!isDashboard && <Footer />}
          <Toaster />
        </KroidContext.Provider>
      </BrandProvider>
    </AuthProvider>
  );
} 