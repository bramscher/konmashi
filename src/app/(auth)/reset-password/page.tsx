'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { createSupabaseClient } from '@/lib/supabase';
import Link from 'next/link';
import { Session } from '@supabase/supabase-js';

const resetPasswordSchema = z.object({
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'], // path of error
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createSupabaseClient();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        setSession(session);
      } 
      // Handle initial state if user is already on this page with a valid recovery token in URL
      // Supabase client might automatically pick it up and set a session.
      // Alternatively, if the user navigates here after clicking the link, this event will fire.
      if (session && session.user && !session.user.aud) { // Check if it's a recovery session
         // `aud` is typically 'authenticated' for normal sessions. Recovery sessions might differ or lack it.
         // A more robust check might be needed depending on Supabase specifics for recovery sessions.
        setSession(session);
      }
    });

    // Check if there's a recovery token in the URL fragment on initial load
    // Supabase JS v2 automatically handles this and fires PASSWORD_RECOVERY if token is present
    // For robustness, ensure page has access to session if recovery token was processed
    async function checkSession() {
        const { data } = await supabase.auth.getSession();
        if (data.session && data.session.user && data.session.user.recovery_sent_at) {
            // This is a way to infer it could be a recovery session if PASSWORD_RECOVERY hasn't fired yet
            setSession(data.session);
        }
    }
    checkSession();

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, [supabase]);

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    if (!session) {
      toast.error('Session not found or invalid', {
        description: 'Please request a new password reset link if the current one has expired or is invalid.',
      });
      setError('No valid session for password reset. The link may have expired or been used. Please try requesting a password reset again.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { error: updateError } = await supabase.auth.updateUser({
        password: data.password,
      });

      if (updateError) {
        toast.error('Error resetting password', { description: updateError.message });
        setError(updateError.message);
      } else {
        toast.success('Password Reset Successful', {
          description: 'Your password has been updated. You can now login with your new password.',
        });
        router.push('/login');
      }
    } catch (err) {
      console.error('Reset password error:', err);
      const message = err instanceof Error ? err.message : 'An unexpected error occurred.';
      toast.error('An unexpected error occurred', { description: message });
      setError(message);
    }
    setLoading(false);
  };
  
  // If Supabase hasn't yet processed the token from the URL, it might take a moment.
  // Can add a loading state or message here if session is null initially.
  // However, for a typical flow, the PASSWORD_RECOVERY event should fire quickly.

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Reset Your Password</CardTitle>
          <CardDescription className="text-center">
            Enter your new password below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && <p className="text-sm text-red-500 text-center mb-4">Error: {error}</p>}
          {!session && !error && <p className="text-sm text-yellow-600 text-center mb-4">Loading session or waiting for password recovery token...</p>}
          {session && (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="********" 
                  {...form.register('password')} 
                  disabled={loading}
                />
                {form.formState.errors.password && (
                  <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  placeholder="********" 
                  {...form.register('confirmPassword')} 
                  disabled={loading}
                />
                {form.formState.errors.confirmPassword && (
                  <p className="text-sm text-red-500">{form.formState.errors.confirmPassword.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={loading || !session}>
                {loading ? 'Resetting Password...' : 'Reset Password'}
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <Link href="/login" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
            Back to Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
} 