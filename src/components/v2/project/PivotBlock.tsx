import type { ProjectBlock } from '../../../data/v2/projects/types'

function Kicker({ children }: { children: string }) {
  return (
    <p className="vp-kicker">
      <span className="vp-kicker__rule" aria-hidden="true" />
      {children}
    </p>
  )
}

export function PivotBlock({ block }: { block: Extract<ProjectBlock, { type: 'pivot' }> }) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        <p className="vp-prose">{block.intro}</p>
      </div>
      <ol className="vp-flow">
        {block.flow.map((step, index) => (
          <li key={step.label}>
            <span>{index + 1}</span>
            <h3>{step.label}</h3>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
      <div className="vp-lanes">
        {block.lanes.map((lane) => (
          <article key={lane.label}>
            <p>{lane.label}</p>
            <h3>{lane.title}</h3>
            <p>{lane.body}</p>
          </article>
        ))}
      </div>
      <p className="vp-conceptual">{block.caption}</p>
    </section>
  )
}
