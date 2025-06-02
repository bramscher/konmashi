'use client'

import { AuthProvider } from '@/lib/auth-context';
import { Toaster } from 'sonner';
import Footer from '@/components/footer';

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster />
    </AuthProvider>
  );
} 