import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import type { ProjectBlock, ProjectDocument } from '../../../data/v2/projects/types'
import { withBasePath } from '../../../utils/basePath'
import { ScrollToTopButton } from '../../ScrollToTopButton'
import { SubtleMotion } from '../../SubtleMotion'
import { EditorialProjectHero } from './EditorialProjectHero'
import { ProductMediaShowcase } from './ProductMediaShowcase'
import { ProjectDecisionFeature } from './ProjectDecisionFeature'
import { ProjectProcessStrip } from './ProjectProcessStrip'
import { ProjectReflection } from './ProjectReflection'
import { ReconstructionBlock } from './ReconstructionBlock'
import { GraphBlock } from './GraphBlock'
import { ReviewBlock } from './ReviewBlock'
import { PivotBlock } from './PivotBlock'
import { RouteBlock } from './RouteBlock'
import { PlateBlock } from './PlateBlock'


type ThemeStyle = CSSProperties & {
  '--p-bg': string
  '--p-surface': string
  '--p-ink': string
  '--p-muted': string
  '--p-accent': string
  '--p-font': string
  '--p-font-display': string
}

function Kicker({ children }: { children: string }) {
  return (
    <p className="vp-kicker">
      <span className="vp-kicker__rule" aria-hidden="true" />
      {children}
    </p>
  )
}

