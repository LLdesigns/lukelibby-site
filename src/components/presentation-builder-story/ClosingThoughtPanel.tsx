type ClosingThoughtPanelProps = {
  sectionId?: string
  paragraphs: string[]
}

export function ClosingThoughtPanel({ sectionId, paragraphs }: ClosingThoughtPanelProps) {
  return (
    <section
      id={sectionId}
      className={`psb-closing${sectionId ? ' story-page__section' : ''}`}
      aria-label="Closing thought"
    >
      <div className="psb-closing__inner">
        {paragraphs.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 48)}
            className={index === 0 ? 'psb-closing__lead' : undefined}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
