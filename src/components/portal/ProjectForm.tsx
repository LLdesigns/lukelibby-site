import { useState, type FormEvent } from 'react'
import { Button } from '../Button'
import type { ClientProject, SiteProfile } from '../../api/portal'

type ProjectFormProps = {
  clients: SiteProfile[]
  initial?: ClientProject
  onSubmit: (values: {
    clientId: string
    title: string
    status: ClientProject['status']
    summary: string
    nextStep: string
  }) => Promise<string | null>
  onCancel: () => void
  onDelete?: () => Promise<string | null>
}

const statusOptions: ClientProject['status'][] = [
  'discovery',
  'scoped',
  'active',
  'paused',
  'complete',
]

function clientLabel(client: SiteProfile): string {
  return `Client ${client.id.slice(0, 8)}…`
}

export function ProjectForm({ clients, initial, onSubmit, onCancel, onDelete }: ProjectFormProps) {
  const [clientId, setClientId] = useState(initial?.client_id ?? clients[0]?.id ?? '')
  const [title, setTitle] = useState(initial?.title ?? '')
  const [status, setStatus] = useState<ClientProject['status']>(initial?.status ?? 'discovery')
  const [summary, setSummary] = useState(initial?.summary ?? '')
  const [nextStep, setNextStep] = useState(initial?.next_step ?? '')
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setSaving(true)
    setError('')

    const result = await onSubmit({ clientId, title, status, summary, nextStep })
    if (result) {
      setError(result)
      setSaving(false)
    }
  }

  async function handleDelete() {
    if (!onDelete || !confirm('Delete this project?')) return
    setSaving(true)
    setError('')
    const result = await onDelete()
    if (result) {
      setError(result)
      setSaving(false)
    }
  }

  return (
    <form className="portal-form form-panel" onSubmit={handleSubmit}>
      <h2 className="portal-form__title">{initial ? 'Edit project' : 'New client project'}</h2>

      {!initial && (
        <label className="form-field">
          <span className="form-field__label">Client account</span>
          <select
            className="form-field__input"
            value={clientId}
            onChange={(event) => setClientId(event.target.value)}
            required
            disabled={clients.length === 0}
          >
            {clients.length === 0 ? (
              <option value="">No client accounts yet</option>
            ) : (
              clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {clientLabel(client)}
                </option>
              ))
            )}
          </select>
        </label>
      )}

      <label className="form-field">
        <span className="form-field__label">Project title</span>
        <input
          className="form-field__input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          minLength={3}
          maxLength={120}
        />
      </label>

      <label className="form-field">
        <span className="form-field__label">Status</span>
        <select
          className="form-field__input"
          value={status}
          onChange={(event) => setStatus(event.target.value as ClientProject['status'])}
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="form-field">
        <span className="form-field__label">Summary</span>
        <textarea
          className="form-field__textarea"
          rows={3}
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          maxLength={2000}
        />
      </label>

      <label className="form-field">
        <span className="form-field__label">Next step</span>
        <input
          className="form-field__input"
          value={nextStep}
          onChange={(event) => setNextStep(event.target.value)}
          maxLength={500}
          placeholder="e.g. Review brief and schedule kickoff call"
        />
      </label>

      {error && (
        <p className="form-panel__error" role="alert">
          {error}
        </p>
      )}

      <div className="form-panel__actions">
        <Button type="submit" variant="primary" disabled={saving || (!initial && clients.length === 0)}>
          {saving ? 'Saving…' : initial ? 'Save changes' : 'Create project'}
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
        {initial && onDelete && (
          <Button type="button" variant="secondary" onClick={() => void handleDelete()} disabled={saving}>
            Delete
          </Button>
        )}
      </div>
    </form>
  )
}
