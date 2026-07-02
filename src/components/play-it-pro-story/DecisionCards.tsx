import type { ProductDecision } from '../../data/productStories/playItProStory'

type DecisionCardsProps = {
  decisions: ProductDecision[]
}

export function DecisionCards({ decisions }: DecisionCardsProps) {
  return (
    <div className="pip-decisions">
      {decisions.map((decision, index) => (
        <article
          key={decision.title}
          className={`pip-decision${index === decisions.length - 1 && decisions.length % 2 !== 0 ? ' pip-decision--wide' : ''}`}
        >
          <span className="pip-decision__label">{decision.label}</span>
          <h3 className="pip-decision__title">{decision.title}</h3>
          <p className="pip-decision__body">{decision.body}</p>
        </article>
      ))}
    </div>
  )
}
