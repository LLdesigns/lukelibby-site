import { typeScale } from './tokens'

export function TypographyScale() {
  return (
    <div className="rh-type-panel">
      {typeScale.map((step) => (
        <div key={step.name} className="rh-type-row">
          <span className="rh-type-row__name">{step.name}</span>
          <p className={step.className}>{step.sample}</p>
        </div>
      ))}
    </div>
  )
}
