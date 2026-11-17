import type { HoneycombItem, HoneycombProject } from '../../data/v2/honeycomb'
import { withBasePath } from '../../utils/basePath'
import { HoneycombArt } from './HoneycombArt'

type HoneycombProps = {
  item: HoneycombItem
  onActivate: (item: HoneycombItem, origin: HTMLButtonElement) => void
}

function projectMedia(item: HoneycombProject) {
  if (item.art) return <HoneycombArt kind={item.art} />
  if (!item.image) return null
  return (
    <img
      className="v2-honeycomb__image"
      src={withBasePath(item.image)}
      alt=""
      style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
    />
  )
}

function projectCopy(item: HoneycombProject) {
  return (
      <span className="v2-honeycomb__copy">
      <span className="v2-honeycomb__pills">
        <span className="v2-honeycomb__pill">{item.href ? 'Project' : 'Placeholder'}</span>
        <span className="v2-honeycomb__pill v2-honeycomb__pill--type">{item.type}</span>
      </span>
      <span className="v2-honeycomb__title">{item.title}</span>
      {item.summary ? <span className="v2-honeycomb__summary">{item.summary}</span> : null}
      {item.detail ? <span className="v2-honeycomb__more">{item.detail}</span> : null}
      {item.href ? (
        <svg className="v2-honeycomb__arrow" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </span>
  )
}

/** One honeycomb tile. A project carries a title; a photo is the picture alone. */
export function Honeycomb({ item, onActivate }: HoneycombProps) {
  if (item.kind === 'shape') return null
  const isProject = item.kind === 'project'
  const interactive = !isProject || Boolean(item.href)

  const face = (
    <>
      {isProject ? projectMedia(item) : (
        <img
          className="v2-honeycomb__image"
          src={withBasePath(item.image)}
          alt=""
          style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
        />
      )}
      {isProject ? projectCopy(item) : <span className="v2-honeycomb__pill v2-honeycomb__pill--photo">Photo</span>}
    </>
  )

  return (
    <div className="v2-honeycomb__item">
      <span className="v2-honeycomb__stroke" aria-hidden="true" />
      {interactive ? (
        <button
          type="button"
          className={`v2-honeycomb__face v2-honeycomb__face--${item.kind}`}
          aria-label={isProject ? `${item.title}. ${item.type}. ${item.summary}` : `View photo: ${item.caption}`}
          onClick={(event) => onActivate(item, event.currentTarget)}
        >
          {face}
        </button>
      ) : (
        <div className="v2-honeycomb__face v2-honeycomb__face--project v2-honeycomb__face--static">
          {face}
        </div>
      )}
    </div>
  )
}
