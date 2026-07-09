import type { WorkItem } from '../../data/work'
import { parseWorkStatusLabel } from '../../utils/workCard'
import { Tag } from '../Tag'

type WorkCardBodyProps = {
  item: WorkItem
  titleTag?: 'h3' | 'h4'
  tagLimit?: number
}

export function WorkCardBody({
  item,
  titleTag: TitleTag = 'h3',
  tagLimit = 3,
}: WorkCardBodyProps) {
  const { category, outcome } = parseWorkStatusLabel(item.statusLabel)
  const visibleTags = item.tags.slice(0, tagLimit)
  const hiddenTagCount = Math.max(item.tags.length - tagLimit, 0)

  return (
    <div className="work-card__body">
      <TitleTag className="work-card__title">{item.title}</TitleTag>
      <p className="work-card__category">{category}</p>
      <p className="work-card__desc">{item.description}</p>
      {outcome ? <p className="work-card__outcome">{outcome}</p> : null}
      {visibleTags.length > 0 ? (
        <div className="work-card__tags">
          {visibleTags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
          {hiddenTagCount > 0 ? (
            <span className="work-card__tags-more">+{hiddenTagCount}</span>
          ) : null}
        </div>
      ) : null}
      <div className="work-card__footer">
        <span className="work-card__cta" aria-hidden={!item.href && !item.ctaLabel}>
          {item.ctaLabel}
          {item.href ? ' →' : ''}
        </span>
      </div>
    </div>
  )
}
