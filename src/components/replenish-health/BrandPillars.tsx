import type { CSSProperties } from 'react'
import { brandPillars } from './tokens'

export function BrandPillars() {
  return (
    <div className="rh-pillars">
      {brandPillars.map((pillar) => (
        <article
          key={pillar.id}
          className="rh-pillar"
          style={{ '--rh-pillar-accent': pillar.accent } as CSSProperties}
        >
          <header className="rh-pillar__header">{pillar.title}</header>
          <ul className="rh-pillar__list">
            {pillar.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
