import { Link } from 'react-router-dom'
import type { WorkItem } from '../../data/work'
import { WorkCardBody } from './WorkCardBody'
import { WorkCardVisual } from './WorkCardVisual'

type FeaturedProjectCardProps = {
  item: WorkItem
}

export function FeaturedProjectCard({ item }: FeaturedProjectCardProps) {
  const content = (
    <>
      <div className="work-card__top">
        <span className="work-card__folder-tab" aria-hidden="true" />
      </div>
      <WorkCardVisual
        imageLabel={item.imageLabel}
        imageSrc={item.imageSrc}
        imageAlt={item.imageAlt}
      />
      <WorkCardBody item={item} />
    </>
  )

  if (item.href) {
    return (
      <Link
        to={item.href}
        className="work-card work-card--featured"
        aria-label={`${item.ctaLabel}: ${item.title}`}
      >
        {content}
      </Link>
    )
  }

  return (
    <article className="work-card work-card--featured work-card--static" aria-disabled="true">
      {content}
    </article>
  )
}
