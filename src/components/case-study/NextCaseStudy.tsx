import { Link } from 'react-router-dom'
import {
  caseStudiesBySlug,
  getCaseStudyHref,
  getNextCaseStudySlug,
  getPreviousCaseStudySlug,
  type CaseStudySlug,
} from '../../data/caseStudies'

type NextCaseStudyProps = {
  slug: CaseStudySlug
}

export function NextCaseStudy({ slug }: NextCaseStudyProps) {
  const prevSlug = getPreviousCaseStudySlug(slug)
  const nextSlug = getNextCaseStudySlug(slug)
  const prev = caseStudiesBySlug[prevSlug]
  const next = caseStudiesBySlug[nextSlug]

  return (
    <nav className="cs-next" aria-label="Case study navigation">
      <div className="cs-next__item cs-next__item--prev">
        <span className="cs-next__label">Previous Case Study</span>
        <Link className="cs-next__link" to={getCaseStudyHref(prevSlug)}>
          ← {prev.number} — {prev.title}
        </Link>
      </div>
      <div className="cs-next__item cs-next__item--next">
        <span className="cs-next__label">Next Case Study</span>
        <Link className="cs-next__link" to={getCaseStudyHref(nextSlug)}>
          {next.number} — {next.title} →
        </Link>
      </div>
    </nav>
  )
}
