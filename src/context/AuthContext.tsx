import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { isSupabaseConfigured, supabase } from '../lib/supabase'

type AuthContextValue = {
  user: User | null
  session: Session | null
  loading: boolean
  isAdmin: boolean
  signInWithPassword: (email: string, password: string) => Promise<string | null>
  signInWithMagicLink: (email: string) => Promise<string | null>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

async function fetchIsAdmin(userId: string): Promise<boolean> {
  if (!supabase) return false

  const { data, error } = await supabase
    .from('site_profiles')
    .select('role')
    .eq('id', userId)
    .eq('role', 'admin')
    .maybeSingle()

  if (error) return false
  return Boolean(data)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(isSupabaseConfigured)
  const [isAdmin, setIsAdmin] = useState(false)

  const refreshAdmin = useCallback(async (nextUser: User | null) => {
    if (!nextUser) {
      setIsAdmin(false)
      return
    }
    setIsAdmin(await fetchIsAdmin(nextUser.id))
  }, [])

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    let mounted = true

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return
      setSession(data.session)
      setUser(data.session?.user ?? null)
      void refreshAdmin(data.session?.user ?? null)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
      setUser(nextSession?.user ?? null)
      void refreshAdmin(nextSession?.user ?? null)
      setLoading(false)
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [refreshAdmin])

  const signInWithPassword = useCallback(async (email: string, password: string) => {
    if (!supabase) return 'Authentication is not configured.'

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return error?.message ?? null
  }, [])

  const signInWithMagicLink = useCallback(async (email: string) => {
    if (!supabase) return 'Authentication is not configured.'

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}${import.meta.env.BASE_URL}auth` },
    })
    return error?.message ?? null
  }, [])

  const signOut = useCallback(async () => {
    if (!supabase) return
    await supabase.auth.signOut()
  }, [])

  const value = useMemo(
    () => ({
      user,
      session,
      loading,
      isAdmin,
      signInWithPassword,
      signInWithMagicLink,
      signOut,
    }),
    [user, session, loading, isAdmin, signInWithPassword, signInWithMagicLink, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