function SplitBlock({ block }: { block: Extract<ProjectBlock, { type: 'split' }> }) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        <div className="vp-prose">
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function RolesBlock({ block }: { block: Extract<ProjectBlock, { type: 'roles' }> }) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <h2 id={`${block.id}-title`} className="vp-sr">
        {block.eyebrow}
      </h2>
      <ul className="vp-roles">
        {block.items.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function StepsBlock({ block }: { block: Extract<ProjectBlock, { type: 'steps' }> }) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <h2 id={`${block.id}-title`} className="vp-sr">
        {block.eyebrow}
      </h2>
      <ol className="vp-steps">
        {block.items.map((item, index) => (
          <li key={item.title}>
            <span className="vp-steps__index">{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function ShowcaseBlock({ block }: { block: Extract<ProjectBlock, { type: 'showcase' }> }) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        <div className="vp-prose">
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <figure className="vp-figure">
        <img src={withBasePath(block.image)} alt={block.imageAlt} />
        <figcaption>{block.caption}</figcaption>
      </figure>
      {block.screens?.length ? (
        <ul className="vp-screens">
          {block.screens.map((screen) => (
            <li key={screen.src}>
              <figure>
                <img src={withBasePath(screen.src)} alt={screen.alt} />
                <figcaption>{screen.label}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

function SystemBlock({ block }: { block: Extract<ProjectBlock, { type: 'system' }> }) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        <p className="vp-prose">{block.intro}</p>
      </div>
      <div className="vp-system">
        {block.columns.map((column) => (
          <article key={column.title}>
            <h3>{column.title}</h3>
            {column.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
      <dl className="vp-notes">
        {block.notes.map((note) => (
          <div key={note.label}>
            <dt>{note.label}</dt>
            <dd>{note.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function TrioBlock({ block }: { block: Extract<ProjectBlock, { type: 'trio' }> }) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <h2 id={`${block.id}-title`} className="vp-sr">
        {block.eyebrow}
      </h2>
      <ul className="vp-trio">
        {block.items.map((item) => (
          <li key={item.label}>
            <p className="vp-trio__label">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function AsideBlock({ block }: { block: Extract<ProjectBlock, { type: 'aside' }> }) {
  const media = (
    <figure className="vp-aside__media">
      <img
        src={withBasePath(block.media.src)}
        alt={block.media.alt}
        style={block.media.position ? { objectPosition: block.media.position } : undefined}
      />
      <figcaption>{block.media.caption}</figcaption>
    </figure>
  )

  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <div className={block.mediaSide === 'end' ? 'vp-aside vp-aside--end' : 'vp-aside'}>
        {block.mediaSide === 'end' ? null : media}
        <div>
          <Kicker>{block.eyebrow}</Kicker>
          <h2 id={`${block.id}-title`}>{block.title}</h2>
          <div className="vp-prose">
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        {block.mediaSide === 'end' ? media : null}
      </div>
    </section>
  )
}

function AnnotatedBlock({ block }: { block: Extract<ProjectBlock, { type: 'annotated' }> }) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <h2 id={`${block.id}-title`}>{block.title}</h2>
      <div className="vp-annotated">
        <figure>
          <img src={withBasePath(block.image)} alt={block.imageAlt} />
        </figure>
        <div>
          {block.paragraphs.map((paragraph) => (
            <p className="vp-prose" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <ol className="vp-notes-list">
            {block.notes.map((note, index) => (
              <li key={note.label}>
                <span>{index + 1}</span>
                <div>
                  <h3>{note.label}</h3>
                  <p>{note.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function PairBlock({ block }: { block: Extract<ProjectBlock, { type: 'pair' }> }) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        <div className="vp-prose">
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <ul className="vp-pair">
        {block.frames.map((frame) => (
          <li key={frame.src + frame.label}>
            <figure>
              <img
                className={frame.fit === 'cover' ? 'is-cover' : 'is-contain'}
                src={withBasePath(frame.src)}
                alt={frame.alt}
                style={frame.position ? { objectPosition: frame.position } : undefined}
              />
              <figcaption>
                <strong>{frame.label}</strong>
                {frame.note ? <span>{frame.note}</span> : null}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}

function DiagramBlock({ block }: { block: Extract<ProjectBlock, { type: 'diagram' }> }) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        <p className="vp-prose">{block.intro}</p>
      </div>
      <ol className="vp-pipeline">
        {block.steps.map((step, index) => (
          <li key={step.label}>
            <span>{index + 1}</span>
            <h3>{step.label}</h3>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
      <div className="vp-lanes">
        {block.lanes.map((lane) => (
          <article key={lane.title}>
            <h3>{lane.title}</h3>
            {lane.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  )
}

function TakeawaysBlock({ block }: { block: Extract<ProjectBlock, { type: 'takeaways' }> }) {
  if (!block.image) {
    return (
      <section className="vp-block vp-learned" id={block.id} aria-labelledby={`${block.id}-title`}>
        <Kicker>{block.eyebrow}</Kicker>
        <h2 id={`${block.id}-title`} className="vp-sr">
          {block.eyebrow}
        </h2>
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    )
  }

  return (
    <section className="vp-close" id={block.id} aria-labelledby={`${block.id}-title`}>
      <img src={withBasePath(block.image)} alt={block.imageAlt ?? ''} />
      <div className="vp-close__shade" />
      <div className="vp-close__copy">
        <Kicker>{block.eyebrow}</Kicker>
        <h2 id={`${block.id}-title`} className="vp-sr">
          {block.eyebrow}
        </h2>
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function DecisionsBlock({ block }: { block: Extract<ProjectBlock, { type: 'decisions' }> }) {
  return (
    <section className="vp-block vp-story" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        {block.intro ? <p className="vp-prose">{block.intro}</p> : null}
      </div>
      <div className="vp-decisions">
        {block.features.map((feature) => (
          <ProjectDecisionFeature key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  )
}

function ProcessBlock({ block }: { block: Extract<ProjectBlock, { type: 'process' }> }) {
  return (
    <section className="vp-block vp-story" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        <p className="vp-prose">{block.intro}</p>
      </div>
      <ProjectProcessStrip stages={block.stages} />
    </section>
  )
}

function ExperienceBlock({ block }: { block: Extract<ProjectBlock, { type: 'experience' }> }) {
  return (
    <section className="vp-block vp-story" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        {block.intro ? <p className="vp-prose">{block.intro}</p> : null}
      </div>
      <ProductMediaShowcase scenes={block.scenes} />
    </section>
  )
}

function ReflectionBlock({ block }: { block: Extract<ProjectBlock, { type: 'reflection' }> }) {
  return (
    <section className="vp-block vp-story vp-story--close" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <h2 id={`${block.id}-title`}>{block.title}</h2>
      <ProjectReflection statement={block.statement} detail={block.detail} />
    </section>
  )
}

function BlockView({ block }: { block: ProjectBlock }) {
  switch (block.type) {
    case 'split':
      return <SplitBlock block={block} />
    case 'aside':
      return <AsideBlock block={block} />
    case 'annotated':
      return <AnnotatedBlock block={block} />
    case 'pair':
      return <PairBlock block={block} />
    case 'diagram':
      return <DiagramBlock block={block} />
    case 'roles':
      return <RolesBlock block={block} />
    case 'steps':
      return <StepsBlock block={block} />
    case 'showcase':
      return <ShowcaseBlock block={block} />
    case 'system':
      return <SystemBlock block={block} />
    case 'trio':
      return <TrioBlock block={block} />
    case 'takeaways':
      return <TakeawaysBlock block={block} />
    case 'decisions':
      return <DecisionsBlock block={block} />
    case 'process':
      return <ProcessBlock block={block} />
    case 'experience':
      return <ExperienceBlock block={block} />
    case 'reflection':
      return <ReflectionBlock block={block} />
    case 'reconstruction':
      return <ReconstructionBlock block={block} />
    case 'graph':
      return <GraphBlock block={block} />
    case 'review':
      return <ReviewBlock block={block} />
    case 'pivot':
      return <PivotBlock block={block} />
    case 'route':
      return <RouteBlock block={block} />
    case 'plate':
      return <PlateBlock block={block} />
  }
}

export function ProjectPage({ project }: { project: ProjectDocument }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const style: ThemeStyle = {
    '--p-bg': project.theme.background,
    '--p-surface': project.theme.surface,
    '--p-ink': project.theme.ink,
    '--p-muted': project.theme.muted,
    '--p-accent': project.theme.accent,
    '--p-font': project.theme.font ?? 'var(--font-sans)',
    '--p-font-display': project.theme.fontDisplay ?? 'var(--font-display)',
  }

  return (
    <article className="vp" style={style} data-motion>
      <header className="vp-bar">
        <Link to="/" className="vp-bar__back">
          <span aria-hidden="true">←</span> All work
        </Link>
        <p className="vp-bar__name">Luke Libby</p>
        <button
          type="button"
          className="vp-bar__menu"
          aria-expanded={menuOpen}
          aria-controls="project-sections"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Sections'}
        </button>
        <nav id="project-sections" className={menuOpen ? 'vp-nav is-open' : 'vp-nav'} aria-label="On this page">
          <ul>
            {project.blocks.map((block) => (
              <li key={block.id}>
                <a href={`#${block.id}`} onClick={() => setMenuOpen(false)}>
                  {block.nav}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <EditorialProjectHero project={project} />

      <div className="vp-body">
        {project.blocks.map((block) => (
          <BlockView key={block.id} block={block} />
        ))}
      </div>

      <footer className="vp-end">
        {project.closing ? <p>{project.closing}</p> : null}
        <Link to="/">Back to all work</Link>
      </footer>
      <SubtleMotion root=".vp" />
      <ScrollToTopButton />
    </article>
  )
}
