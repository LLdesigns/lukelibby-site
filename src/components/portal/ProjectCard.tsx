import type { ClientProject } from '../../api/portal'
import { formatDateTime, formatRelativeTime, projectStatusLabels } from '../../utils/portalFormat'

type ProjectCardProps = {
  project: ClientProject
  clientLabel?: string
  onEdit?: (project: ClientProject) => void
}

export function ProjectCard({ project, clientLabel, onEdit }: ProjectCardProps) {
  return (
    <article className="portal-card portal-card--paper portal-card--project">
      <div className="portal-card__head">
        <div>
          <p className="portal-card__title">{project.title}</p>
          {clientLabel && <p className="portal-card__meta">{clientLabel}</p>}
        </div>
        <span className={`portal-status portal-status--${project.status}`}>
          {projectStatusLabels[project.status]}
        </span>
      </div>

      {project.summary && <p className="portal-card__body">{project.summary}</p>}

      {project.next_step && (
        <div className="portal-card__next">
          <p className="portal-card__next-label">Next step</p>
          <p>{project.next_step}</p>
        </div>
      )}

      <p className="portal-card__foot">
        Updated {formatRelativeTime(project.updated_at)}
        <span className="portal-card__sep">·</span>
        <time dateTime={project.updated_at}>{formatDateTime(project.updated_at)}</time>
      </p>

      {onEdit && (
        <div className="portal-card__actions">
          <button type="button" className="btn btn--secondary" onClick={() => onEdit(project)}>
            Edit project
          </button>
        </div>
      )}
    </article>
  )
}
