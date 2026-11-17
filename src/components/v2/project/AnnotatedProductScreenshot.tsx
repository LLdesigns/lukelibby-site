import { withBasePath } from '../../../utils/basePath'

export function AnnotatedProductScreenshot({
  src,
  alt,
  callouts,
  side = 'start',
}: {
  src: string
  alt: string
  callouts: { label: string; y: number }[]
  side?: 'start' | 'end'
}) {
  return (
    <figure className={side === 'end' ? 'vp-annotate vp-annotate--before' : 'vp-annotate'}>
      <img src={withBasePath(src)} alt={alt} />
      <ol>
        {callouts.map((callout) => (
          <li key={callout.label} style={{ top: `${callout.y}%` }}>
            {callout.label}
          </li>
        ))}
      </ol>
    </figure>
  )
}
