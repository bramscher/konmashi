"use client";
import { useEffect, useState } from 'react';
import BrandCreateForm from '@/components/brand/BrandCreateForm';
import BrandIdentityForm from '@/components/brand/BrandIdentityForm';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Pencil, PlusCircle, X, Trash2 } from 'lucide-react';

// TODO: Replace 'any' with a proper Brand type
export default function ManageBrandsPage() {
  const [brands, setBrands] = useState<any[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteModal, setDeleteModal] = useState<{ brand: any; open: boolean }>({ brand: null, open: false });
  const [deleteInput, setDeleteInput] = useState('');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const fetchBrands = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/brand/list');
      const data = await res.json();
      if (res.ok) {
        setBrands(data.brands);
      } else {
        setError(data.error || 'Failed to load brands.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleDelete = async () => {
    if (!deleteModal.brand) return;
    setDeleteLoading(true);
    setDeleteError(null);
    try {
      const res = await fetch('/api/brand/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brandId: deleteModal.brand.id }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setDeleteModal({ brand: null, open: false });
        setDeleteInput('');
        fetchBrands();
      } else {
        setDeleteError(data.error || 'Failed to delete brand.');
      }
    } catch (err) {
      setDeleteError('An unexpected error occurred.');
    }
    setDeleteLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-2xl mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Manage Brands</CardTitle>
          </CardHeader>
          <CardContent>
            <BrandCreateForm onCreate={fetchBrands} />
          </CardContent>
        </Card>
      </div>
      {loading ? (
        <div>Loading brands…</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : brands.length === 0 ? (
        <div>No brands found.</div>
      ) : (
        <div className="w-full max-w-2xl flex flex-col gap-6">
          {brands.map((brand: any) => {
            // Determine if the identity is populated (not just brandName)
            const identity = brand.identity;
            const hasIdentity = identity && (
              identity.industry || identity.voiceDescriptors?.length > 0 || identity.targetAudience || identity.brandManifesto
            );
            return (
              <Card key={brand.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{brand.name}</span>
                    <div className="flex items-center gap-2">
                      <button
                        className="flex items-center gap-1 text-blue-600 underline text-sm"
                        onClick={() => setEditing(editing === brand.id ? null : brand.id)}
                      >
                        {editing === brand.id ? (
                          <><X className="w-4 h-4 mr-1" /> Cancel</>
                        ) : hasIdentity ? (
                          <><Pencil className="w-4 h-4 mr-1" /> Edit Identity</>
                        ) : (
                          <><PlusCircle className="w-4 h-4 mr-1" /> Set Up Identity</>
                        )}
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        title="Delete Brand"
                        onClick={() => setDeleteModal({ brand, open: true })}
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {editing === brand.id && (
                    <BrandIdentityForm
                      brand={brand}
                      initial={brand.identity}
                      onSave={() => {
                        setEditing(null);
                        fetchBrands();
                      }}
                    />
                  )}
                  {brand.identity && editing !== brand.id && (
                    <div className="text-sm text-muted-foreground">
                      <div><b>Industry:</b> {brand.identity.industry}</div>
                      <div><b>Voice:</b> {(brand.identity.voiceDescriptors || []).join(', ')}</div>
                      <div><b>Audience:</b> {brand.identity.targetAudience}</div>
                      {brand.identity.brandManifesto && <div><b>Manifesto:</b> {brand.identity.brandManifesto}</div>}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
      {/* Delete Brand Modal */}
      {deleteModal.open && deleteModal.brand && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
          <div className="bg-white dark:bg-gray-900 rounded shadow-lg p-8 max-w-sm w-full text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => { setDeleteModal({ brand: null, open: false }); setDeleteInput(''); setDeleteError(null); }}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <Trash2 className="w-10 h-10 mx-auto text-red-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Delete Brand</h2>
            <p className="mb-4 text-red-600 font-medium">This action is <b>unrecoverable</b>.<br />
              To confirm, type: <span className="bg-gray-200 px-2 py-1 rounded font-mono">Delete "{deleteModal.brand.name}" Brand</span>
            </p>
            <input
              type="text"
              className="border rounded px-3 py-2 w-full mb-4"
              placeholder={`Delete "${deleteModal.brand.name}" Brand`}
              value={deleteInput}
              onChange={e => setDeleteInput(e.target.value)}
              disabled={deleteLoading}
            />
            {deleteError && <div className="text-red-600 mb-2">{deleteError}</div>}
            <button
              className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-700 disabled:opacity-50"
              disabled={deleteInput !== `Delete "${deleteModal.brand.name}" Brand` || deleteLoading}
              onClick={handleDelete}
            >
              {deleteLoading ? 'Deleting…' : 'Delete Brand'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 