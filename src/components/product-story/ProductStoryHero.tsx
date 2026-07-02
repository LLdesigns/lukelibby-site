import type { ProductStoryDetail } from '../../data/productStories'
import { Button } from '../Button'
import { ThemeBlock } from '../ThemeBlock'
import { MetaChips } from './MetaChips'
import { PrivacyNote } from '../case-study/PrivacyNote'

type ProductStoryHeroProps = {
  story: ProductStoryDetail
}

export function ProductStoryHero({ story }: ProductStoryHeroProps) {
  return (
    <header className="cs-hero">
      <ThemeBlock>
      <p className="cs-hero__eyebrow">{story.eyebrow}</p>
      <h1 className="cs-hero__title">{story.title}</h1>
      <p className="cs-hero__subtitle">{story.subtitle}</p>
      <MetaChips chips={story.metaChips} />
      {story.liveUrl ? (
        <div className="cs-hero__actions">
          <Button
            variant="brass"
            href={story.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {story.liveUrlLabel ?? 'Visit live site'} ↗
          </Button>
        </div>
      ) : null}
      {story.privacyNote && <PrivacyNote text={story.privacyNote} />}
      </ThemeBlock>
    </header>
  )
}
