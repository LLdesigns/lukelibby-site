import type { BrandSystemMeta } from '../../data/brandSystems/types'
import { Tag } from '../Tag'

type BrandSystemHeroProps = {
  system: BrandSystemMeta
}

export function BrandSystemHero({ system }: BrandSystemHeroProps) {
  return (
    <header className="bs-hero">
      <p className="bs-hero__eyebrow">{system.statusLabel}</p>
      <h1 className="bs-hero__title">{system.title}</h1>
      <p className="bs-hero__lede">{system.description}</p>
      <div className="bs-hero__tags">
        {system.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </header>
  )
}
