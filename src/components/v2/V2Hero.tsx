import { HoneycombGrid } from './HoneycombGrid'
import { v2WorkHoneycomb } from '../../data/v2/honeycomb'

export function V2Hero() {
  return (
    <section className="v2-hero" id="work" aria-label="Home">
      <HoneycombGrid items={v2WorkHoneycomb} />
    </section>
  )
}
