import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  createClientProject,
  deleteClientProject,
  fetchPortalData,
  updateClientProject,
  type ClientProject,
  type PortalData,
} from '../api/portal'
import { ContactSubmissionCard } from '../components/portal/ContactSubmissionCard'
import { DiscoverySubmissionCard } from '../components/portal/DiscoverySubmissionCard'
import { PortalShell } from '../components/portal/PortalShell'
import { ProjectCard } from '../components/portal/ProjectCard'
import { ProjectForm } from '../components/portal/ProjectForm'
import { StatCard } from '../components/portal/StatCard'
import '../styles/portal.css'

type DashboardTab = 'overview' | 'messages' | 'briefs' | 'projects'

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'messages', label: 'Messages' },
  { id: 'briefs', label: 'Briefs' },
  { id: 'projects', label: 'Projects' },
] as const

function clientLabel(clientId: string): string {
  return `Client ${clientId.slice(0, 8)}…`
}

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview')
  const [data, setData] = useState<PortalData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [editingProject, setEditingProject] = useState<ClientProject | null>(null)
  const [showCreateProject, setShowCreateProject] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    const result = await fetchPortalData()
    if (!result.ok) {
      setError(result.error)
      setLoading(false)
      return
    }
    setData(result.data)
    setLoading(false)
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const recentContacts = useMemo(() => data?.contacts.slice(0, 3) ?? [], [data])
  const recentBriefs = useMemo(() => data?.discoveries.slice(0, 3) ?? [], [data])

  async function handleCreateProject(values: {
    clientId: string
    title: string
    status: ClientProject['status']
    summary: string
    nextStep: string
  }) {
    const result = await createClientProject({
      clientId: values.clientId,
      title: values.title,
      status: values.status,
      summary: values.summary,
      nextStep: values.nextStep,
    })
    if (!result.ok) return result.error
    setShowCreateProject(false)
    await load()
    return null
  }

  async function handleUpdateProject(values: {
    clientId: string
    title: string
    status: ClientProject['status']
    summary: string
    nextStep: string
  }) {
    if (!editingProject) return 'No project selected.'
    const result = await updateClientProject(editingProject.id, {
      title: values.title,
      status: values.status,
      summary: values.summary || null,
      next_step: values.nextStep || null,
    })
    if (!result.ok) return result.error
    setEditingProject(null)
    await load()
    return null
  }

  async function handleDeleteProject() {
    if (!editingProject) return 'No project selected.'
    const result = await deleteClientProject(editingProject.id)
    if (!result.ok) return result.error
    setEditingProject(null)
    await load()
    return null
  }

  return (
    <PortalShell
      title="Dashboard"
      eyebrow="Admin"
      navItems={[...navItems]}
      activeTab={activeTab}
      onTabChange={(id) => setActiveTab(id as DashboardTab)}
    >
      {loading && <p className="portal-empty">Loading portal data…</p>}
      {error && (
        <p className="form-panel__error" role="alert">
          {error}
        </p>
      )}

      {!loading && !error && data && (
        <div className="portal-inbox">
          {activeTab === 'overview' && (
            <div className="portal-stack">
              <div className="portal-stats">
                <StatCard label="Contact messages" value={data.contacts.length} />
                <StatCard label="Project briefs" value={data.discoveries.length} />
                <StatCard label="Client projects" value={data.projects.length} />
                <StatCard label="Client accounts" value={data.clients.length} />
              </div>

              <section className="portal-section">
                <div className="portal-section__head">
                  <h2 className="portal-section__title">Recent messages</h2>
                  <button
                    type="button"
                    className="portal-link-btn"
                    onClick={() => setActiveTab('messages')}
                  >
                    View all
                  </button>
                </div>
                {recentContacts.length === 0 ? (
                  <p className="portal-empty">No contact messages yet.</p>
                ) : (
                  <ul className="portal-list">
                    {recentContacts.map((item) => (
                      <li key={item.id}>
                        <ContactSubmissionCard item={item} compact />
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <section className="portal-section">
                <div className="portal-section__head">
                  <h2 className="portal-section__title">Recent briefs</h2>
                  <button
                    type="button"
                    className="portal-link-btn"
                    onClick={() => setActiveTab('briefs')}
                  >
                    View all
                  </button>
                </div>
                {recentBriefs.length === 0 ? (
                  <p className="portal-empty">No project briefs yet.</p>
                ) : (
                  <ul className="portal-list">
                    {recentBriefs.map((item) => (
                      <li key={item.id}>
                        <DiscoverySubmissionCard item={item} />
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </div>
          )}

          {activeTab === 'messages' && (
            <section className="portal-section">
              <h2 className="portal-section__title">Contact messages</h2>
              {data.contacts.length === 0 ? (
                <p className="portal-empty">No contact messages yet.</p>
              ) : (
                <ul className="portal-list">
                  {data.contacts.map((item) => (
                    <li key={item.id}>
                      <ContactSubmissionCard item={item} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {activeTab === 'briefs' && (
            <section className="portal-section">
              <h2 className="portal-section__title">Project briefs</h2>
              {data.discoveries.length === 0 ? (
                <p className="portal-empty">No project briefs yet.</p>
              ) : (
                <ul className="portal-list">
                  {data.discoveries.map((item) => (
                    <li key={item.id}>
                      <DiscoverySubmissionCard item={item} defaultOpen />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {activeTab === 'projects' && (
            <section className="portal-section">
              <div className="portal-section__head">
                <h2 className="portal-section__title">Client projects</h2>
                {!showCreateProject && !editingProject && (
                  <button
                    type="button"
                    className="btn btn--primary"
                    onClick={() => setShowCreateProject(true)}
                  >
                    New project
                  </button>
                )}
              </div>

              {showCreateProject && (
                <ProjectForm
                  clients={data.clients}
                  onSubmit={handleCreateProject}
                  onCancel={() => setShowCreateProject(false)}
                />
              )}

              {editingProject && (
                <ProjectForm
                  clients={data.clients}
                  initial={editingProject}
                  onSubmit={handleUpdateProject}
                  onCancel={() => setEditingProject(null)}
                  onDelete={handleDeleteProject}
                />
              )}

              {!showCreateProject && !editingProject && (
                <>
                  {data.projects.length === 0 ? (
                    <p className="portal-empty">
                      No client projects yet. Create one when you start an engagement.
                    </p>
                  ) : (
                    <ul className="portal-list">
                      {data.projects.map((project) => (
                        <li key={project.id}>
                          <ProjectCard
                            project={project}
                            clientLabel={clientLabel(project.client_id)}
                            onEdit={setEditingProject}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </section>
          )}
        </div>
      )}

      {!loading && !error && (
        <p className="portal-foot">
          Need to test the public flow?{' '}
          <Link to="/contact">Contact page</Link> · <Link to="/discovery">Project brief</Link>
        </p>
      )}
    </PortalShell>
  )
}
