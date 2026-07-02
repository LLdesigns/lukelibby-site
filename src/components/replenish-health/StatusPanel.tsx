import { useState } from 'react'

const priorities = [
  { id: 'low', label: 'Low', level: '1', tone: 'success' as const },
  { id: 'medium', label: 'Medium', level: '2', tone: 'warning' as const },
  { id: 'high', label: 'High', level: '3', tone: 'danger' as const },
]

export function StatusPanel() {
  const [active, setActive] = useState('medium')

  return (
    <article className="rh-status-panel">
      <header className="rh-status-panel__header">
        <h4>Status</h4>
        <span className="rh-status-panel__hint">Tap to set priority</span>
      </header>
      <div className="rh-status-panel__levels">
        {priorities.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`rh-priority${active === item.id ? ` rh-priority--active rh-priority--${item.tone}` : ''}`}
            onClick={() => setActive(item.id)}
            aria-pressed={active === item.id}
          >
            <strong>{item.level}</strong>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="rh-status-panel__actions">
        <button type="button" className="rh-btn rh-btn--primary rh-btn--sm">
          Log
        </button>
        <button type="button" className="rh-btn rh-btn--secondary rh-btn--sm">
          Add
        </button>
      </div>
    </article>
  )
}
