import { useState, type FormEvent } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { Button } from '../components/Button'
import { ScrollReveal } from '../components/ScrollReveal'
import { ThemeBlock } from '../components/ThemeBlock'
import { useAuth } from '../context/AuthContext'
import { isSupabaseConfigured } from '../lib/supabase'
import '../styles/forms.css'

type AuthMode = 'password' | 'magic'
type AuthView = 'sign-in' | 'forgot-password'

export function AuthPage() {
  const {
    user,
    loading,
    isAdmin,
    isPasswordRecovery,
    signOut,
    signInWithPassword,
    signInWithMagicLink,
    requestPasswordReset,
  } = useAuth()
  const location = useLocation()
  const requestedFrom = (location.state as { from?: string } | null)?.from
  const redirectTo = isAdmin ? (requestedFrom ?? '/dashboard') : null

  const [mode, setMode] = useState<AuthMode>('password')
  const [view, setView] = useState<AuthView>('sign-in')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  if (!loading && isPasswordRecovery) {
    return <Navigate to="/auth/reset-password" replace />
  }

  if (!loading && user && redirectTo) {
    return <Navigate to={redirectTo} replace />
  }

  if (!loading && user && !isAdmin) {
    return (
      <main className="section auth-page">
        <ThemeBlock className="container auth-shell">
          <ScrollReveal variant="rise" immediate>
            <p className="auth-shell__eyebrow">Access denied</p>
            <h1 className="auth-shell__title">Admin only</h1>
            <p className="auth-shell__copy">
              Signed in as {user.email}, but this account does not have dashboard access.
            </p>
            <div className="form-panel__actions">
              <Button type="button" variant="secondary" onClick={() => void signOut()}>
                Sign out
              </Button>
              <Link className="btn btn--primary" to="/">
                Back to site
              </Link>
            </div>
          </ScrollReveal>
        </ThemeBlock>
      </main>
    )
  }

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
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

  async function handleForgotPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const error = await requestPasswordReset(email.trim())
    if (error) {
      setStatus('error')
      setErrorMessage(error)
      return
    }

    setStatus('sent')
  }

  const sentTitle =
    view === 'forgot-password' ? 'Check your email' : 'Check your email'
  const sentCopy =
    view === 'forgot-password'
      ? `If an account exists for ${email}, a password reset link is on its way.`
      : `A sign-in link was sent to ${email}.`

  return (
    <main className="section auth-page">
      <ThemeBlock className="container auth-shell">
        <ScrollReveal variant="rise" immediate>
          <p className="auth-shell__eyebrow">
            {view === 'forgot-password' ? 'Reset password' : 'Sign in'}
          </p>
          <h1 className="auth-shell__title">
            {view === 'forgot-password' ? 'Forgot password?' : 'Account access'}
          </h1>
          {view === 'sign-in' && (
            <p className="auth-shell__copy">
              Admin sign-in for your private dashboard.
            </p>
          )}

          {!isSupabaseConfigured && (
            <p className="form-panel__error" role="alert">
              Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.
            </p>
          )}

          {view === 'sign-in' && (
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
          )}

          {status === 'sent' ? (
            <div className="form-panel form-panel--success">
              <p className="form-panel__success-title">{sentTitle}</p>
              <p className="form-panel__success-copy">{sentCopy}</p>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setStatus('idle')
                  setView('sign-in')
                }}
              >
                Back to sign in
              </Button>
            </div>
          ) : view === 'forgot-password' ? (
            <form className="form-panel auth-shell__form" onSubmit={handleForgotPassword}>
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

              {status === 'error' && (
                <p className="form-panel__error" role="alert">
                  {errorMessage}
                </p>
              )}

              <div className="form-panel__actions">
                <Button type="submit" variant="primary" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Send reset link'}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setView('sign-in')
                    setStatus('idle')
                    setErrorMessage('')
                  }}
                >
                  Back to sign in
                </Button>
              </div>
            </form>
          ) : (
            <form className="form-panel auth-shell__form" onSubmit={handleSignIn}>
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
                <>
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
                  <p className="auth-shell__forgot">
                    <button
                      type="button"
                      className="auth-shell__forgot-btn"
                      onClick={() => {
                        setView('forgot-password')
                        setStatus('idle')
                        setErrorMessage('')
                      }}
                    >
                      Forgot password?
                    </button>
                  </p>
                </>
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
