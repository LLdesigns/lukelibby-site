import type { DiscoverySubmission } from '../../api/portal'
import { formatDateTime, formatDiscoveryAnswers, formatRelativeTime } from '../../utils/portalFormat'

type DiscoverySubmissionCardProps = {
  item: DiscoverySubmission
  defaultOpen?: boolean
}

export function DiscoverySubmissionCard({ item, defaultOpen = false }: DiscoverySubmissionCardProps) {
  const answers = formatDiscoveryAnswers(item.answers)
  const mailto = `mailto:${encodeURIComponent(item.email)}?subject=${encodeURIComponent('Re: Your project brief')}`

  return (
    <details className="portal-card portal-card--paper portal-card--details" open={defaultOpen}>
      <summary className="portal-card__summary">
        <div>
          <p className="portal-card__title">
            {item.name ? `${item.name} · ` : ''}
            {item.email}
          </p>
          <p className="portal-card__meta">{answers.length} answers</p>
        </div>
        <time className="portal-card__time" dateTime={item.created_at} title={formatDateTime(item.created_at)}>
          {formatRelativeTime(item.created_at)}
        </time>
      </summary>

      <dl className="portal-card__answers">
        {answers.map((answer) => (
          <div key={answer.label} className="portal-card__answer">
            <dt>{answer.label}</dt>
            <dd>{answer.value}</dd>
          </div>
        ))}
      </dl>

      <div className="portal-card__actions">
        <a className="btn btn--brass" href={mailto}>
          Follow up by email
        </a>
      </div>
    </details>
  )
}
