import { ThemeBlock } from '../ThemeBlock'

type ReflectionPanelProps = {
  sectionId?: string
  paragraphs: string[]
}

export function ReflectionPanel({ sectionId, paragraphs }: ReflectionPanelProps) {
  return (
    <section
      id={sectionId}
      className={`pip-reflection${sectionId ? ' story-page__section' : ''}`}
      aria-label="What I learned"
    >
      <ThemeBlock>
        <div className="pip-reflection__inner">
          <span className="pip-reflection__label">What I learned</span>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </ThemeBlock>
    </section>
  )
}
