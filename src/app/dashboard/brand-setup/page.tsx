'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { useState } from 'react';

// Zod schema for brand identity form validation
const brandIdentitySchema = z.object({
  brandName: z.string().min(1, { message: 'Brand name is required' }).max(100),
  industry: z.string().min(1, { message: 'Industry is required' }).max(100),
  voiceDescriptors: z.string().min(1, { message: 'Please provide at least one voice descriptor.' }),
  targetAudience: z.string().min(1, { message: 'Target audience description is required' }).max(500),
});

type BrandIdentityFormValues = z.infer<typeof brandIdentitySchema>;

export default function BrandSetupPage() {
  const router = useRouter();
  const { user, fetchPrismaUser } = useAuth(); 
  const [loading, setLoading] = useState(false);

  const form = useForm<BrandIdentityFormValues>({
    resolver: zodResolver(brandIdentitySchema),
    defaultValues: {
      brandName: '',
      industry: '',
      voiceDescriptors: '',
      targetAudience: '',
    },
  });

  const onSubmit = async (data: BrandIdentityFormValues) => {
    if (!user) {
      toast.error('You must be logged in.');
      return;
    }
    setLoading(true);
    try {
      // 1. Create Team and TeamMember first
      const teamRes = await fetch('/api/team/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.brandName,
          licenseCount: 1,
        }),
      });
      if (!teamRes.ok) {
        const errorData = await teamRes.json();
        throw new Error(errorData.error || 'Failed to create team');
      }
      // Refresh user context to ensure TeamMember is available
      if (user?.id) {
        await fetchPrismaUser(user.id);
      }

      // 2. Now save brand identity (teamId will be found in API)
      const response = await fetch('/api/brand-identity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          voiceDescriptors: data.voiceDescriptors.split(',').map(s => s.trim()).filter(s => s),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save brand identity');
      }

      toast.success('Brand Identity & Team Created!', {
        description: 'Your brand and team have been set up.',
      });

      router.push('/dashboard');
      window.location.reload();
    } catch (error) {
      console.error('Error creating team or saving brand identity:', error);
      const message = error instanceof Error ? error.message : 'An unexpected error occurred';
      toast.error('Error Creating Team or Saving Brand Identity', {
        description: message,
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Set Up Your Brand Identity</CardTitle>
          <CardDescription className="text-center">
            Tell us about your brand to help Konmashi generate the perfect content for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="brandName">Brand Name</Label>
              <Input id="brandName" {...form.register('brandName')} disabled={loading} />
              {form.formState.errors.brandName && (
                <p className="text-sm text-red-500 pt-1" role="alert">{form.formState.errors.brandName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="industry">Industry</Label>
              <Input id="industry" {...form.register('industry')} disabled={loading} />
              {form.formState.errors.industry && (
                <p className="text-sm text-red-500 pt-1" role="alert">{form.formState.errors.industry.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="voiceDescriptors">Voice Descriptors (comma-separated)</Label>
              <Input 
                id="voiceDescriptors" 
                placeholder="e.g., Playful, Professional, Witty"
                {...form.register('voiceDescriptors')} 
                disabled={loading}
              />
              {form.formState.errors.voiceDescriptors && (
                <p className="text-sm text-red-500 pt-1" role="alert">{form.formState.errors.voiceDescriptors.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="targetAudience">Target Audience Description</Label>
              <Textarea 
                id="targetAudience" 
                placeholder="Describe your ideal customer or audience."
                {...form.register('targetAudience')} 
                disabled={loading}
              />
              {form.formState.errors.targetAudience && (
                <p className="text-sm text-red-500 pt-1" role="alert">{form.formState.errors.targetAudience.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Saving...' : 'Save Brand Identity & Continue'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 