'use client';

import React from 'react';

export default function SettingsPagePlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center">
      <div className="bg-card p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Settings
        </h1>
        <p className="text-xl text-muted-foreground mb-2">
          This page is under construction.
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          Exciting new features for managing your account and preferences are coming soon!
        </p>
        <div className="animate-pulse text-primary text-2xl">
          ⚙️ ... 🛠️ ... ⏳
        </div>
      </div>
    </div>
  );
}
