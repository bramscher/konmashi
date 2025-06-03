import React from 'react';

const DROIDS = [
  { key: 'orchestrator', icon: '🤖', name: 'Orchestrator', role: 'Orchestrator' },
  { key: 'strategist', icon: '🧠', name: 'Alex "Strategy" Meyer', role: 'Content Strategist' },
  { key: 'copywriter', icon: '✍️', name: 'Priya "Wordsmith" Patel', role: 'Copywriter' },
  { key: 'designer', icon: '🎨', name: 'Marco "Visual" Santos', role: 'Designer' },
  { key: 'analyst', icon: '📊', name: 'Sofia "Metrics" Ruiz', role: 'Analyst' },
  { key: 'community', icon: '💬', name: 'Diego "Connector" Kim', role: 'Community Manager' },
];

const navLinks = [
  { label: 'Content Generation', disabled: true },
  { label: 'Ideabank', disabled: true },
  { label: 'Social Connections', disabled: true },
  { label: 'Brand Identity', disabled: true },
  { label: 'Content Calendar', disabled: true },
  { label: 'Analytics', disabled: true },
];

export default function Sidebar({ selectedPersona, onSelectPersona }: {
  selectedPersona: string;
  onSelectPersona: (persona: string) => void;
}) {
  return (
    <aside className="h-full w-64 bg-background border-r flex flex-col py-6 px-4">
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Droids</h2>
        <nav className="flex flex-col gap-2">
          {DROIDS.map((droid) => (
            <button
              key={droid.key}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${selectedPersona === droid.key ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
              onClick={() => onSelectPersona(droid.key)}
              aria-current={selectedPersona === droid.key ? 'page' : undefined}
            >
              <span className="text-2xl">{droid.icon}</span>
              <span className="flex flex-col">
                <span className="font-medium leading-tight">{droid.name}</span>
                <span className="text-xs text-muted-foreground leading-tight">{droid.role}</span>
              </span>
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold mb-4">Navigation</h2>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-left text-muted-foreground bg-muted cursor-not-allowed"
              disabled
            >
              <span>{link.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
} 