import { useState } from 'react';

// TODO: Replace 'any' with a proper Brand type
export default function BrandCreateForm({ onCreate }: { onCreate?: (brand: any) => void }) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch('/api/brand/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Brand created!');
        setName('');
        if (onCreate) onCreate(data.brand);
      } else {
        setError(data.error || 'Failed to create brand.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
      <label className="font-semibold">Brand Name
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border rounded px-3 py-2 mt-1 w-full"
          required
        />
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        disabled={loading || !name.trim()}
      >
        {loading ? 'Creating...' : 'Create Brand'}
      </button>
      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}
    </form>
  );
} 