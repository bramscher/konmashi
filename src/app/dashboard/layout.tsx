'use client'

import Sidebar from '@/components/dashboard/Sidebar'
import { ReactNode, createContext, useState } from 'react'

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

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [selectedDroid, setSelectedDroid] = useState<DroidKey>('orchestrator');
  return (
    <KroidContext.Provider value={{ selectedDroid, setSelectedDroid }}>
      <div className="min-h-screen bg-background flex">
        {/* Sidebar */}
        <Sidebar selectedPersona={selectedDroid} onSelectPersona={setSelectedDroid} />
        {/* Main content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </KroidContext.Provider>
  )
} 