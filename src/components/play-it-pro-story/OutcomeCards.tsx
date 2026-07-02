import type { PlayItProStoryContent } from '../../data/productStories/playItProStory'

type OutcomeCardsProps = {
  content: PlayItProStoryContent['whatChanged']
}

export function OutcomeCards({ content }: OutcomeCardsProps) {
  return (
    <>
      <div className="pip-prose">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      <div className="pip-outcomes">
        {content.outcomes.map((outcome) => (
          <article key={outcome.title} className="pip-outcome">
            <h3 className="pip-outcome__title">{outcome.title}</h3>
            <p className="pip-outcome__body">{outcome.body}</p>
          </article>
        ))}
      </div>
    </>
  )
}
