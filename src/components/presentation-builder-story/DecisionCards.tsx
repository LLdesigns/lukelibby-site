import type { ProductDecision } from '../../data/productStories/presentationBuilderStory'

type DecisionCardsProps = {
  decisions: ProductDecision[]
}

export function DecisionCards({ decisions }: DecisionCardsProps) {
  return (
    <div className="psb-decisions">
      {decisions.map((decision, index) => (
        <article
          key={decision.title}
          className={`psb-decision${index === decisions.length - 1 && decisions.length % 2 !== 0 ? ' psb-decision--wide' : ''}`}
        >
          <span className="psb-decision__label">{decision.label}</span>
          <h3 className="psb-decision__title">{decision.title}</h3>
          <p className="psb-decision__body">{decision.body}</p>
        </article>
      ))}
    </div>
  )
}
