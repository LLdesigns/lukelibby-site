import { useState, type FormEvent } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { DocumentHead } from '../components/DocumentHead'
import { Button } from '../components/Button'
import { ScrollReveal } from '../components/ScrollReveal'
import { ThemeBlock } from '../components/ThemeBlock'
import { useAuth } from '../context/AuthContext'
import '../styles/forms.css'

const privateResetHead = (
  <DocumentHead
    title="Reset Password"
    description="Reset password for Luke Libby portfolio admin access."
    noindex
  />
)

export function ResetPasswordPage() {
  const { user, loading, isAdmin, isPasswordRecovery, updatePassword } = useAuth()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const canReset = Boolean(user && isPasswordRecovery)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')

    if (password.length < 8) {
      setStatus('error')
      setErrorMessage('Password must be at least 8 characters.')
      return
    }

    if (password !== confirm) {
      setStatus('error')
      setErrorMessage('Passwords do not match.')
      return
    }

    setStatus('saving')
    const error = await updatePassword(password)
    if (error) {
      setStatus('error')
      setErrorMessage(error)
      return
    }

    setStatus('done')
  }

  if (loading) {
    return (
      <main className="section auth-page">
        {privateResetHead}
        <ThemeBlock className="container auth-shell">
          <p className="auth-shell__status">Loading…</p>
        </ThemeBlock>
      </main>
    )
  }

  if (status === 'done' && isAdmin) {
    return <Navigate to="/dashboard" replace />
  }

  if (status === 'done') {
    return (
      <main className="section auth-page">
        {privateResetHead}
        <ThemeBlock className="container auth-shell">
          <ScrollReveal variant="rise" immediate>
            <div className="form-panel form-panel--success">
              <p className="form-panel__success-title">Password updated</p>
              <p className="form-panel__success-copy">You can sign in with your new password.</p>
              <Link className="btn btn--primary" to="/auth">
                Sign in
              </Link>
            </div>
          </ScrollReveal>
        </ThemeBlock>
      </main>
    )
  }

  if (!canReset) {
    return (
      <main className="section auth-page">
        {privateResetHead}
        <ThemeBlock className="container auth-shell">
          <ScrollReveal variant="rise" immediate>
            <p className="auth-shell__eyebrow">Reset password</p>
            <h1 className="auth-shell__title">Link expired or invalid</h1>
            <p className="auth-shell__copy">
              Request a new reset link from the sign-in page.
            </p>
            <Link className="btn btn--primary" to="/auth">
              Back to sign in
            </Link>
          </ScrollReveal>
        </ThemeBlock>
      </main>
    )
  }

  return (
    <main className="section auth-page">
      {privateResetHead}
      <ThemeBlock className="container auth-shell">
        <ScrollReveal variant="rise" immediate>
          <p className="auth-shell__eyebrow">Reset password</p>
          <h1 className="auth-shell__title">Choose a new password</h1>

          <form className="form-panel auth-shell__form" onSubmit={handleSubmit}>
            <label className="form-field">
              <span className="form-field__label">New password</span>
              <input
                className="form-field__input"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>

            <label className="form-field">
              <span className="form-field__label">Confirm password</span>
              <input
                className="form-field__input"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                value={confirm}
                onChange={(event) => setConfirm(event.target.value)}
              />
            </label>

            {status === 'error' && (
              <p className="form-panel__error" role="alert">
                {errorMessage}
              </p>
            )}

            <div className="form-panel__actions">
              <Button type="submit" variant="primary" disabled={status === 'saving'}>
                {status === 'saving' ? 'Saving…' : 'Update password'}
              </Button>
            </div>
          </form>
        </ScrollReveal>
      </ThemeBlock>
    </main>
  )
}
