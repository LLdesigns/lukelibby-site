import { Link, useParams } from 'react-router-dom'
import { BrandSystemCanvas } from '../components/brand-system/BrandSystemCanvas'
import { BrandSystemHero } from '../components/brand-system/BrandSystemHero'
import { BrandSystemPageLayout } from '../components/brand-system/BrandSystemPageLayout'
import { BrandSystemSection } from '../components/brand-system/BrandSystemSection'
import { BrandSystemSlotGrid } from '../components/brand-system/BrandSystemSlotGrid'
import { ScrollReveal } from '../components/ScrollReveal'
import { brandSystemNavItems, getBrandSystem } from '../data/brandSystems'

export function BrandSystemPage() {
  const { slug } = useParams<{ slug: string }>()
  const system = slug ? getBrandSystem(slug) : undefined

  if (!system) {
    return (
      <main className="bs-page">
        <div className="container">
          <p className="bs-not-found">Brand & interface system not found.</p>
          <Link className="cs-back" to="/work#brand-systems">
            ← Back to Brand & Interface Systems
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bs-page">
      <div className="container bs-page__intro">
        <ScrollReveal variant="drift-left" immediate>
          <Link className="cs-back" to="/work#brand-systems">
            ← Back to Brand & Interface Systems
          </Link>
        </ScrollReveal>

        <ScrollReveal variant="unfurl" immediate delay={80}>
          <BrandSystemHero system={system} />
        </ScrollReveal>
      </div>

      <div className="container bs-page__body">
        <BrandSystemPageLayout navItems={brandSystemNavItems}>
          <BrandSystemSection
            id="bs-overview"
            title="Overview"
            intro="System intent, scope, and how the brand interfaces with product surfaces."
          >
            <BrandSystemCanvas
              label="System summary"
              note="Narrative, goals, and usage context"
              variant="wide"
            />
            <div className="bs-overview-grid">
              <BrandSystemCanvas label="Brand principles" />
              <BrandSystemCanvas label="Interface principles" />
            </div>
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-foundations"
            title="Foundations"
            intro="Core tokens and typographic rhythm that everything else builds on."
          >
            <BrandSystemSlotGrid
              slots={[
                { id: 'color', label: 'Color tokens' },
                { id: 'type', label: 'Typography scale' },
                { id: 'space', label: 'Spacing & grid' },
                { id: 'radius', label: 'Radius & elevation' },
                { id: 'iconography', label: 'Iconography', span: 'wide' },
              ]}
            />
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-components"
            title="Components"
            intro="Reusable UI pieces with states, variants, and interaction notes."
          >
            <BrandSystemSlotGrid
              slots={[
                { id: 'inputs', label: 'Inputs & controls' },
                { id: 'navigation', label: 'Navigation' },
                { id: 'feedback', label: 'Feedback & status' },
                { id: 'data-display', label: 'Data display' },
                { id: 'maps', label: 'Map & location UI', span: 'wide' },
                { id: 'media', label: 'Media & content blocks' },
              ]}
            />
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-patterns"
            title="Patterns"
            intro="Composed layouts, flows, and screen structures built from components."
          >
            <BrandSystemCanvas
              label="Layout patterns"
              note="Page shells, panels, and responsive breakpoints"
              variant="wide"
            />
            <div className="bs-overview-grid">
              <BrandSystemCanvas label="Flow patterns" />
              <BrandSystemCanvas label="Empty & loading states" />
            </div>
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-themes"
            title="Theme Variants"
            intro="Alternate palettes and atmospheres that can diverge from the portfolio theme."
          >
            <div className="bs-theme-row">
              <BrandSystemCanvas
                label="Light theme island"
                note="Self-contained preview surface"
                variant="island"
              />
              <BrandSystemCanvas
                label="Dark theme island"
                note="Self-contained preview surface"
                variant="island"
              />
              <BrandSystemCanvas
                label="Campaign / seasonal variant"
                note="Optional promotional skin"
                variant="island"
              />
            </div>
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-specimens"
            title="Live Specimens"
            intro="Interactive demos, motion samples, and prototype widgets hosted inside the system canvas."
          >
            <BrandSystemCanvas
              label="Primary interactive specimen"
              note="Full-width demo stage for live components"
              variant="wide"
            />
            <BrandSystemSlotGrid
              slots={[
                { id: 'widget-a', label: 'Widget specimen A', span: 'tall' },
                { id: 'widget-b', label: 'Widget specimen B', span: 'tall' },
                { id: 'motion', label: 'Motion & micro-interaction', span: 'wide' },
              ]}
            />
          </BrandSystemSection>
        </BrandSystemPageLayout>
      </div>
    </main>
  )
}
