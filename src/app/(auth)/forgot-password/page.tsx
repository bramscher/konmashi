'use client';

import { useState } from 'react';
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

const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

type ForgotPasswordFormValues = z.infer<typeof ForgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const supabase = createSupabaseClient();

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Password reset email sent. Please check your inbox.');
        form.reset();
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
      console.error('Forgot password error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="w-full max-w-md rounded-lg bg-slate-900/80 p-8 shadow-2xl backdrop-blur-sm">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100">Konmashi</h1>
          <p className="mt-2 text-lg text-slate-400">Forgot Your Password?</p>
          <p className="mt-1 text-sm text-slate-500">
            No worries! Enter your email below and we'll send you a link to reset it.
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-slate-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...form.register('email')}
              className="mt-1 bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:ring-sky-500"
            />
            {form.formState.errors.email && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-500 text-slate-50" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            Remember your password?{' '}
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