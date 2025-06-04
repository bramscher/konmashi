"use client";

import { useAuth } from '@/lib/auth-context';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import InviteMemberForm from '@/components/team/InviteMemberForm';

function TeamMemberList() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null); // memberId for which action is loading
  const { user } = useAuth();

  const fetchMembers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/team/members');
      const data = await res.json();
      if (res.ok) {
        setMembers(data.members);
      } else {
        setError(data.error || 'Failed to load team members.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleRoleChange = async (memberId: string, newRole: string) => {
    setActionLoading(memberId + '-role');
    try {
      const res = await fetch('/api/team/members', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberId, newRole }),
      });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || 'Failed to change role.');
      } else {
        await fetchMembers();
      }
    } finally {
      setActionLoading(null);
    }
  };

  const handleRemove = async (memberId: string) => {
    if (!window.confirm('Remove this member from the team?')) return;
    setActionLoading(memberId + '-remove');
    try {
      const res = await fetch('/api/team/members', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberId }),
      });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || 'Failed to remove member.');
      } else {
        await fetchMembers();
      }
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) return <div>Loading team members...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!members.length) return <div>No team members found.</div>;

  return (
    <table className="min-w-full text-sm mt-2">
      <thead>
        <tr className="text-left border-b">
          <th className="py-2 pr-4">Email</th>
          <th className="py-2 pr-4">Role</th>
          <th className="py-2">Joined</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {members.map((m) => (
          <tr key={m.id} className="border-b last:border-0">
            <td className="py-2 pr-4">{m.email}</td>
            <td className="py-2 pr-4">
              {user?.id === m.userId ? (
                <span>{m.role}</span>
              ) : (
                <select
                  value={m.role}
                  onChange={e => handleRoleChange(m.id, e.target.value)}
                  disabled={actionLoading === m.id + '-role'}
                  className="border rounded px-2 py-1"
                >
                  <option value="MEMBER">MEMBER</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
              )}
            </td>
            <td className="py-2">{new Date(m.joinedAt).toLocaleDateString()}</td>
            <td className="py-2">
              {user?.id !== m.userId && (
                <button
                  onClick={() => handleRemove(m.id)}
                  disabled={actionLoading === m.id + '-remove'}
                  className="bg-red-600 text-white rounded px-3 py-1 hover:bg-red-700"
                >
                  {actionLoading === m.id + '-remove' ? 'Removing...' : 'Remove'}
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function TeamAdminPage() {
  const { user, prismaUser, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!loading && prismaUser) {
      // Check if user is ADMIN for current team
      // This assumes prismaUser.teamMemberships is an array of memberships with role and teamId
      const memberships = (prismaUser as any).teamMemberships;
      const adminMembership = Array.isArray(memberships) ? memberships.find((m: any) => m.role === 'ADMIN') : undefined;
      setIsAdmin(!!adminMembership);
    }
  }, [prismaUser, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <div className="p-8 text-center text-red-600">You do not have admin access to this team.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Team Admin: Manage Team Members</h1>
      <InviteMemberForm onInvite={() => setRefreshKey(k => k + 1)} />
      <div className="bg-white dark:bg-gray-900 rounded shadow p-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">Current Team Members</h2>
        {/* TeamMemberList will re-mount on refreshKey change to reload data */}
        <div key={refreshKey}>
          <TeamMemberList />
        </div>
      </div>
    </div>
  );
} 