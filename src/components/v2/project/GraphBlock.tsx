import { useState } from 'react'
import type { ProjectBlock } from '../../../data/v2/projects/types'

function Kicker({ children }: { children: string }) {
  return (
    <p className="vp-kicker">
      <span className="vp-kicker__rule" aria-hidden="true" />
      {children}
    </p>
  )
}

export function GraphBlock({ block }: { block: Extract<ProjectBlock, { type: 'graph' }> }) {
  const [selected, setSelected] = useState(block.start)
  const current = block.nodes.find((node) => node.id === selected) ?? block.nodes[0]
  const reasons = block.links
    .filter((link) => link.from === selected || link.to === selected)
    .map((link) => ({
      id: link.from === selected ? link.to : link.from,
      why: link.why,
    }))
  const related = new Set(reasons.map((reason) => reason.id))

  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        <p className="vp-prose">{block.intro}</p>
      </div>
      <div className="vp-graph">
        <div className="vp-graph__map" role="group" aria-label="Course concepts">
          <svg className="vp-graph__lines" viewBox="0 0 100 100" aria-hidden="true">
            {block.links.map((link) => {
              const from = block.nodes.find((node) => node.id === link.from)
              const to = block.nodes.find((node) => node.id === link.to)
              if (!from || !to) return null
              const on = from.id === selected || to.id === selected
              return (
                <line
                  key={`${link.from}-${link.to}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  className={on ? 'is-on' : undefined}
                />
              )
            })}
          </svg>
          {block.nodes.map((node) => {
            const on = node.id === selected
            const near = related.has(node.id)
            return (
              <button
                key={node.id}
                type="button"
                className={`vp-graph__node is-${node.kind}${on ? ' is-on' : ''}${near ? ' is-near' : ''}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                aria-pressed={on}
                onClick={() => setSelected(node.id)}
              >
                <span>{node.kind === 'outlier' ? 'Outside' : node.kind}</span>
                {node.label}
              </button>
            )
          })}
        </div>
        <div className="vp-graph__list">
          {block.nodes.map((node) => (
            <button
              key={node.id}
              type="button"
              className={node.id === selected ? 'is-on' : undefined}
              aria-pressed={node.id === selected}
              onClick={() => setSelected(node.id)}
            >
              {node.label}
            </button>
          ))}
        </div>
        <div className="vp-graph__why" aria-live="polite">
          <p className="vp-graph__kind">
            {current.kind === 'outlier' ? 'Outside the objective' : current.kind}
          </p>
          <h3>{current.label}</h3>
          {current.blurb ? <p className="vp-graph__blurb">{current.blurb}</p> : null}
          {current.kind === 'outlier' && current.apart ? (
            <p className="vp-graph__apart">{current.apart}</p>
          ) : null}
          {reasons.length ? (
            <>
              <p className="vp-graph__links-label">Why it connects</p>
              <ul>
                {reasons.map((reason) => {
                  const other = block.nodes.find((node) => node.id === reason.id)
                  return (
                    <li key={reason.id}>
                      <strong>↔ {other?.label}</strong>
                      <span>{reason.why}</span>
                    </li>
                  )
                })}
              </ul>
            </>
          ) : current.kind !== 'outlier' ? (
            <p className="vp-graph__apart">No supporting links for this node.</p>
          ) : null}
        </div>
      </div>
      <p className="vp-conceptual">{block.caption}</p>
    </section>
  )
}
