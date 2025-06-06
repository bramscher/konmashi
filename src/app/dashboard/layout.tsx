'use client'

import Sidebar from '@/components/dashboard/Sidebar'
import { ReactNode } from 'react'
import Canvas from '@/components/dashboard/Canvas'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content + Canvas */}
      <div className="flex flex-1 p-8 gap-6">
        {/* Left: Main content (children) */}
        <div className="flex-1 md:w-1/2 h-full flex flex-col">
          {children}
        </div>
        {/* Right: Canvas (persistent) */}
        <div className="flex-1 md:w-1/2 h-full">
          <Canvas />
        </div>
      </div>
    </div>
  )
} 