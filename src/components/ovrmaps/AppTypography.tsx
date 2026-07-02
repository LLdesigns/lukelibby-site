import type { CSSProperties } from 'react'
import { typeInContext } from './tokens'

export function AppTypography() {
  return (
    <div className="ovr-app-type">
      {typeInContext.map((step) => (
        <div key={step.label} className="ovr-app-type__row">
          <span className="ovr-app-type__label">{step.label}</span>
          <p
            style={
              {
                fontSize: step.size,
                fontWeight: step.weight,
              } as CSSProperties
            }
          >
            {step.sample}
          </p>
        </div>
      ))}
    </div>
  )
}
