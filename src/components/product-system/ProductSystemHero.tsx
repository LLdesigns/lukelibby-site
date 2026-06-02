import type { ProductSystemDetail } from '../../data/productSystems/types'
import { CaseStudyMeta } from '../case-study/CaseStudyMeta'

type ProductSystemHeroProps = {
  system: ProductSystemDetail
}

export function ProductSystemHero({ system }: ProductSystemHeroProps) {
  return (
    <header className="cs-hero">
      <p className="cs-hero__eyebrow">{system.eyebrow}</p>
      <h1 className="cs-hero__title">{system.title}</h1>
      <p className="cs-hero__subtitle">{system.subtitle}</p>
      <CaseStudyMeta chips={system.metaChips} />
    </header>
  )
}
