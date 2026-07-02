import { CaseStudyVisual } from '../case-study/CaseStudyVisual'
import type { StoryScreenshot } from '../../data/productStories/playItProStory'

type ScreenshotStoryGridProps = {
  screenshots: StoryScreenshot[]
}

function screenClassName(shot: StoryScreenshot, index: number) {
  const classes = ['pip-screen']
  if (index % 2 === 1) classes.push('pip-screen--reverse')
  if (shot.layout === 'portrait') classes.push('pip-screen--portrait')
  if (shot.body?.length || shot.highlights?.length) classes.push('pip-screen--expanded')
  return classes.join(' ')
}

export function ScreenshotStoryGrid({ screenshots }: ScreenshotStoryGridProps) {
  return (
    <div className="pip-screens">
      {screenshots.map((shot, index) => (
        <article key={shot.title} className={screenClassName(shot, index)}>
          <div className="pip-screen__copy">
            <h3 className="pip-screen__title">{shot.title}</h3>
            <p className="pip-screen__caption">{shot.caption}</p>
            {shot.body?.length ? (
              <div className="pip-screen__body">
                {shot.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {shot.highlights?.length ? (
              <ul className="pip-screen__highlights">
                {shot.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="pip-screen__visual">
            <CaseStudyVisual
              src={shot.imageSrc}
              alt={shot.imageAlt}
              placeholderLabel={shot.title}
              priority={shot.featured}
              width={1400}
              height={900}
            />
          </div>
        </article>
      ))}
    </div>
  )
}
