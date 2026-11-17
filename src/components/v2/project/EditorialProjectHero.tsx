import type { ProjectDocument } from '../../../data/v2/projects/types'
import { withBasePath } from '../../../utils/basePath'

export function EditorialProjectHero({ project }: { project: ProjectDocument }) {
  const image = project.hero.image
  const { hero } = project

  return (
    <section
      className={image ? 'vp-hero' : 'vp-hero vp-hero--text'}
      id="introduction"
      aria-labelledby="project-title"
    >
      <div className="vp-hero__copy">
        <p className="vp-kicker">
          <span className="vp-kicker__rule" aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1 id="project-title">{hero.title}</h1>
        <p className="vp-hero__lede">{hero.lede}</p>
        {hero.highlight ? <p className="vp-hero__highlight">{hero.highlight}</p> : null}
        {hero.role ? <p className="vp-hero__role">{hero.role}</p> : null}
        {hero.meta ? <p className="vp-hero__meta">{hero.meta}</p> : null}
        {hero.tags.length ? (
          <ul className="vp-tags">
            {hero.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
        {project.liveUrl ? (
          <a className="vp-live" href={project.liveUrl} rel="noreferrer">
            {project.liveLabel ?? 'Visit the product'}
            <span aria-hidden="true"> →</span>
          </a>
        ) : null}
      </div>
      {image ? (
        <figure className="vp-hero__visual">
          <img
            src={withBasePath(image)}
            alt={hero.imageAlt ?? ''}
            style={hero.imagePosition ? { objectPosition: hero.imagePosition } : undefined}
          />
        </figure>
      ) : null}
    </section>
  )
}
