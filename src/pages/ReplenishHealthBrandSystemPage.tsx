import { Link } from 'react-router-dom'
import { DocumentHead } from '../components/DocumentHead'
import { ActivityFeed } from '../components/replenish-health/ActivityFeed'
import { BrandPillars } from '../components/replenish-health/BrandPillars'
import { ColorTokens } from '../components/replenish-health/ColorTokens'
import { ControlsShowcase } from '../components/replenish-health/ControlsShowcase'
import {
  BarChartCard,
  CategoryStrip,
  MetricCard,
} from '../components/replenish-health/DataWidgets'
import { DailySummary } from '../components/replenish-health/DailySummary'
import { IconSet } from '../components/replenish-health/IconSet'
import { NavPattern } from '../components/replenish-health/NavPattern'
import { ReplenishSpecimen } from '../components/replenish-health/ReplenishSpecimen'
import { StatusPanel } from '../components/replenish-health/StatusPanel'
import { TypographyScale } from '../components/replenish-health/TypographyScale'
import { BrandSystemHero } from '../components/brand-system/BrandSystemHero'
import { BrandSystemPageLayout } from '../components/brand-system/BrandSystemPageLayout'
import { BrandSystemSection } from '../components/brand-system/BrandSystemSection'
import { ScrollReveal } from '../components/ScrollReveal'
import { getBrandSystem } from '../data/brandSystems'
import {
  replenishHealthNavItems,
  replenishHealthPrinciples,
} from '../data/brandSystems/replenishHealth'
import { creativeWorkJsonLd } from '../utils/structuredData'

export function ReplenishHealthBrandSystemPage() {
  const system = getBrandSystem('replenish-health')
  if (!system) return null

  return (
    <main className="bs-page bs-page--replenish">
      <DocumentHead
        title={system.title}
        description={system.description}
        pathname="/brand-systems/replenish-health"
        imagePath="/images/replenish-health/design-system-overview.png"
        jsonLd={creativeWorkJsonLd({
          name: system.title,
          description: system.description,
          path: '/brand-systems/replenish-health',
          imagePath: '/images/replenish-health/design-system-overview.png',
          keywords: system.tags,
        })}
      />
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
        <BrandSystemPageLayout navItems={replenishHealthNavItems}>
          <BrandSystemSection
            id="bs-overview"
            title="Overview"
            intro="Interactive design system specimens for Replenish Health — hover, click, and toggle light/dark on each stage."
          >
            <div className="bs-overview-grid">              <div className="bs-principles">
                <h3 className="bs-principles__title">Brand principles</h3>
                <ul className="bs-principles__list">
                  {replenishHealthPrinciples.brand.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bs-principles">
                <h3 className="bs-principles__title">Interface principles</h3>
                <ul className="bs-principles__list">
                  {replenishHealthPrinciples.interface.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-brand"
            title="Brand Identity"
            intro="Value pillars with distinct accent headers — hover for emphasis."
          >
            <ReplenishSpecimen
              label="Brand pillar cards"
              note="Six voice anchors"
            >
              <BrandPillars />
            </ReplenishSpecimen>
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-foundations"
            title="Foundations"
            intro="Core tokens and typographic rhythm. Click swatches to copy hex values."
          >
            <ReplenishSpecimen
              label="Color tokens"
              note="Primary, accent, and status palette"
              variant="wide"
            >
              <ColorTokens />
            </ReplenishSpecimen>
            <div className="rh-specimen-grid rh-specimen-grid--2">
              <ReplenishSpecimen label="Typography scale">
                <TypographyScale />
              </ReplenishSpecimen>
              <ReplenishSpecimen label="Iconography" defaultTheme="light">
                <IconSet />
              </ReplenishSpecimen>
            </div>
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-components"
            title="Components"
            intro="Buttons, inputs, charts, and status surfaces with hover and focus states."
          >
            <div className="rh-specimen-grid rh-specimen-grid--2">
              <ReplenishSpecimen label="Inputs & controls">
                <ControlsShowcase />
              </ReplenishSpecimen>
              <ReplenishSpecimen label="Feedback & status">
                <StatusPanel />
              </ReplenishSpecimen>
            </div>
            <div className="rh-specimen-grid rh-specimen-grid--3">
              <ReplenishSpecimen label="Data display · chart">
                <BarChartCard />
              </ReplenishSpecimen>
              <ReplenishSpecimen label="Data display · metric">
                <MetricCard />
              </ReplenishSpecimen>
              <ReplenishSpecimen label="Category strip">
                <CategoryStrip />
              </ReplenishSpecimen>
            </div>
            <ReplenishSpecimen
              label="Navigation"
              note="Sidebar row pattern"
              variant="wide"
            >
              <NavPattern />
            </ReplenishSpecimen>
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-patterns"
            title="UI Patterns"
            intro="Composed dashboard layouts built from the component kit."
          >
            <div className="rh-specimen-grid rh-specimen-grid--3">
              <ReplenishSpecimen label="Activity feed">
                <ActivityFeed />
              </ReplenishSpecimen>
              <ReplenishSpecimen label="Daily summary">
                <DailySummary />
              </ReplenishSpecimen>
              <ReplenishSpecimen label="Status panel">
                <StatusPanel />
              </ReplenishSpecimen>
            </div>
          </BrandSystemSection>
        </BrandSystemPageLayout>
      </div>
    </main>
  )
}
