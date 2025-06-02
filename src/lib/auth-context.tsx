'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { User as SupabaseUser, Session } from '@supabase/auth-helpers-nextjs'
import { AuthError } from '@supabase/supabase-js'
import { createSupabaseClient } from './supabase'
import { User as PrismaUser } from '@/generated/prisma'

interface AuthContextType {
  user: SupabaseUser | null
  session: Session | null
  prismaUser: PrismaUser | null
  hasCompletedOnboarding: boolean | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error?: AuthError | null }>
  signUp: (email: string, password: string) => Promise<{ error?: AuthError | null }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error?: AuthError | null }>
  fetchPrismaUser: (userId: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [prismaUser, setPrismaUser] = useState<PrismaUser | null>(null)
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)
  
  const supabase = createSupabaseClient()

  const fetchAndSetPrismaUser = useCallback(async (supabaseUserId: string, userEmail?: string) => {
    if (!supabaseUserId) return;
    const emailForSync = userEmail || (user && user.id === supabaseUserId ? user.email : undefined);

    try {
      const response = await fetch('/api/auth/sync-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          id: supabaseUserId, 
          email: emailForSync
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error fetching/syncing Prisma user:', errorData.error);
        setPrismaUser(null);
        setHasCompletedOnboarding(null);
        return;
      }
      const data = await response.json();
      if (data.user) {
        setPrismaUser(data.user as PrismaUser);
        setHasCompletedOnboarding(data.user.hasCompletedOnboarding);
      } else {
        setPrismaUser(null);
        setHasCompletedOnboarding(null);
      }
    } catch (error) {
      console.error('Error in fetchAndSetPrismaUser:', error);
      setPrismaUser(null);
      setHasCompletedOnboarding(null);
    }
  }, [user]);

  useEffect(() => {
    const getInitialSessionAndUser = async () => {
      const { data: { session: initialSession } } = await supabase.auth.getSession();
      setSession(initialSession);
      setUser(initialSession?.user ?? null);
      if (initialSession?.user) {
        await fetchAndSetPrismaUser(initialSession.user.id, initialSession.user.email);
      }
      setLoading(false);
    };

    getInitialSessionAndUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        if (event === 'SIGNED_IN' && currentSession?.user) {
          await fetchAndSetPrismaUser(currentSession.user.id, currentSession.user.email);
        } else if (event === 'SIGNED_OUT') {
          setPrismaUser(null);
          setHasCompletedOnboarding(null);
        }
        if(loading) setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, [fetchAndSetPrismaUser, supabase.auth, loading]);

  const signIn = async (email: string, password: string) => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signUp = async (email: string, password: string) => {
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`, 
    });
    return { error };
  };

  const fetchPrismaUser = async (userId: string) => {
    const currentUserEmail = user && user.id === userId ? user.email : undefined;
    await fetchAndSetPrismaUser(userId, currentUserEmail);
  };

  const value = {
    user,
    session,
    prismaUser,
    hasCompletedOnboarding,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    fetchPrismaUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 