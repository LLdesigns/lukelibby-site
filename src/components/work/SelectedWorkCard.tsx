import { Link } from 'react-router-dom'
import type { WorkItem } from '../../data/work'
import { WorkCardBody } from './WorkCardBody'
import { WorkCardVisual } from './WorkCardVisual'

type SelectedWorkCardProps = {
  item: WorkItem
}

export function SelectedWorkCard({ item }: SelectedWorkCardProps) {
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
