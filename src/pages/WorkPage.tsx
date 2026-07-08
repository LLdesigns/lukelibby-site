import { Link } from 'react-router-dom'
import { ThemeBlock } from '../components/ThemeBlock'
import { FeaturedProjectCard } from '../components/work/FeaturedProjectCard'
import { ProjectSystemCard } from '../components/work/ProjectSystemCard'
import { WorkSection } from '../components/work/WorkSection'
import { ScrollReveal } from '../components/ScrollReveal'
import { Button } from '../components/Button'
import { DocumentHead } from '../components/DocumentHead'
import {
  productStories,
  productSystems,
  sectionIntros,
  workPageIntro,
  workPositioningLine,
} from '../data/work'
import { webPageJsonLd } from '../utils/structuredData'

export function WorkPage() {
  return (
    <main className="work-page">
      <DocumentHead
        title="Work"
        description={workPageIntro}
        pathname="/work"
        jsonLd={webPageJsonLd({
          name: 'Work',
          description: workPageIntro,
          path: '/work',
        })}
      />
      <section
        className="section section--hero work-page__hero"
        aria-labelledby="work-page-heading"
      >
        <ThemeBlock className="container">
          <ScrollReveal variant="drift-left" immediate>
            <Link className="work-page__back" to="/">
              ← Home
            </Link>
          </ScrollReveal>
          <ScrollReveal variant="hero-sweep" immediate delay={80}>
            <h1 id="work-page-heading" className="work-page__title">
              Work
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="blur-rise" immediate delay={160}>
            <p className="work-page__positioning">{workPositioningLine}</p>
          </ScrollReveal>
          <ScrollReveal variant="blur-rise" immediate delay={240}>
            <p className="work-page__intro">{workPageIntro}</p>
          </ScrollReveal>
        </ThemeBlock>
      </section>

      <WorkSection
        id="product-stories"
        title="Product Stories"
        intro={sectionIntros.productStories}
        variant="paper"
      >
        <div className="work-grid work-grid--stories">
          {productStories.map((item, index) => (
            <FeaturedProjectCard
              key={item.id}
              item={item}
              revealDelay={index * 100}
            />
          ))}
        </div>
      </WorkSection>

      <WorkSection
        id="brand-systems"
        title="Brand & Interface Systems"
        intro={sectionIntros.productSystems}
        variant="dark"
      >
        <div className="work-grid work-grid--systems">
          {productSystems.map((item, index) => (
            <ProjectSystemCard
              key={item.id}
              item={item}
              revealDelay={index * 80}
            />
          ))}
        </div>
      </WorkSection>

      <section className="section work-page__footer-cta">
        <ThemeBlock className="container">
          <ScrollReveal variant="rise">
            <Button variant="secondary" href="/resume">
              View Resume
            </Button>
          </ScrollReveal>
        </ThemeBlock>
      </section>
    </main>
  )
}
