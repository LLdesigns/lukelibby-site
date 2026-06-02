type ReflectionBlockProps = {
  text: string
}

export function ReflectionBlock({ text }: ReflectionBlockProps) {
  const paragraphs = text.split('\n\n').filter(Boolean)
  return (
    <div className="cs-prose">
      {paragraphs.map((para) => (
        <p key={para.slice(0, 40)}>{para}</p>
      ))}
    </div>
  )
}
