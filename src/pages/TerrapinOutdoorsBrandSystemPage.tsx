import { Link } from 'react-router-dom'
import { BrandSystemCanvas } from '../components/brand-system/BrandSystemCanvas'
import { BrandSystemHero } from '../components/brand-system/BrandSystemHero'
import { BrandSystemPageLayout } from '../components/brand-system/BrandSystemPageLayout'
import { BrandSystemSection } from '../components/brand-system/BrandSystemSection'
import { ScrollReveal } from '../components/ScrollReveal'
import { getBrandSystem } from '../data/brandSystems'
import {
  terrapinOutdoorsBoards,
  terrapinOutdoorsNavItems,
  terrapinOutdoorsPrinciples,
} from '../data/brandSystems/terrapinOutdoors'

export function TerrapinOutdoorsBrandSystemPage() {
  const system = getBrandSystem('terrapin-outdoors')
  if (!system) return null

  return (
    <main className="bs-page bs-page--terrapin">
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
        <BrandSystemPageLayout navItems={terrapinOutdoorsNavItems}>
          <BrandSystemSection
            id="bs-overview"
            title="Overview"
            intro="Terrapin Outdoors is a map-first platform for outdoor planning, trail discovery, and field-ready adventure tools."
          >
            <img
              src={terrapinOutdoorsBoards.logo}
              alt="Terrapin Outdoors — Your Adventure Platform"
              className="terrapin-overview-logo"
            />
            <div className="bs-overview-grid">
              <div className="bs-principles">
                <h3 className="bs-principles__title">Brand principles</h3>
                <ul className="bs-principles__list">
                  {terrapinOutdoorsPrinciples.brand.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bs-principles">
                <h3 className="bs-principles__title">Interface principles</h3>
                <ul className="bs-principles__list">
                  {terrapinOutdoorsPrinciples.interface.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-foundations"
            title="Foundations"
            intro="Core tokens for Terrapin Outdoors — color, typography, spacing, radius, borders, elevation, and icon style."
          >
            <BrandSystemCanvas
              label="Foundations"
              note="Color, type, spacing, radius, borders, elevation, and icons"
              variant="hero"
              className="bs-canvas--terrapin-board"
              imageSrc={terrapinOutdoorsBoards.foundations}
              imageAlt="Terrapin Outdoors foundations — color tokens, typography, spacing, radius, borders, elevation, and icon style"
            />
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-map-shells"
            title="Map Shells & Navigation"
            intro="Desktop and mobile map shells, explorer panels, detail drawers, control rails, and navigation patterns."
          >
            <BrandSystemCanvas
              label="Map shells & navigation"
              note="Desktop shell, mobile shell, explorer panel, detail panel, and bottom sheet patterns"
              variant="hero"
              className="bs-canvas--terrapin-board"
              imageSrc={terrapinOutdoorsBoards.mapShells}
              imageAlt="Terrapin Outdoors map shells and navigation patterns"
            />
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-content"
            title="Content Modules"
            intro="Trail cards, search results, filters, detail drawers, layer controls, and compact list patterns."
          >
            <BrandSystemCanvas
              label="Map content modules"
              note="Trail cards, filters, detail drawers, layers, and list rows"
              variant="hero"
              className="bs-canvas--terrapin-board"
              imageSrc={terrapinOutdoorsBoards.contentModules}
              imageAlt="Terrapin Outdoors map content modules and card patterns"
            />
          </BrandSystemSection>

          <BrandSystemSection
            id="bs-components"
            title="Components"
            intro="Field-ready controls — search, chips, toggles, markers, route lines, alerts, toasts, and stat blocks."
          >
            <BrandSystemCanvas
              label="Components"
              note="Search, filters, toggles, markers, route styles, alerts, and stat blocks"
              variant="hero"
              className="bs-canvas--terrapin-board"
              imageSrc={terrapinOutdoorsBoards.components}
              imageAlt="Terrapin Outdoors UI components for map and field use"
            />
          </BrandSystemSection>
        </BrandSystemPageLayout>
      </div>
    </main>
  )
}
