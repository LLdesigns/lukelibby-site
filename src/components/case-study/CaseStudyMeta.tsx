import type { MetaChip } from '../../data/productStories'

type CaseStudyMetaProps = {
  chips: MetaChip[]
}

export function CaseStudyMeta({ chips }: CaseStudyMetaProps) {
  return (
    <ul className="cs-meta" aria-label="Project metadata">
      {chips.map((chip) => (
        <li key={`${chip.label}-${chip.value}`} className="cs-meta__chip">
          <span className="cs-meta__label">{chip.label}</span>
          <span className="cs-meta__value">{chip.value}</span>
        </li>
      ))}
    </ul>
  )
}
