import { useState, type FormEvent } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { Button } from '../components/Button'
import { ScrollReveal } from '../components/ScrollReveal'
import { ThemeBlock } from '../components/ThemeBlock'
import { useAuth } from '../context/AuthContext'
import { isSupabaseConfigured } from '../lib/supabase'
import '../styles/forms.css'

type AuthMode = 'password' | 'magic'

export function AuthPage() {
  const { user, loading, signInWithPassword, signInWithMagicLink } = useAuth()
  const location = useLocation()
  const redirectTo =
    (location.state as { from?: string } | null)?.from ?? '/dashboard'

  const [mode, setMode] = useState<AuthMode>('password')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  if (!loading && user) {
    return <Navigate to={redirectTo} replace />
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const error =
      mode === 'password'
        ? await signInWithPassword(email.trim(), password)
        : await signInWithMagicLink(email.trim())

    if (error) {
      setStatus('error')
      setErrorMessage(error)
      return
    }

    if (mode === 'magic') {
      setStatus('sent')
      return
    }

    setStatus('idle')
  }

  return (
    <main className="section auth-page">
      <ThemeBlock className="container auth-shell">
        <ScrollReveal variant="rise" immediate>
          <p className="auth-shell__eyebrow">Sign in</p>
          <h1 className="auth-shell__title">Account access</h1>
          <p className="auth-shell__copy">
            For dashboard and client areas. Public contact forms do not require an account.
          </p>

          {!isSupabaseConfigured && (
            <p className="form-panel__error" role="alert">
              Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.
            </p>
          )}

          <div className="auth-shell__modes">
            <button
              type="button"
              className={`auth-shell__mode${mode === 'password' ? ' is-active' : ''}`}
              onClick={() => setMode('password')}
            >
              Password
            </button>
            <button
              type="button"
              className={`auth-shell__mode${mode === 'magic' ? ' is-active' : ''}`}
              onClick={() => setMode('magic')}
            >
              Magic link
            </button>
          </div>

          {status === 'sent' ? (
            <div className="form-panel form-panel--success">
              <p className="form-panel__success-title">Check your email</p>
              <p className="form-panel__success-copy">
                A sign-in link was sent to {email}.
              </p>
            </div>
          ) : (
            <form className="form-panel auth-shell__form" onSubmit={handleSubmit}>
              <label className="form-field">
                <span className="form-field__label">Email</span>
                <input
                  className="form-field__input"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>

              {mode === 'password' && (
                <label className="form-field">
                  <span className="form-field__label">Password</span>
                  <input
                    className="form-field__input"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </label>
              )}

              {status === 'error' && (
                <p className="form-panel__error" role="alert">
                  {errorMessage}
                </p>
              )}

              <div className="form-panel__actions">
                <Button type="submit" variant="primary" disabled={status === 'submitting'}>
                  {status === 'submitting'
                    ? 'Signing in…'
                    : mode === 'magic'
                      ? 'Send magic link'
                      : 'Sign in'}
                </Button>
              </div>
            </form>
          )}

          <p className="auth-shell__back">
            <Link to="/">← Back to site</Link>
          </p>
        </ScrollReveal>
      </ThemeBlock>
    </main>
  )
}
