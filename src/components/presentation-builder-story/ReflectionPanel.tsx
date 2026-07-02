import { ThemeBlock } from '../ThemeBlock'

type ReflectionPanelProps = {
  sectionId?: string
  paragraphs: string[]
}

export function ReflectionPanel({ sectionId, paragraphs }: ReflectionPanelProps) {
  return (
    <section
      id={sectionId}
      className={`psb-reflection${sectionId ? ' story-page__section' : ''}`}
      aria-label="What I learned"
    >
      <ThemeBlock>
        <div className="psb-reflection__inner">
          <span className="psb-reflection__label">What I learned</span>
          {paragraphs.map((paragraph, index) => (
            <p key={paragraph.slice(0, 48)} className={index === 0 ? 'psb-reflection__lead' : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </ThemeBlock>
    </section>
  )
}
