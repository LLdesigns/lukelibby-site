import { Link } from 'react-router-dom'
import type { CSSProperties, ReactNode } from 'react'
import type { WorkItem } from '../../data/work'
import { TerrapinOutdoorsThumbnail } from '../terrapin-outdoors/TerrapinOutdoorsThumbnail'
import { ReplenishHealthThumbnail } from '../replenish-health/ReplenishHealthThumbnail'
import { WorkCardBody } from './WorkCardBody'
import { WorkCardVisual } from './WorkCardVisual'

const systemThumbnails: Record<string, ReactNode> = {
  'terrapin-outdoors': <TerrapinOutdoorsThumbnail />,
  'replenish-health': <ReplenishHealthThumbnail />,
}

type ProjectSystemCardProps = {
  item: WorkItem
  revealDelay?: number
}

export function ProjectSystemCard({ item, revealDelay = 0 }: ProjectSystemCardProps) {
  const liftStyle = {
    '--lift-delay': `${revealDelay}ms`,
  } as CSSProperties

  const thumbnail = systemThumbnails[item.id]

  const content = (
    <>
      <WorkCardVisual
        imageLabel={item.imageLabel}
        imageSrc={item.imageSrc}
        imageAlt={item.imageAlt}
        compact
      >
        {thumbnail}
      </WorkCardVisual>
      <WorkCardBody item={item} titleTag="h4" />
    </>
  )

  if (item.href) {
    return (
      <Link
        to={item.href}
        className="work-card work-card--system"
        data-paper-lift
        style={liftStyle}
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
