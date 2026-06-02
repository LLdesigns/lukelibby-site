import type { WorkItem } from '../../data/work'
import { Tag } from '../Tag'

type WorkCardBodyProps = {
  item: WorkItem
  titleTag?: 'h3' | 'h4'
}

export function WorkCardBody({ item, titleTag: TitleTag = 'h3' }: WorkCardBodyProps) {
  return (
    <div className="work-card__body">
      <span className="work-card__status">{item.statusLabel}</span>
      <TitleTag className="work-card__title">{item.title}</TitleTag>
      <p className="work-card__desc">{item.description}</p>
      <div className="work-card__tags">
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <span className="work-card__cta" aria-hidden={!item.href}>
        {item.ctaLabel}
        {item.href ? ' →' : ''}
      </span>
    </div>
  )
}
