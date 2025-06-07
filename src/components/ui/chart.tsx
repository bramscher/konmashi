import * as React from "react";

// Type for chart config
export type ChartConfig = Record<string, { label: string; color: string }>;

// Simple container for chart area
export function ChartContainer({ children, config }: { children: React.ReactNode; config: ChartConfig }) {
  return (
    <div className="w-full h-48 flex items-center justify-center bg-muted rounded-lg">
      {children}
    </div>
  );
}

// Placeholder for chart tooltip
export function ChartTooltip({ children, ...props }: { children: React.ReactNode }) {
  return <g>{children}</g>;
}

export function ChartTooltipContent({ indicator }: { indicator?: string }) {
  return <div className="text-xs text-muted-foreground">Tooltip</div>;
} 