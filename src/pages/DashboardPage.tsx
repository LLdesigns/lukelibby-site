import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'
import { ThemeBlock } from '../components/ThemeBlock'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import '../styles/forms.css'

type ContactRow = {
  id: string
  created_at: string
  email: string
  name: string
  subject: string | null
  message: string
  source: string
}

type DiscoveryRow = {
  id: string
  created_at: string
  email: string
  name: string | null
  answers: Record<string, string>
}

export function DashboardPage() {
  const { user, signOut } = useAuth()
  const [contacts, setContacts] = useState<ContactRow[]>([])
  const [discoveries, setDiscoveries] = useState<DiscoveryRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      if (!supabase) {
        setError('Supabase is not configured.')
        setLoading(false)
        return
      }

      const [contactResult, discoveryResult] = await Promise.all([
        supabase
          .from('contact_submissions')
          .select('id, created_at, email, name, subject, message, source')
          .order('created_at', { ascending: false })
          .limit(30),
        supabase
          .from('discovery_submissions')
          .select('id, created_at, email, name, answers')
          .order('created_at', { ascending: false })
          .limit(30),
      ])

      if (contactResult.error || discoveryResult.error) {
        setError(contactResult.error?.message ?? discoveryResult.error?.message ?? 'Failed to load.')
        setLoading(false)
        return
      }

      setContacts(contactResult.data ?? [])
      setDiscoveries(discoveryResult.data ?? [])
      setLoading(false)
    }

    void load()
  }, [])

  return (
    <main className="section dashboard-page">
      <ThemeBlock className="container">
        <ScrollReveal variant="rise" immediate>
          <div className="dashboard-page__header">
            <div>
              <p className="dashboard-page__eyebrow">Admin</p>
              <h1 className="dashboard-page__title">Dashboard</h1>
              <p className="dashboard-page__sub">Signed in as {user?.email}</p>
            </div>
            <div className="dashboard-page__header-actions">
              <Button type="button" variant="secondary" onClick={() => void signOut()}>
                Sign out
              </Button>
              <Link className="btn btn--paper" to="/">
                Site
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {loading && <p className="dashboard-page__status">Loading submissions…</p>}
        {error && (
          <p className="form-panel__error" role="alert">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            <section className="dashboard-section" aria-labelledby="contacts-heading">
              <SectionHeading title="Contact messages" headingId="contacts-heading" />
              {contacts.length === 0 ? (
                <p className="dashboard-page__empty">No contact messages yet.</p>
              ) : (
                <ul className="dashboard-list">
                  {contacts.map((item) => (
                    <li key={item.id} className="dashboard-card">
                      <p className="dashboard-card__meta">
                        {new Date(item.created_at).toLocaleString()} · {item.source}
                      </p>
                      <p className="dashboard-card__title">
                        {item.name} · {item.email}
                      </p>
                      {item.subject && <p className="dashboard-card__subject">{item.subject}</p>}
                      <p className="dashboard-card__body">{item.message}</p>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section className="dashboard-section" aria-labelledby="discovery-heading">
              <SectionHeading title="Project briefs" headingId="discovery-heading" />
              {discoveries.length === 0 ? (
                <p className="dashboard-page__empty">No discovery briefs yet.</p>
              ) : (
                <ul className="dashboard-list">
                  {discoveries.map((item) => (
                    <li key={item.id} className="dashboard-card">
                      <p className="dashboard-card__meta">
                        {new Date(item.created_at).toLocaleString()}
                      </p>
                      <p className="dashboard-card__title">
                        {item.name ? `${item.name} · ` : ''}
                        {item.email}
                      </p>
                      <dl className="dashboard-card__answers">
                        {Object.entries(item.answers).map(([key, value]) => (
                          <div key={key}>
                            <dt>{key}</dt>
                            <dd>{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )}
      </ThemeBlock>
    </main>
  )
}
