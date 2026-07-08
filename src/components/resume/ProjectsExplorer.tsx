import { useState } from 'react'
import { Link } from 'react-router-dom'
import { independentProjects } from '../../data/resume'
import { isPrerender } from '../../utils/prerender'

type Project = (typeof independentProjects)[number]

function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="projects-explorer__detail paper-card" role="tabpanel">
      <header className="projects-explorer__header">
        <div>
          <h3 className="projects-explorer__title">{project.title}</h3>
          <p className="projects-explorer__subtitle">{project.subtitle}</p>
          <p className="projects-explorer__role">{project.role}</p>
        </div>
        <div className="projects-explorer__links">
          {'href' in project && project.href && (
            <Link to={project.href} className="projects-explorer__case-link">
              Read Story →
            </Link>
          )}
          {'liveUrl' in project && project.liveUrl && (
            <a
              href={project.liveUrl}
              className="projects-explorer__case-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live site ↗
            </a>
          )}
        </div>
      </header>
      <p className="projects-explorer__desc">{project.description}</p>
      <h4 className="projects-explorer__subhead">Highlights</h4>
      <ul className="projects-explorer__list">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="projects-explorer__tech">
        {project.technologies.map((tech) => (
          <span key={tech} className="projects-explorer__tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}

export function ProjectsExplorer() {
  const [activeId, setActiveId] = useState<string>(
    independentProjects[0]?.id ?? '',
  )
  const showAll = isPrerender()

  const active =
    independentProjects.find((p) => p.id === activeId) ?? independentProjects[0]

  if (!active) return null

  const projectsToRender = showAll ? independentProjects : [active]

  return (
    <div className="projects-explorer">
      <div className="projects-explorer__tabs" role="tablist">
        {independentProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            role="tab"
            aria-selected={activeId === project.id}
            className={`projects-explorer__tab${activeId === project.id ? ' projects-explorer__tab--active' : ''}`}
            onClick={() => setActiveId(project.id)}
          >
            {project.title}
          </button>
        ))}
      </div>

      {projectsToRender.map((project) => (
        <ProjectDetail key={project.id} project={project} />
      ))}
    </div>
  )
}
