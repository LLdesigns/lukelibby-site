import { useState } from 'react'
import { RhSearchIcon } from './icons'

export function ControlsShowcase() {
  const [enabled, setEnabled] = useState(true)
  const [query, setQuery] = useState('')

  return (
    <div className="rh-controls">
      <div className="rh-controls__buttons">
        <button type="button" className="rh-btn rh-btn--primary">
          Log progress
        </button>
        <button type="button" className="rh-btn rh-btn--secondary">
          Add entry
        </button>
        <button type="button" className="rh-btn rh-btn--ghost">
          View history
        </button>
      </div>

      <label className="rh-field">
        <span className="rh-field__label">Search habits</span>
        <span className="rh-input-wrap">
          <RhSearchIcon className="rh-input-wrap__icon" />
          <input
            type="search"
            className="rh-input"
            placeholder="Search activities..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </span>
      </label>

      <label className="rh-toggle-row">
        <span className="rh-toggle-row__label">Daily reminders</span>
        <button
          type="button"
          role="switch"
          className={`rh-switch${enabled ? ' rh-switch--on' : ''}`}
          aria-checked={enabled}
          onClick={() => setEnabled((current) => !current)}
        >
          <span className="rh-switch__thumb" aria-hidden />
        </button>
      </label>
    </div>
  )
}
