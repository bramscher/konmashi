'use client'
import React from 'react';
import { useBrand } from '@/lib/brand-context';

export default function Canvas({ selectedTab }: { selectedTab?: string }) {
  const { selectedBrand } = useBrand();
  return (
    <div className="bg-muted rounded-lg flex flex-col items-center justify-center h-full w-full p-4">
      <h2 className="text-xl font-semibold mb-2">Canvas Area</h2>
      {selectedBrand ? (
        <>
          <div className="mb-2">Brand: <b>{selectedBrand.name}</b></div>
          {selectedTab && <div className="mb-2">Section: <b>{selectedTab}</b></div>}
          <div className="text-muted-foreground text-center max-w-xs">
            {selectedTab 
              ? `[Content for ${selectedTab} section will appear here]`
              : '[Brand-specific content and tools will appear here]'
            }
          </div>
        </>
      ) : (
        <p className="text-muted-foreground text-center max-w-xs">
          Select a brand to view brand-specific content and tools.
        </p>
      )}
    </div>
  );
} 