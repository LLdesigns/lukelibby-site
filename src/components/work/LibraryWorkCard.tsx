import { Link } from 'react-router-dom'
import type { WorkItem } from '../../data/work'
import { Tag } from '../Tag'
import { WorkCardVisual } from './WorkCardVisual'

type LibraryWorkCardProps = {
  item: WorkItem
}

export function LibraryWorkCard({ item }: LibraryWorkCardProps) {
  const content = (
    <>
      <WorkCardVisual
        imageLabel={item.imageLabel}
        imageSrc={item.imageSrc}
        imageAlt={item.imageAlt}
        compact
      />
      <div className="work-card__body work-card__body--library">
        <h4 className="work-card__title">{item.title}</h4>
        <p className="work-card__desc">{item.description}</p>
        <div className="work-card__tags">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <span className="work-card__cta">{item.ctaLabel}</span>
      </div>
    </>
  )

  if (item.href) {
    return (
      <Link
        to={item.href}
        className="work-card work-card--library"
        aria-label={`${item.ctaLabel}: ${item.title}`}
      >
        {content}
      </Link>
    )
  }

  return (
    <article className="work-card work-card--library work-card--static" aria-disabled="true">
      {content}
    </article>
  )
}
