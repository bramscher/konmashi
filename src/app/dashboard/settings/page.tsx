"use client";

import { useAuth } from '@/lib/auth-context';

export default function UserSettingsPage() {
  const { user, prismaUser, signOut, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">User Settings</h1>
      <div className="bg-white dark:bg-gray-900 rounded shadow p-6 mb-8">
        <h2 className="text-lg font-semibold mb-2">Profile</h2>
        <p><strong>Email:</strong> {user?.email}</p>
        {/* Placeholder for profile editing */}
        <p className="text-gray-500 mt-2">Profile editing coming soon.</p>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded shadow p-6 mb-8">
        <h2 className="text-lg font-semibold mb-2">Team Memberships</h2>
        {Array.isArray((prismaUser as any)?.teamMemberships) && (prismaUser as any).teamMemberships.length > 0 ? (
          <ul className="list-disc pl-6">
            {(prismaUser as any).teamMemberships.map((m: any) => (
              <li key={m.id}>
                <span className="font-medium">Team:</span> {m.team.name} <span className="ml-2">(<span className="font-medium">ID:</span> {m.team.id}, <span className="font-medium">Role:</span> {m.role})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No team memberships found.</p>
        )}
      </div>
      <button
        onClick={signOut}
        className="bg-red-600 text-white rounded px-4 py-2 mt-4 hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
}
