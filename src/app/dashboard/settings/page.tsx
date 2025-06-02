"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  const [name, setName] = useState("");
  const [licenseCount, setLicenseCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      const res = await fetch("/api/team/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, licenseCount }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(`Team '${data.team.name}' created!`);
        setName("");
        setLicenseCount(1);
      } else {
        setError(data.error || "Failed to create team.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center">
      <div className="bg-card p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-primary mb-4">Settings</h1>
        <h2 className="text-2xl font-semibold mb-4">Create a Team</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <Label htmlFor="team-name">Team Name</Label>
            <Input
              id="team-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Acme Corp"
              required
              className="mt-1"
            />
          </div>
          <div className="text-left">
            <Label htmlFor="license-count">Number of Licenses</Label>
            <Input
              id="license-count"
              type="number"
              min={1}
              value={licenseCount}
              onChange={(e) => setLicenseCount(Number(e.target.value))}
              required
              className="mt-1"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating..." : "Create Team"}
          </Button>
        </form>
        {message && <div className="mt-4 text-green-600">{message}</div>}
        {error && <div className="mt-4 text-red-600">{error}</div>}
      </div>
    </div>
  );
}
