import type { StoryFact } from '../../data/productStories/presentationBuilderStory'

type QuickFactsGridProps = {
  facts: StoryFact[]
}

export function QuickFactsGrid({ facts }: QuickFactsGridProps) {
  return (
    <dl className="psb-facts">
      {facts.map((fact) => (
        <div key={fact.label} className="psb-facts__item">
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}
