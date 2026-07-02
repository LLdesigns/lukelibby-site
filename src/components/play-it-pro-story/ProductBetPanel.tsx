import type { PlayItProStoryContent } from '../../data/productStories/playItProStory'

type ProductBetPanelProps = {
  content: PlayItProStoryContent['productBet']
}

export function ProductBetPanel({ content }: ProductBetPanelProps) {
  return (
    <div className="pip-bet">
      <p className="pip-bet__lead">{content.lead}</p>
      <div className="pip-bet__body">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
