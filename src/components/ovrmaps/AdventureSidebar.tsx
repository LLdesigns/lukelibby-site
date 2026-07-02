import { useState } from 'react'
import { adventures, categoryTags, difficultyColors } from './tokens'

export function AdventureSidebar() {
  const [expandedId, setExpandedId] = useState('alpine')
  const [activeId, setActiveId] = useState('alpine')

  return (
    <aside className="ovr-adventure-sidebar">
      <header className="ovr-adventure-sidebar__header">
        <div>
          <span className="ovr-adventure-sidebar__logo">OVRmaps</span>
          <h3>My Adventures</h3>
        </div>
        <button type="button" className="ovr-add-btn" aria-label="Add adventure">
          +
        </button>
      </header>

      {adventures.map((adventure) => {
        const isExpanded = expandedId === adventure.id
        const isActive = activeId === adventure.id

        return (
          <article
            key={adventure.id}
            className={`ovr-adventure-card${isActive ? ' ovr-adventure-card--active' : ''}`}
          >
            <button
              type="button"
              className="ovr-adventure-card__summary"
              onClick={() => {
                setActiveId(adventure.id)
                setExpandedId((current) =>
                  current === adventure.id ? '' : adventure.id,
                )
              }}
            >
              <div>
                <strong>{adventure.title}</strong>
                <span>
                  Routes: {adventure.routes} · Markers: {adventure.markers}
                </span>
              </div>
              <div className="ovr-adventure-card__tags">
                {adventure.tags.map((tagId) => {
                  const tag = categoryTags.find((entry) => entry.id === tagId)
                  if (!tag) return null
                  return (
                    <span
                      key={tag.id}
                      className="ovr-category-tag"
                      style={{ backgroundColor: tag.color }}
                    >
                      {tag.label}
                    </span>
                  )
                })}
              </div>
            </button>

            {isExpanded && adventure.segments.length > 0 ? (
              <ul className="ovr-route-list">
                {adventure.segments.map((segment) => (
                  <li key={segment.id}>
                    <button type="button" className="ovr-route-item">
                      <span
                        className="ovr-route-item__bar"
                        style={{
                          backgroundColor:
                            difficultyColors[segment.difficulty],
                        }}
                        aria-hidden
                      />
                      <span className="ovr-route-item__copy">
                        <strong>{segment.name}</strong>
                        <span>{segment.miles}</span>
                      </span>
                      <span
                        className="ovr-difficulty-pill"
                        style={{
                          backgroundColor:
                            difficultyColors[segment.difficulty],
                        }}
                      >
                        {segment.difficulty}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        )
      })}
    </aside>
  )
}
