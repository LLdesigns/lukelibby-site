import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import type { WorkItem } from '../../data/work'
import { WorkCardBody } from './WorkCardBody'
import { WorkCardVisual } from './WorkCardVisual'

type SelectedWorkCardProps = {
  item: WorkItem
  revealDelay?: number
}

export function SelectedWorkCard({ item, revealDelay = 0 }: SelectedWorkCardProps) {
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
      <WorkCardBody item={item} titleTag="h4" />
    </>
  )

  if (item.href) {
    return (
      <Link
        to={item.href}
        className="work-card work-card--selected"
        data-paper-lift
        style={liftStyle}
        aria-label={`${item.ctaLabel}: ${item.title}`}
      >
        {content}
      </Link>
    )
  }

  return (
    <article className="work-card work-card--selected work-card--static" aria-disabled="true">
      {content}
    </article>
  )
}
