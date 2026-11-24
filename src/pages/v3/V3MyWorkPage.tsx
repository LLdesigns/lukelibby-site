import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { V3Shell } from '../../components/v3/V3Shell'
import { v3AllWork } from '../../data/v3/landing'
import { withBasePath } from '../../utils/basePath'

export function V3MyWorkPage() {
  return (
    <V3Shell
      title="My Work"
      description="All product work by Luke Libby — internal tools, AI workflows, outdoor products, and learning systems."
      pathname="/work"
      workIndex
    >
      <div className="v3__frame">
        <header className="v3-work-bar">
          <Link className="v3-work-bar__back" to="/">
            <span aria-hidden="true">‹</span> Back
          </Link>
          <h1 className="v3-work-bar__title">My Work</h1>
        </header>

        <section aria-label="All work">
          <div className="v3-work-grid">
            {v3AllWork.map((item, index) => (
              <Link
                key={item.id}
                className="v3-work-tile"
                to={item.href}
                aria-label={`${item.title} — ${item.type}`}
                data-reveal
                style={{ '--reveal-delay': `${index * 40}ms` } as CSSProperties}
              >
                <img
                  src={withBasePath(item.image)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span className="v3-work-tile__meta">
                  <span className="v3-work-tile__type">{item.type}</span>
                  <span className="v3-work-tile__title">{item.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </V3Shell>
  )
}
