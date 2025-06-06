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
  ChevronRightIcon
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

// Droids as compact icon row
const DROIDS = [
  { key: 'orchestrator', icon: <Bot size={20} />, name: 'Orchestrator' },
  { key: 'strategist', icon: <FileText size={20} />, name: 'Strategist' },
  { key: 'copywriter', icon: <FileText size={20} />, name: 'Copywriter' },
  { key: 'designer', icon: <BadgePercent size={20} />, name: 'Designer' },
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

export default function Sidebar() {
  const { selectedDroid: selectedPersona, setSelectedDroid: onSelectPersona } = useContext(KroidContext)
  const router = useRouter();
  // Set all sections to expanded by default
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    () => Object.fromEntries(NAV_SECTIONS.map(section => [section.label, true]))
  );
  // Brand switcher state
  const [brands, setBrands] = useState<any[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<any>(null);

  // Fetch brands on mount
  useEffect(() => {
    async function fetchBrands() {
      try {
        const res = await fetch('/api/brand/list');
        const data = await res.json();
        if (res.ok && data.brands) {
          setBrands(data.brands);
          // Try to restore last selected brand from localStorage
          const lastId = typeof window !== 'undefined' ? localStorage.getItem('selectedBrandId') : null;
          const found = data.brands.find((b: any) => b.id === lastId) || data.brands[0];
          setSelectedBrand(found);
        }
      } catch {}
    }
    fetchBrands();
  }, []);

  // Store selected brand in localStorage
  useEffect(() => {
    if (selectedBrand && typeof window !== 'undefined') {
      localStorage.setItem('selectedBrandId', selectedBrand.id);
    }
  }, [selectedBrand]);

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="h-full w-56 bg-background border-r flex flex-col py-4 px-2">
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
                <span className="bg-muted rounded-full p-1 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-muted-foreground" />
                </span>
                <span className="flex-1 text-left font-medium truncate">{selectedBrand?.name || 'Select a brand'}</span>
                <ChevronRightIcon className="w-4 h-4 text-muted-foreground ml-auto" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              <DropdownMenuLabel>Brands</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {brands.map((brand: any, idx: number) => (
                <DropdownMenuItem
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand)}
                  className="flex items-center gap-2"
                >
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  <span className="flex-1 truncate">{brand.name}</span>
                  {selectedBrand?.id === brand.id && <Check className="w-4 h-4 text-primary ml-auto" />}
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
    </aside>
  );
} 