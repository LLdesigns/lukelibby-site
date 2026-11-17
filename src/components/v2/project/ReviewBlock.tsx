import type { ProjectBlock } from '../../../data/v2/projects/types'
import { withBasePath } from '../../../utils/basePath'

function Kicker({ children }: { children: string }) {
  return (
    <p className="vp-kicker">
      <span className="vp-kicker__rule" aria-hidden="true" />
      {children}
    </p>
  )
}

export function ReviewBlock({ block }: { block: Extract<ProjectBlock, { type: 'review' }> }) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        <p className="vp-prose">{block.intro}</p>
      </div>
      <div className="vp-review">
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
        <figure className="vp-review__stage">
          {block.media ? (
            <img
              className="vp-review__shot"
              src={withBasePath(block.media.src)}
              alt={block.media.alt}
            />
          ) : (
            <div className="vp-panes" aria-hidden="false">
              <div className="vp-panes__clips">
                <p>Clips</p>
                <span>01</span>
                <span className="is-on">02</span>
                <span>03</span>
              </div>
              <div className="vp-panes__video">
                <p>{block.clip}</p>
              </div>
              <div className="vp-panes__note">
                <p>Finding</p>
                <h3>{block.finding?.title}</h3>
                <p>{block.finding?.what}</p>
                <p>{block.finding?.why}</p>
                <p className="vp-panes__actions">
                  <span>{block.actions?.[0]}</span>
                  <span>{block.actions?.[1]}</span>
                </p>
              </div>
            </div>
          )}
          <figcaption className="vp-conceptual">{block.caption}</figcaption>
        </figure>
      </div>
    </section>
  )
}
