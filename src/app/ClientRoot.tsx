'use client'

import { AuthProvider } from '@/lib/auth-context';
import { Toaster } from 'sonner';
import Footer from '@/components/footer';
import { createContext, useState } from 'react'

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
  return (
    <AuthProvider>
      <KroidContext.Provider value={{ selectedDroid, setSelectedDroid }}>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </KroidContext.Provider>
    </AuthProvider>
  );
} 