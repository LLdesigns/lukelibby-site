import { CaseStudyVisual } from '../case-study/CaseStudyVisual'
import type { PresentationBuilderStoryContent } from '../../data/productStories/presentationBuilderStory'

type ArtifactStoryGridProps = {
  content: PresentationBuilderStoryContent['artifacts']
}

export function ArtifactStoryGrid({ content }: ArtifactStoryGridProps) {
  return (
    <>
      <p className="psb-section__lede">{content.intro}</p>
      <div className="psb-artifacts">
        {content.items.map((artifact, index) => (
          <article
            key={artifact.title}
            className={`psb-artifact${index % 2 === 1 ? ' psb-artifact--reverse' : ''}`}
          >
            <div className="psb-artifact__copy">
              {artifact.badge ? (
                <span className="psb-artifact__badge">{artifact.badge}</span>
              ) : null}
              <h3 className="psb-artifact__title">{artifact.title}</h3>
              <p className="psb-artifact__caption">{artifact.caption}</p>
            </div>
            <div className="psb-artifact__visual">
              <CaseStudyVisual
                src={artifact.imageSrc}
                alt={artifact.imageAlt}
                placeholderLabel={artifact.title}
                priority={artifact.featured}
                width={1024}
                height={576}
              />
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
