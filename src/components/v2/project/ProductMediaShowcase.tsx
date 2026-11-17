import type { ProjectScene } from '../../../data/v2/projects/types'
import { withBasePath } from '../../../utils/basePath'

function SceneCopy({ title, body }: { title: string; body: string }) {
  return (
    <div className="vp-scene__copy">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export function ProductMediaShowcase({ scenes }: { scenes: ProjectScene[] }) {
  return (
    <div className="vp-scenes">
      {scenes.map((scene) => {
        if (scene.layout === 'compare') {
          return (
            <article className="vp-compare" key={scene.title}>
              <SceneCopy title={scene.title} body={scene.body} />
              <div className="vp-compare__media">
                {scene.frames.map((frame) => (
                  <figure key={frame.src + frame.label}>
                    <img
                      className={frame.fit === 'cover' ? 'is-cover' : frame.fit === 'wide' ? 'is-wide' : 'is-contain'}
                      src={withBasePath(frame.src)}
                      alt={frame.alt}
                      style={frame.position ? { objectPosition: frame.position } : undefined}
                    />
                    <figcaption>
                      <strong>{frame.label}</strong>
                      <span>{frame.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          )
        }

        const media = (
          <figure className="vp-scene__media">
            <img src={withBasePath(scene.image)} alt={scene.imageAlt} />
            <figcaption>{scene.caption}</figcaption>
          </figure>
        )
        const copy = <SceneCopy title={scene.title} body={scene.body} />
        if (scene.layout === 'stage') {
          return (
            <article className="vp-stage" key={scene.title}>
              {copy}
              {media}
            </article>
          )
        }

        const end = scene.mediaSide === 'end'

        return (
          <article className="vp-feature" key={scene.title}>
            {end ? copy : media}
            {end ? media : copy}
          </article>
        )
      })}
    </div>
  )
}
