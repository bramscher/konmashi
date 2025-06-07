import * as React from "react";

export function SidebarMenu({ children }: { children: React.ReactNode }) {
  return <nav className="flex flex-col gap-1">{children}</nav>;
}

export function SidebarMenuItem({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-2 px-2 py-1">{children}</div>;
}

export function SidebarMenuButton({ children, size = "md", className = "", ...props }: any) {
  const sizes = { md: "h-8 px-2", lg: "h-10 px-3 text-base" };
  return <button className={`rounded-lg flex items-center gap-2 ${sizes[size] || sizes.md} ${className}`} {...props}>{children}</button>;
}

export function useSidebar() {
  // For demo, just return isMobile: false
  return { isMobile: false };
} 