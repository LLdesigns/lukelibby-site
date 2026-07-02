import { CaseStudyVisual } from '../case-study/CaseStudyVisual'
import type { PlayItProStoryContent } from '../../data/productStories/playItProStory'
import { InsightCallout } from './InsightCallout'

type EditorialHeroProps = {
  hero: PlayItProStoryContent['hero']
}

export function EditorialHero({ hero }: EditorialHeroProps) {
  return (
    <header className="pip-hero">
      <div className="pip-hero__copy">
        <p className="pip-hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="pip-hero__title">{hero.title}</h1>
        <p className="pip-hero__subtitle">{hero.subtitle}</p>
        <p className="pip-hero__summary">{hero.summary}</p>
        <dl className="pip-hero__facts">
          {hero.facts.map((fact) => (
            <div key={fact.label} className="pip-hero__fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="pip-hero__visual">
        <InsightCallout quote={hero.insight} />
        <CaseStudyVisual
          src={hero.imageSrc}
          alt={hero.imageAlt}
          placeholderLabel="Play It Pro lesson builder"
          priority
          width={1400}
          height={900}
        />
      </div>
    </header>
  )
}
