export function ProjectReflection({ statement, detail }: { statement: string; detail: string }) {
  return (
    <div className="vp-reflect">
      <p className="vp-reflect__statement">{statement}</p>
      <p className="vp-reflect__detail">{detail}</p>
    </div>
  )
}
