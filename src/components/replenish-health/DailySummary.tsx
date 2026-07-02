import { useState, type CSSProperties } from 'react'

const rings = [
  { label: 'Hydration', value: 72, color: '#4a9fd4' },
  { label: 'Movement', value: 58, color: '#e8943a' },
  { label: 'Rest', value: 86, color: '#8b7fd4' },
]

export function DailySummary() {
  const [focusIndex, setFocusIndex] = useState(0)
  const focus = rings[focusIndex] ?? rings[0]

  return (
    <article className="rh-daily-summary">
      <header className="rh-daily-summary__header">
        <h4>Daily Summary</h4>
        <span>Today</span>
      </header>

      <div className="rh-daily-summary__ring-wrap">
        <button
          type="button"
          className="rh-progress-ring"
          style={
            {
              '--rh-ring-value': focus.value,
              '--rh-ring-color': focus.color,
            } as CSSProperties
          }
          onClick={() => setFocusIndex((current) => (current + 1) % rings.length)}
          aria-label={`${focus.label} progress ${focus.value} percent. Click to cycle.`}
        >
          <span className="rh-progress-ring__value">{focus.value}%</span>
        </button>
        <p className="rh-daily-summary__focus">{focus.label}</p>
      </div>

      <div className="rh-daily-summary__stats">
        <div>
          <strong>1</strong>
          <span>Goals met</span>
        </div>
        <div>
          <strong>2</strong>
          <span>In progress</span>
        </div>
      </div>

      <div className="rh-daily-summary__actions">
        <button type="button" className="rh-btn rh-btn--primary rh-btn--sm">
          Start
        </button>
        <button type="button" className="rh-btn rh-btn--secondary rh-btn--sm">
          Review
        </button>
      </div>
    </article>
  )
}
