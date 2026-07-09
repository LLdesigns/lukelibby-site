import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import type { WorkItem } from '../../data/work'
import { WorkCardBody } from './WorkCardBody'
import { WorkCardVisual } from './WorkCardVisual'

type FeaturedProjectCardProps = {
  item: WorkItem
  revealDelay?: number
}

export function FeaturedProjectCard({ item, revealDelay = 0 }: FeaturedProjectCardProps) {
  const liftStyle = {
    '--lift-delay': `${revealDelay}ms`,
  } as CSSProperties

  const content = (
    <>
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
        data-paper-lift
        style={liftStyle}
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
