import type { PlayItProStoryContent } from '../../data/productStories/playItProStory'

type SystemEcosystemProps = {
  content: PlayItProStoryContent['system']
}

export function SystemEcosystem({ content }: SystemEcosystemProps) {
  return (
    <div className="pip-system">
      <p className="pip-section__lede">{content.intro}</p>
      <figure className="pip-system__flow" aria-label="How the platform connects">
        <figcaption className="pip-system__flow-label">Platform flow</figcaption>
        <ol className="pip-system__flow-steps">
          {content.flow.map((step, index) => (
            <li key={step} className="pip-system__flow-step">
              <span className="pip-system__flow-text">{step}</span>
              {index < content.flow.length - 1 && (
                <span className="pip-system__flow-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </figure>
      <div className="pip-system__pillars">
        {content.pillars.map((pillar, index) => (
          <article key={pillar.title} className="pip-system__pillar">
            <span className="pip-system__pillar-num">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="pip-system__pillar-title">{pillar.title}</h3>
            <p className="pip-system__pillar-body">{pillar.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
