type AnonymizedStoryNoteProps = {
  title: string
  paragraphs: string[]
}

export function AnonymizedStoryNote({ title, paragraphs }: AnonymizedStoryNoteProps) {
  return (
    <aside className="psb-note" aria-label={title}>
      <h2 className="psb-note__title">{title}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="psb-note__text">
          {paragraph}
        </p>
      ))}
    </aside>
  )
}
