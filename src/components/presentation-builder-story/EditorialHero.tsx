import type { PresentationBuilderStoryContent } from '../../data/productStories/presentationBuilderStory'
import { InsightCallout } from './InsightCallout'

type EditorialHeroProps = {
  hero: PresentationBuilderStoryContent['hero']
}

export function EditorialHero({ hero }: EditorialHeroProps) {
  return (
    <header className="psb-hero">
      <p className="psb-hero__eyebrow">{hero.eyebrow}</p>
      <h1 className="psb-hero__title">{hero.title}</h1>
      <p className="psb-hero__subtitle">{hero.subtitle}</p>
      <div className="psb-hero__summary">
        {hero.summary.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
      <InsightCallout quote={hero.insight} label="Thesis question" />
    </header>
  )
}
