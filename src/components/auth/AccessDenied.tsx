import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { ThemeBlock } from '../ThemeBlock'
import { useAuth } from '../../context/AuthContext'

export function AccessDenied() {
  const { user, signOut } = useAuth()

  return (
    <main className="section auth-page">
      <ThemeBlock className="container auth-shell">
        <p className="auth-shell__eyebrow">Access denied</p>
        <h1 className="auth-shell__title">Admin only</h1>
        <p className="auth-shell__copy">
          {user?.email
            ? `Signed in as ${user.email}, but this account does not have dashboard access.`
            : 'This area is for site admin only.'}
        </p>
        <div className="form-panel__actions">
          <Button type="button" variant="secondary" onClick={() => void signOut()}>
            Sign out
          </Button>
          <Link className="btn btn--primary" to="/">
            Back to site
          </Link>
        </div>
      </ThemeBlock>
    </main>
  )
}
