import { Link } from 'react-router-dom'
import { FeaturedProjectCard } from '../components/work/FeaturedProjectCard'
import { LibraryWorkCard } from '../components/work/LibraryWorkCard'
import { ProjectSystemCard } from '../components/work/ProjectSystemCard'
import { SelectedWorkCard } from '../components/work/SelectedWorkCard'
import { WorkSection } from '../components/work/WorkSection'
import { ScrollReveal } from '../components/ScrollReveal'
import { Button } from '../components/Button'
import {
  caseStudies,
  productSystems,
  sectionIntros,
  selectedWork,
  workLibrary,
  workPageIntro,
  workPositioningLine,
} from '../data/work'

export function WorkPage() {
  return (
    <main className="work-page">
      <section className="section section--hero work-page__hero" aria-labelledby="work-page-heading">
        <div className="container">
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
        </div>
      </section>

      <WorkSection
        id="case-studies"
        title="Case Studies"
        intro={sectionIntros.caseStudies}
        variant="paper"
      >
        <div className="work-grid work-grid--case-studies">
          {caseStudies.map((item, index) => (
            <ScrollReveal
              key={item.id}
              variant="paper-drop"
              delay={index * 100}
              rotate={index % 2 === 0 ? -1.5 : 1.5}
            >
              <FeaturedProjectCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </WorkSection>

      <WorkSection
        id="product-systems"
        title="Product Systems"
        intro={sectionIntros.productSystems}
        variant="dark"
      >
        <div className="work-grid work-grid--systems">
          {productSystems.map((item, index) => (
            <ScrollReveal key={item.id} variant="rise" delay={index * 80}>
              <ProjectSystemCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </WorkSection>

      <WorkSection
        id="selected-work"
        title="Selected Work"
        intro={sectionIntros.selectedWork}
        variant="paper"
      >
        <div className="work-grid work-grid--selected">
          {selectedWork.map((item, index) => (
            <ScrollReveal
              key={item.id}
              variant="paper-drop"
              delay={index * 90}
              rotate={(index % 2 === 0 ? -1 : 1) * 1.25}
            >
              <SelectedWorkCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </WorkSection>

      <WorkSection
        id="work-library"
        title="Work Library"
        intro={sectionIntros.workLibrary}
        variant="dark"
      >
        <div className="work-grid work-grid--library">
          {workLibrary.map((item, index) => (
            <ScrollReveal key={item.id} variant="rise" delay={index * 50}>
              <LibraryWorkCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </WorkSection>

      <section className="section work-page__footer-cta">
        <div className="container">
          <ScrollReveal variant="rise">
            <Button variant="secondary" href="/resume">
              View Resume
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
