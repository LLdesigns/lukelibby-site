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

export function PlateBlock({ block }: { block: Extract<ProjectBlock, { type: 'plate' }> }) {
  const plateClass = block.size === 'phone' ? 'vp-plate vp-plate--phone' : 'vp-plate'

  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        <p className="vp-prose">{block.intro}</p>
      </div>
      <figure className={plateClass}>
        <img src={withBasePath(block.image)} alt={block.imageAlt} />
        <figcaption className="vp-conceptual">{block.caption}</figcaption>
      </figure>
    </section>
  )
}
