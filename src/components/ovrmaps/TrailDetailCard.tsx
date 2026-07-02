import { useState } from 'react'
import { difficultyColors } from './tokens'

export function TrailDetailCard() {
  const [tab, setTab] = useState<'details' | 'reviews'>('details')

  return (
    <article className="ovr-trail-card">
      <header className="ovr-trail-card__header">
        <h3>K27 Roads</h3>
        <button type="button" className="ovr-icon-btn" aria-label="More options">
          ⋯
        </button>
      </header>

      <div className="ovr-trail-card__tabs">
        {(['details', 'reviews'] as const).map((item) => (
          <button
            key={item}
            type="button"
            className={`ovr-tab${tab === item ? ' ovr-tab--active' : ''}`}
            onClick={() => setTab(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <div className="ovr-trail-card__actions">
        <button type="button" className="ovr-soft-btn">
          ↗ Share
        </button>
        <button type="button" className="ovr-icon-btn" aria-label="Bookmark">
          🔖
        </button>
      </div>

      <div className="ovr-trail-card__hero" aria-hidden />
      <span
        className="ovr-difficulty-badge"
        style={{ backgroundColor: difficultyColors.beginner }}
      >
        Beginner
      </span>

      <div className="ovr-trail-card__rating">
        <span>(8)</span>
        <span className="ovr-stars" aria-hidden>
          ★★★★★
        </span>
      </div>
      <p className="ovr-trail-card__meta">Length: 65.5 miles</p>
      <p className="ovr-trail-card__copy">
        Expect scenic views, potential water crossings, and a chance to explore remote
        backcountry terrain.
      </p>
    </article>
  )
}
