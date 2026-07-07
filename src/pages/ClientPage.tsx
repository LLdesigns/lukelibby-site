import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ScrollReveal } from '../components/ScrollReveal'
import { ThemeBlock } from '../components/ThemeBlock'
import { useAuth } from '../context/AuthContext'
import '../styles/forms.css'

export function ClientPage() {
  const { user, signOut } = useAuth()

  return (
    <main className="section client-page">
      <ThemeBlock className="container auth-shell">
        <ScrollReveal variant="rise" immediate>
          <p className="auth-shell__eyebrow">Client area</p>
          <h1 className="auth-shell__title">Welcome</h1>
          <p className="auth-shell__copy">
            Signed in as {user?.email}. Client project views and shared deliverables will live here.
          </p>

          <div className="client-page__panel">
            <p>This area is a shell for now — project-specific access can be added as engagements grow.</p>
          </div>

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
