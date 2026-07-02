import type { PresentationBuilderStoryContent } from '../../data/productStories/presentationBuilderStory'
import { InsightCallout } from './InsightCallout'

type ProductBetPanelProps = {
  content: PresentationBuilderStoryContent['productBet']
}

export function ProductBetPanel({ content }: ProductBetPanelProps) {
  return (
    <div className="psb-bet">
      <p className="psb-bet__lead">{content.lead}</p>
      <div className="psb-bet__body">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
      <InsightCallout quote={content.quote} label="The shift" />
    </div>
  )
}
