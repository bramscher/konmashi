'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Link from 'next/link';
import { createSupabaseClient } from '@/lib/supabase';

const ResetPasswordSchema = z.object({
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type ResetPasswordFormValues = z.infer<typeof ResetPasswordSchema>;

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = createSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Supabase handles the recovery token from the URL fragment automatically
  // when the component mounts and a session is established.
  // We just need to ensure the user is authenticated to be on this page.
  useEffect(() => {
    const checkSession = async () => {
      const { data, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !data.session) {
        toast.error('Invalid or expired password reset link.');
        router.push('/login');
      }
       // Check if the user is on a recovery path
      if (data.session && data.session.user.user_metadata?.recovery !== true && window.location.hash.includes('type=recovery')) {
        // This handles the case where the user has landed from an email link
        // and Supabase client needs to process the recovery token from the hash.
        // Typically, Supabase handles this, but an explicit check can be useful.
        // If already handled, it won't re-trigger.
      } else if (data.session && data.session.user.user_metadata?.recovery !== true && !window.location.hash.includes('type=recovery')){
        // if there is a session, but it's not a recovery session, and there's no recovery token in hash, redirect.
        // router.push('/login'); 
        // Commenting out for now to allow normal logged in users to also change password if they land here, 
        // though ideally they would use a different flow (e.g. from account settings).
      }

    };
    checkSession();
  }, [supabase, router]);

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    setLoading(true);
    setError(null);
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password: data.password });

      if (updateError) {
        setError(updateError.message);
        toast.error(updateError.message);
      } else {
        toast.success('Password updated successfully! You can now log in with your new password.');
        // Attempt to sign out to clear any recovery-specific session state
        await supabase.auth.signOut(); 
        router.push('/login');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setError(errorMessage);
      toast.error(errorMessage);
      console.error('Reset password error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="w-full max-w-md rounded-lg bg-slate-900/80 p-8 shadow-2xl backdrop-blur-sm">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100">Konmashi</h1>
          <p className="mt-2 text-lg text-slate-400">Reset Your Password</p>
          <p className="mt-1 text-sm text-slate-500">
            Enter your new password below.
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="password" className="text-slate-300">
              New Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...form.register('password')}
              className="mt-1 bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:ring-sky-500"
            />
            {form.formState.errors.password && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.password.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="text-slate-300">
              Confirm New Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              {...form.register('confirmPassword')}
              className="mt-1 bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:ring-sky-500"
            />
            {form.formState.errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.confirmPassword.message}</p>
            )}
          </div>

          {error && (
            <p className="mt-1 text-xs text-red-500 text-center">{error}</p>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Resetting Password...' : 'Reset Password'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            Remembered your password or landed here by mistake?{' '}
            <Link href="/login" className="font-medium text-sky-500 hover:text-sky-400">
              Sign In
            </Link>
          </p>
        </div>
      </div>
       <footer className="absolute bottom-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Konmashi. All rights reserved.
      </footer>
    </div>
  );
} 