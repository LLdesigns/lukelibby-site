import type { PlayItProStoryContent } from '../../data/productStories/playItProStory'

type SplitProblemCardsProps = {
  content: PlayItProStoryContent['whatINoticed']
}

export function SplitProblemCards({ content }: SplitProblemCardsProps) {
  return (
    <>
      <div className="pip-prose">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      <div className="pip-split">
        {content.problems.map((problem) => (
          <article key={problem.title} className="pip-split__card">
            <h3 className="pip-split__card-title">{problem.title}</h3>
            <p className="pip-split__card-body">{problem.body}</p>
          </article>
        ))}
      </div>
      <p className="pip-split__bridge">{content.bridge}</p>
    </>
  )
}
