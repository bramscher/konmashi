import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

// TODO: Replace 'any' with proper Brand and BrandIdentity types
export default function BrandIdentityForm({ brand, initial, onSave }: {
  brand: any;
  initial?: any;
  onSave?: (identity: any) => void;
}) {
  const [form, setForm] = useState({
    brandName: initial?.brandName || brand.name || '',
    industry: initial?.industry || '',
    voiceDescriptors: initial?.voiceDescriptors?.join(', ') || '',
    targetAudience: initial?.targetAudience || '',
    brandManifesto: initial?.brandManifesto || '',
  });

  // Ensure form state updates when initial or brand changes
  useEffect(() => {
    setForm({
      brandName: initial?.brandName || brand.name || '',
      industry: initial?.industry || '',
      voiceDescriptors: initial?.voiceDescriptors?.join(', ') || '',
      targetAudience: initial?.targetAudience || '',
      brandManifesto: initial?.brandManifesto || '',
    });
  }, [initial, brand]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const maxManifestoLength = 4000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch('/api/brand-identity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          brandId: brand.id,
          voiceDescriptors: form.voiceDescriptors.split(',').map((s: string) => s.trim()).filter(Boolean),
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Brand Identity saved!');
        if (onSave) onSave(data.brandIdentity);
      } else {
        setError(data.error || 'Failed to save brand identity.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
      <label className="font-semibold">Brand Name
        <input
          type="text"
          name="brandName"
          value={form.brandName}
          onChange={handleChange}
          className="border rounded px-3 py-2 mt-1 w-full"
          required
        />
      </label>
      <label className="font-semibold">Industry
        <input
          type="text"
          name="industry"
          value={form.industry}
          onChange={handleChange}
          className="border rounded px-3 py-2 mt-1 w-full"
          required
        />
      </label>
      <label className="font-semibold">Voice Descriptors (comma separated)
        <input
          type="text"
          name="voiceDescriptors"
          value={form.voiceDescriptors}
          onChange={handleChange}
          className="border rounded px-3 py-2 mt-1 w-full"
          required
        />
      </label>
      <label className="font-semibold">Target Audience
        <input
          type="text"
          name="targetAudience"
          value={form.targetAudience}
          onChange={handleChange}
          className="border rounded px-3 py-2 mt-1 w-full"
          required
        />
      </label>
      <label className="font-semibold">Brand Manifesto (optional)
        <textarea
          name="brandManifesto"
          value={form.brandManifesto}
          onChange={handleChange}
          className="border rounded px-3 py-2 mt-1 w-full"
          rows={10}
          maxLength={maxManifestoLength}
        />
        <div className="text-xs text-muted-foreground flex justify-between">
          <span>Up to 4000 characters (~600 words)</span>
          <span>{form.brandManifesto.length}/{maxManifestoLength}</span>
        </div>
      </label>
      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Save Brand Identity'}
      </Button>
      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}
    </form>
  );
} 