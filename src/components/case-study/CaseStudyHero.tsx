import type { CaseStudyDetail } from '../../data/caseStudies'
import { CaseStudyMeta } from './CaseStudyMeta'
import { PrivacyNote } from './PrivacyNote'

type CaseStudyHeroProps = {
  study: CaseStudyDetail
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <header className="cs-hero">
      <p className="cs-hero__eyebrow">{study.eyebrow}</p>
      <h1 className="cs-hero__title">{study.title}</h1>
      <p className="cs-hero__subtitle">{study.subtitle}</p>
      <CaseStudyMeta chips={study.metaChips} />
      {study.privacyNote && <PrivacyNote text={study.privacyNote} />}
    </header>
  )
}
