import { Link, useParams } from 'react-router-dom'
import { CaseStudySection } from '../components/case-study/CaseStudySection'
import { ImpactList } from '../components/case-study/ImpactList'
import { CaseStudyVisual } from '../components/case-study/CaseStudyVisual'
import { LoopDiagram } from '../components/product-system/LoopDiagram'
import { ProductSystemHero } from '../components/product-system/ProductSystemHero'
import { ScrollReveal } from '../components/ScrollReveal'
import { getProductSystem } from '../data/productSystems'

function ProseBlock({ text }: { text: string }) {
  return <div className="cs-prose cs-prose--pre">{text}</div>
}

export function ProductSystemPage() {
  const { slug } = useParams<{ slug: string }>()
  const system = slug ? getProductSystem(slug) : undefined

  if (!system) {
    return (
      <main className="cs-page">
        <div className="container">
          <p className="cs-not-found">Product system not found.</p>
          <Link className="cs-back" to="/work#product-systems">
            ← Back to Product Systems
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="cs-page ps-page">
      <div className="container cs-page__inner">
        <ScrollReveal variant="drift-left" immediate>
          <Link className="cs-back" to="/work#product-systems">
            ← Back to Product Systems
          </Link>
        </ScrollReveal>

        <ScrollReveal variant="unfurl" immediate delay={100}>
          <ProductSystemHero system={system} />
        </ScrollReveal>

        <ScrollReveal variant="rise" immediate delay={80}>
          <div className="cs-hero-visual">
            <CaseStudyVisual
              placeholderLabel={system.heroVisualLabel}
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="rise">
          <CaseStudySection title="Overview">
            <ProseBlock text={system.overview} />
          </CaseStudySection>
        </ScrollReveal>

        <ScrollReveal variant="rise" delay={80}>
          <CaseStudySection title="My Role">
            <ProseBlock text={system.myRole} />
            <ScrollReveal variant="cascade">
              <ImpactList items={system.myRoleFocus} cascade />
            </ScrollReveal>
          </CaseStudySection>
        </ScrollReveal>

        <ScrollReveal variant="unfurl">
          <CaseStudySection title="Core Idea">
            <ProseBlock text={system.coreIdeaIntro} />
            <LoopDiagram steps={system.productLoop} />
            <p className="cs-prose ps-core-closing">{system.coreIdeaClosing}</p>
          </CaseStudySection>
        </ScrollReveal>

        <ScrollReveal variant="unfurl" delay={100}>
          <section className="cs-field-notes paper-card" aria-labelledby="features-heading">
            <h2 id="features-heading" className="cs-section-label">
              Key Features
            </h2>
            <ol className="cs-field-notes__list">
              {system.features.map((feature, index) => (
                <li key={feature.title} className="cs-field-note">
                  <span className="cs-field-note__step">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="cs-field-note__body">
                    <h3 className="cs-field-note__title">{feature.title}</h3>
                    <p className="cs-field-note__text">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </ScrollReveal>

        <ScrollReveal variant="rise">
          <CaseStudySection title="Product System">
            <p className="cs-prose">
              The first-pass data model centers on a few core objects:
            </p>
            <ScrollReveal variant="cascade">
              <ImpactList items={system.dataObjects} cascade />
            </ScrollReveal>
            <p className="cs-prose ps-system-note">
              Enough structure to ship the alpha — not a schema built for features
              that do not exist yet.
            </p>
            <div className="ps-relations paper-card">
              <h3 className="ps-structure__heading">Relationship Model</h3>
              <ul className="ps-relations__list">
                {system.relationships.map((rel) => (
                  <li key={rel}>
                    <code>{rel}</code>
                  </li>
                ))}
              </ul>
            </div>
          </CaseStudySection>
        </ScrollReveal>

        <ScrollReveal variant="rise" delay={80}>
          <CaseStudySection title="MVP Scope">
            <p className="cs-prose">For an alpha version, I would focus on:</p>
            <ScrollReveal variant="cascade">
              <ImpactList items={system.mvpScope} cascade />
            </ScrollReveal>
            <p className="cs-prose ps-core-closing">{system.deferredFeatures}</p>
          </CaseStudySection>
        </ScrollReveal>

        <ScrollReveal variant="drift-right">
          <nav className="cs-next" aria-label="Product system navigation">
            <Link className="cs-next__link" to="/work#product-systems">
              ← All Product Systems
            </Link>
          </nav>
        </ScrollReveal>
      </div>
    </main>
  )
}
