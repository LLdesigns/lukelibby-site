type PrivacyNoteProps = {
  text: string
}

export function PrivacyNote({ text }: PrivacyNoteProps) {
  return (
    <aside className="cs-privacy" role="note">
      <p className="cs-privacy__label">Privacy note</p>
      <p className="cs-privacy__text">{text}</p>
    </aside>
  )
}
