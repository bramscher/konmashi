'use client'
import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Settings as SettingsIcon,
  FileText,
  Lightbulb,
  Link2,
  BadgePercent,
  Calendar,
  BarChart2,
  Users,
  Bot,
  Building2,
  PlusCircle,
  Check,
  ChevronRightIcon,
  Target,
  PenLine,
  Palette
} from 'lucide-react';
import { KroidContext } from '@/app/ClientRoot';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../ui/select';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut
} from '../ui/dropdown-menu';
import { useAuth } from '@/lib/auth-context';
import { useBrand } from '@/lib/brand-context';
import { THEME_COLOR_MAP } from '@/lib/theme-config';

// Droids as compact icon row
const DROIDS = [
  { key: 'orchestrator', icon: <Bot size={20} />, name: 'Orchestrator' },
  { key: 'strategist', icon: <Target size={20} />, name: 'Strategist' },
  { key: 'copywriter', icon: <PenLine size={20} />, name: 'Copywriter' },
  { key: 'designer', icon: <Palette size={20} />, name: 'Designer' },
  { key: 'analyst', icon: <BarChart2 size={20} />, name: 'Analyst' },
  { key: 'community', icon: <Users size={20} />, name: 'Community' },
];

const NAV_SECTIONS = [
  {
    label: 'Content',
    icon: <FileText size={18} />,
    links: [
      { label: 'Content Generation', path: '/content-generation' },
      { label: 'Content Calendar', path: '/dashboard/content/calendar' },
      { label: 'Analytics', path: '/analytics' },
    ],
  },
  {
    label: 'Ideas',
    icon: <Lightbulb size={18} />,
    links: [
      { label: 'Ideabank', path: '/ideabank' },
    ],
  },
  {
    label: 'Social',
    icon: <Link2 size={18} />,
    links: [
      { label: 'Social Connections', path: '/social-connections' },
    ],
  },
  {
    label: 'Brand',
    icon: <BadgePercent size={18} />,
    links: [
      { label: 'Brand Identity', path: '/dashboard/brand-setup' },
      { label: 'Manage Brands', path: '/dashboard/brands' },
    ],
  },
  {
    label: 'Settings',
    icon: <SettingsIcon size={18} />,
    links: [
      { label: 'User Settings', path: '/dashboard/settings' },
      { label: 'Team Admin', path: '/dashboard/team-admin' },
    ],
  },
];

type DroidKey = 'orchestrator' | 'strategist' | 'copywriter' | 'designer' | 'analyst' | 'community';

// Define Brand type
interface Brand {
  id: string;
  name: string;
  themeColor: string;
  // Add more fields as needed
}

export default function Sidebar() {
  const { selectedDroid: selectedPersona, setSelectedDroid: onSelectPersona } = useContext(KroidContext)
  const router = useRouter();
  // Set all sections to expanded by default
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    () => Object.fromEntries(NAV_SECTIONS.map(section => [section.label, true]))
  );
  // Get current Supabase user and brand context
  const { user, signOut } = useAuth();
  const { selectedBrand, setSelectedBrand, brands } = useBrand();

  // Helper function to get brand's primary color as RGB
  const getBrandColor = (themeColor: string) => {
    const theme = THEME_COLOR_MAP[themeColor as keyof typeof THEME_COLOR_MAP];
    return theme ? `rgb(${theme.primary})` : 'rgb(239 68 68)'; // fallback to red
  };

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="h-screen w-56 bg-background border-r flex flex-col py-4 px-2">
      <div className="flex-1 flex flex-col">
        {/* Logo and App Name */}
        <div className="flex items-center gap-2 mb-2 px-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">K</span>
          </div>
          <span className="text-xl font-bold">Konmashi</span>
        </div>
        {/* Brand Switcher */}
        <div className="mb-4 px-2">
          {brands.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-muted transition-colors border">
                  <span 
                    className="rounded-full p-1 flex items-center justify-center"
                    style={{ 
                      backgroundColor: selectedBrand ? getBrandColor(selectedBrand.themeColor) : 'hsl(var(--muted))'
                    }}
                  >
                    <Building2 
                      className="w-5 h-5" 
                      style={{ 
                        color: selectedBrand ? 'white' : 'hsl(var(--muted-foreground))'
                      }} 
                    />
                  </span>
                  <span className="flex-1 text-left font-medium truncate">{selectedBrand?.name || 'Select a brand'}</span>
                  <ChevronRightIcon className="w-4 h-4 text-muted-foreground ml-auto" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuLabel>Brands</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {brands.map((brand, idx) => (
                  <DropdownMenuItem
                    key={brand.id}
                    onClick={() => setSelectedBrand(brand)}
                    className="flex items-center gap-2"
                  >
                    <span 
                      className="rounded-full p-1 flex items-center justify-center"
                      style={{ 
                        backgroundColor: getBrandColor(brand.themeColor)
                      }}
                    >
                      <Building2 
                        className="w-3 h-3" 
                        style={{ color: 'white' }} 
                      />
                    </span>
                    <span className="flex-1 truncate">{brand.name}</span>
                    {selectedBrand?.id === brand.id && (
                      <Check 
                        className="w-4 h-4 ml-auto" 
                        style={{ color: getBrandColor(brand.themeColor) }}
                      />
                    )}
                    <DropdownMenuShortcut>{`⌘${idx + 1}`}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2 text-muted-foreground" onClick={() => router.push('/dashboard/brands')}>
                  <PlusCircle className="w-4 h-4" />
                  <span>Add brand</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        {/* Kroids label above icons */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-xs text-muted-foreground mb-1">Kroids</span>
          <div className="flex gap-2">
            {DROIDS.map((droid) => (
              <button
                key={droid.key}
                className={`rounded-full p-1 hover:bg-muted ${selectedPersona === droid.key ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => {
                  onSelectPersona(droid.key as DroidKey);
                  router.push('/dashboard');
                }}
                title={droid.name}
                aria-label={droid.name}
              >
                {droid.icon}
              </button>
            ))}
          </div>
        </div>
        {/* Modular, collapsible nav sections */}
        <nav className="flex flex-col gap-2">
          {NAV_SECTIONS.map((section) => (
            <div key={section.label}>
              <button
                className="flex items-center gap-2 w-full px-2 py-2 rounded-lg font-medium hover:bg-muted transition-colors"
                onClick={() => toggleSection(section.label)}
                aria-expanded={!!openSections[section.label]}
              >
                {section.icon}
                <span>{section.label}</span>
                <span className="ml-auto text-xs">{openSections[section.label] ? '▲' : '▼'}</span>
              </button>
              {openSections[section.label] && (
                <div className="ml-6 flex flex-col gap-1 mt-1">
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.path}
                      className="text-sm px-2 py-1 rounded hover:bg-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="sticky bottom-0 left-0 w-full p-2 border-t bg-background">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-muted transition-colors">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-medium text-sm">
                {user?.user_metadata?.name?.[0] || user?.email?.[0]?.toUpperCase() || 'U'}
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-medium truncate">
                  {user?.user_metadata?.name || user?.email?.split('@')[0] || 'User'}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {user?.email || ''}
                </div>
              </div>
              <ChevronRightIcon className="w-4 h-4 text-muted-foreground ml-auto" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push('/dashboard/settings')}>
              <SettingsIcon className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/dashboard/team-admin')}>
              <Users className="w-4 h-4 mr-2" />
              Team Admin
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-red-600 focus:text-red-600"
              onClick={async () => {
                await signOut();
                router.push('/');
              }}
            >
              <span className="w-4 h-4 mr-2">⏻</span>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
} 