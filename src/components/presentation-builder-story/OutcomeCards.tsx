import type { PresentationBuilderStoryContent } from '../../data/productStories/presentationBuilderStory'

type OutcomeCardsProps = {
  content: PresentationBuilderStoryContent['whatChanged']
}

export function OutcomeCards({ content }: OutcomeCardsProps) {
  return (
    <>
      <p className="psb-section__lede">{content.intro}</p>
      <div className="psb-outcomes">
        {content.outcomes.map((outcome) => (
          <article key={outcome.title} className="psb-outcome">
            <h3 className="psb-outcome__title">{outcome.title}</h3>
            <p className="psb-outcome__body">{outcome.body}</p>
          </article>
        ))}
      </div>
      <p className="psb-bridge">{content.closing}</p>
    </>
  )
}
