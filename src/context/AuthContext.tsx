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

function authRedirectUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = path.replace(/^\//, '')
  return `${window.location.origin}${normalizedBase}${normalizedPath}`
}

type AuthContextValue = {
  user: User | null
  session: Session | null
  loading: boolean
  isAdmin: boolean
  isPasswordRecovery: boolean
  signInWithPassword: (email: string, password: string) => Promise<string | null>
  signInWithMagicLink: (email: string) => Promise<string | null>
  requestPasswordReset: (email: string) => Promise<string | null>
  updatePassword: (password: string) => Promise<string | null>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

async function fetchIsAdmin(userId: string): Promise<boolean> {
  if (!supabase) return false

  const { data, error } = await supabase
    .from('site_profiles')
    .select('role')
    .eq('id', userId)
    .maybeSingle()

  if (error) return false
  return data?.role === 'admin'
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(isSupabaseConfigured)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(false)

  const syncSession = useCallback(async (nextSession: Session | null) => {
    const nextUser = nextSession?.user ?? null
    setSession(nextSession)
    setUser(nextUser)

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

    supabase.auth.getSession().then(async ({ data }) => {
      if (!mounted) return
      if (window.location.hash.includes('type=recovery')) {
        setIsPasswordRecovery(true)
      }
      await syncSession(data.session)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, nextSession) => {
      if (event === 'PASSWORD_RECOVERY') {
        setIsPasswordRecovery(true)
      }
      if (event === 'SIGNED_OUT') {
        setIsPasswordRecovery(false)
      }

      void (async () => {
        setLoading(true)
        await syncSession(nextSession)
        if (mounted) setLoading(false)
      })()
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [syncSession])

  const signInWithPassword = useCallback(async (email: string, password: string) => {
    if (!supabase) return 'Authentication is not configured.'

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return error?.message ?? null
  }, [])

  const signInWithMagicLink = useCallback(async (email: string) => {
    if (!supabase) return 'Authentication is not configured.'

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: authRedirectUrl('auth') },
    })
    return error?.message ?? null
  }, [])

  const requestPasswordReset = useCallback(async (email: string) => {
    if (!supabase) return 'Authentication is not configured.'

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: authRedirectUrl('auth/reset-password'),
    })
    return error?.message ?? null
  }, [])

  const updatePassword = useCallback(async (password: string) => {
    if (!supabase) return 'Authentication is not configured.'

    const { error } = await supabase.auth.updateUser({ password })
    if (!error) {
      setIsPasswordRecovery(false)
    }
    return error?.message ?? null
  }, [])

  const signOut = useCallback(async () => {
    if (!supabase) return
    setIsPasswordRecovery(false)
    await supabase.auth.signOut()
  }, [])

  const value = useMemo(
    () => ({
      user,
      session,
      loading,
      isAdmin,
      isPasswordRecovery,
      signInWithPassword,
      signInWithMagicLink,
      requestPasswordReset,
      updatePassword,
      signOut,
    }),
    [
      user,
      session,
      loading,
      isAdmin,
      isPasswordRecovery,
      signInWithPassword,
      signInWithMagicLink,
      requestPasswordReset,
      updatePassword,
      signOut,
    ],
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
