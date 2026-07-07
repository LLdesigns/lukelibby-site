import type { ContactSubmission } from '../../api/portal'
import { formatDateTime, formatRelativeTime } from '../../utils/portalFormat'

type ContactSubmissionCardProps = {
  item: ContactSubmission
  compact?: boolean
}

export function ContactSubmissionCard({ item, compact = false }: ContactSubmissionCardProps) {
  const mailto = `mailto:${encodeURIComponent(item.email)}?subject=${encodeURIComponent(
    item.subject ? `Re: ${item.subject}` : 'Re: Your message',
  )}`

  return (
    <article className="portal-card portal-card--paper">
      <div className="portal-card__head">
        <div>
          <p className="portal-card__title">
            {item.name}
            <span className="portal-card__sep">·</span>
            {item.email}
          </p>
          {item.subject && <p className="portal-card__subject">{item.subject}</p>}
        </div>
        <time className="portal-card__time" dateTime={item.created_at} title={formatDateTime(item.created_at)}>
          {formatRelativeTime(item.created_at)}
        </time>
      </div>

      {!compact && (
        <>
          <p className="portal-card__meta">
            <span className="portal-badge">{item.source}</span>
          </p>
          <p className="portal-card__body">{item.message}</p>
          <div className="portal-card__actions">
            <a className="btn btn--brass" href={mailto}>
              Reply by email
            </a>
          </div>
        </>
      )}

      {compact && (
        <p className="portal-card__preview">
          {item.subject ? `${item.subject} — ` : ''}
          {item.message}
        </p>
      )}
    </article>
  )
}
