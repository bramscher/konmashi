import { useState, useEffect } from 'react';

export default function InviteMemberForm({ onInvite }: { onInvite?: () => void }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [licenseInfo, setLicenseInfo] = useState<{ licenseCount: number; memberCount: number } | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch license info from API
    async function fetchLicenseInfo() {
      try {
        const res = await fetch('/api/team/members');
        const data = await res.json();
        if (res.ok && data.members) {
          // Assume all members are for the current team, and add licenseCount to the response
          setLicenseInfo({
            licenseCount: data.licenseCount ?? data.members.length, // fallback if not present
            memberCount: data.members.length,
          });
        }
      } catch (e) {
        // ignore for now
      }
    }
    fetchLicenseInfo();
  }, [message]); // refetch after invite

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      const res = await fetch('/api/team/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Invitation sent!');
        setEmail('');
        if (onInvite) onInvite();
      } else {
        setError(data.error || 'Failed to send invitation.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
    setLoading(false);
  };

  const atLimit = Boolean(licenseInfo && licenseInfo.memberCount >= licenseInfo.licenseCount);

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        <label htmlFor="invite-email" className="font-medium">Invite by Email</label>
        <input
          id="invite-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="border rounded px-3 py-2"
          placeholder="user@example.com"
          disabled={loading || atLimit}
        />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2" disabled={loading || !email || atLimit}>
          {loading ? 'Sending...' : 'Send Invite'}
        </button>
        {atLimit && (
          <div className="text-red-600">All licenses are in use. Upgrade your plan to add more members.</div>
        )}
        {message && <div className="text-green-600">{message}</div>}
        {error && <div className="text-red-600">{error}</div>}
      </form>
      {atLimit && (
        <button
          type="button"
          className="mt-4 bg-primary text-white rounded px-4 py-2 hover:bg-primary/90"
          onClick={() => setShowModal(true)}
        >
          Upgrade Licenses
        </button>
      )}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
          <div className="bg-white dark:bg-gray-900 rounded shadow-lg p-8 max-w-sm w-full text-center relative">
            <h2 className="text-xl font-bold mb-4">Upgrade Licenses</h2>
            <p className="mb-6">Coming soon: Stripe integration for license upgrades.</p>
            <button
              className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
} 