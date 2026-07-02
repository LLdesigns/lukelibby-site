import { Link } from 'react-router-dom'
import type { ProductStoryDetail } from '../data/productStories'
import { getProductStoryHref } from '../data/productStories'
import { CaseStudyVisual } from './case-study/CaseStudyVisual'
import { Tag } from './Tag'

type ProductStoryCardProps = {
  story: ProductStoryDetail
}

/** @deprecated Use FeaturedProjectCard with WorkItem from work.ts */
export function ProductStoryCard({ story }: ProductStoryCardProps) {
  return (
    <Link
      to={getProductStoryHref(story.slug)}
      className="case-card"
      data-paper-lift
      aria-label={`Read story: ${story.title}`}
    >
      <div className="case-card__top">
        <span className="case-card__number">{story.number}</span>
        <span className="case-card__folder-tab" aria-hidden="true" />
      </div>
      <div className="case-card__image">
        <CaseStudyVisual
          src={story.cardImageSrc}
          alt={story.cardImageAlt}
          placeholderLabel={story.imageLabel}
          className="case-card__thumb"
        />
      </div>
      <div className="case-card__body">
        <h3 className="case-card__title">{story.title}</h3>
        <p className="case-card__desc">{story.description}</p>
        <div className="case-card__tags">
          {story.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <span className="case-card__cta" aria-hidden="true">
          Read Story →
        </span>
      </div>
    </Link>
  )
}
