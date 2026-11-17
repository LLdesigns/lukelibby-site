import type { ProjectDecision } from '../../../data/v2/projects/types'
import { AnnotatedProductScreenshot } from './AnnotatedProductScreenshot'

export function ProjectDecisionFeature({ feature }: { feature: ProjectDecision }) {
  const copy = (
    <div className="vp-decision__copy">
      <h3>{feature.title}</h3>
      <p className="vp-decision__problem">{feature.problem}</p>
      <p>{feature.decision}</p>
    </div>
  )
  const media = (
    <AnnotatedProductScreenshot
      src={feature.image}
      alt={feature.imageAlt}
      callouts={feature.callouts}
      side={feature.mediaSide}
    />
  )
  const end = feature.mediaSide === 'end'

  return (
    <article className={end ? 'vp-decision vp-decision--end' : 'vp-decision'}>
      {end ? copy : media}
      {end ? media : copy}
    </article>
  )
}
