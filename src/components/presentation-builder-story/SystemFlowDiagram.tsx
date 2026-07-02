import type { PresentationBuilderStoryContent } from '../../data/productStories/presentationBuilderStory'

type SystemFlowDiagramProps = {
  content: PresentationBuilderStoryContent['system']
}

export function SystemFlowDiagram({ content }: SystemFlowDiagramProps) {
  return (
    <div className="psb-system">
      <div className="psb-prose">
        <p>{content.intro}</p>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
      <figure className="psb-system__flow" aria-label="Structured slide workflow">
        <figcaption className="psb-system__flow-label">Workflow with JSON at the center</figcaption>
        <ol className="psb-system__flow-steps">
          {content.flow.map((step, index) => {
            const isPivot = step === content.pivotStep
            return (
              <li key={step} className="psb-system__flow-step">
                <span
                  className={`psb-system__flow-text${isPivot ? ' psb-system__flow-text--pivot' : ''}`}
                >
                  {step}
                </span>
                {index < content.flow.length - 1 && (
                  <span className="psb-system__flow-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </figure>
      <p className="psb-bridge">{content.closing}</p>
    </div>
  )
}
