import type { PresentationBuilderStoryContent } from '../../data/productStories/presentationBuilderStory'

type ProblemContrastCardsProps = {
  content: PresentationBuilderStoryContent['whatINoticed']
}

export function ProblemContrastCards({ content }: ProblemContrastCardsProps) {
  return (
    <>
      <div className="psb-prose">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
      <div className="psb-contrast">
        {content.problems.map((problem) => (
          <article key={problem.title} className="psb-contrast__card">
            <h3 className="psb-contrast__card-title">{problem.title}</h3>
            <p className="psb-contrast__card-body">{problem.body}</p>
          </article>
        ))}
      </div>
      <p className="psb-bridge">{content.bridge}</p>
    </>
  )
}
