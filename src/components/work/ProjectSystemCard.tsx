import { Link } from 'react-router-dom'
import type { WorkItem } from '../../data/work'
import { WorkCardBody } from './WorkCardBody'
import { WorkCardVisual } from './WorkCardVisual'

type ProjectSystemCardProps = {
  item: WorkItem
}

export function ProjectSystemCard({ item }: ProjectSystemCardProps) {
  const content = (
    <>
      <WorkCardVisual
        imageLabel={item.imageLabel}
        imageSrc={item.imageSrc}
        imageAlt={item.imageAlt}
        compact
      />
      <WorkCardBody item={item} titleTag="h4" />
    </>
  )

  if (item.href) {
    return (
      <Link
        to={item.href}
        className="work-card work-card--system"
        aria-label={`${item.ctaLabel}: ${item.title}`}
      >
        {content}
      </Link>
    )
  }

  return (
    <article className="work-card work-card--system work-card--static" aria-disabled="true">
      {content}
    </article>
  )
}
