import { V2About } from '../../components/v2/V2About'
import { V2Footer } from '../../components/v2/V2Footer'
import { V2Hero } from '../../components/v2/V2Hero'
import { V2Resume } from '../../components/v2/V2Resume'
import { V2Shell } from '../../components/v2/V2Shell'
import { siteMeta } from '../../data/site'

export function V2LandingPage() {
  return (
    <V2Shell title={siteMeta.title} description={siteMeta.description} pathname="/">
      <V2Hero />
      <V2Resume />
      <V2About />
      <V2Footer />
    </V2Shell>
  )
}
