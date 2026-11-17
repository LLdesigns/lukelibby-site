export function ProjectProcessStrip({
  stages,
}: {
  stages: { label: string; detail: string }[]
}) {
  return (
    <ol className="vp-process">
      {stages.map((stage) => (
        <li key={stage.label}>
          <h3>{stage.label}</h3>
          <p>{stage.detail}</p>
        </li>
      ))}
    </ol>
  )
}
