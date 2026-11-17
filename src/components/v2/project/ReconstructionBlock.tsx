import type { ProjectBlock } from '../../../data/v2/projects/types'

function Kicker({ children }: { children: string }) {
  return (
    <p className="vp-kicker">
      <span className="vp-kicker__rule" aria-hidden="true" />
      {children}
    </p>
  )
}

export function ReconstructionBlock({
  block,
}: {
  block: Extract<ProjectBlock, { type: 'reconstruction' }>
}) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        <p className="vp-prose">{block.intro}</p>
      </div>
      <div className="vp-recon">
        <div>
          <p className="vp-recon__label">{block.beforeLabel}</p>
          <ol className="vp-recon__before">
            {block.before.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
        <figure className="vp-recon__stage">
          <div className="vp-deck">
            <div className="vp-deck__slide">
              <p>{block.slide.kicker}</p>
              <h3>{block.slide.title}</h3>
              <p>{block.slide.body}</p>
            </div>
            <div className="vp-deck__card">
              <p className="vp-deck__status">{block.finding.status}</p>
              <h3>{block.finding.title}</h3>
              <p>{block.finding.what}</p>
              <p>{block.finding.why}</p>
              <p className="vp-deck__action">{block.finding.action}</p>
            </div>
          </div>
          <figcaption className="vp-conceptual">{block.caption}</figcaption>
        </figure>
      </div>
    </section>
  )
}
