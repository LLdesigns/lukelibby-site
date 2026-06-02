import { Link } from 'react-router-dom'
import type { CaseStudy } from '../data/caseStudies'
import { CaseStudyVisual } from './case-study/CaseStudyVisual'
import { Tag } from './Tag'

type CaseStudyCardProps = {
  study: CaseStudy
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      to={study.href}
      className="case-card"
      aria-label={`View case study: ${study.title}`}
    >
      <div className="case-card__top">
        <span className="case-card__number">{study.number}</span>
        <span className="case-card__folder-tab" aria-hidden="true" />
      </div>
      <div className="case-card__image">
        <CaseStudyVisual
          src={study.cardImageSrc}
          alt={study.cardImageAlt}
          placeholderLabel={study.imageLabel}
          className="case-card__thumb"
        />
      </div>
      <div className="case-card__body">
        <h3 className="case-card__title">{study.title}</h3>
        <p className="case-card__desc">{study.description}</p>
        <div className="case-card__tags">
          {study.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <span className="case-card__cta" aria-hidden="true">
          View Case Study →
        </span>
      </div>
    </Link>
  )
}
