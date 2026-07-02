import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { EffectsLayer } from './components/EffectsLayer'
import { PaperLiftReveal } from './components/PaperLiftReveal'
import { GridBackdrop } from './components/GridBackdrop'
import { Header } from './components/Header'
import { ScrollProgress } from './components/ScrollProgress'
import { ScrollToHash } from './components/ScrollToHash'
import { SiteFooter } from './components/SiteFooter'
import { HomePage } from './pages/HomePage'
import { WorkPage } from './pages/WorkPage'
import { ProductStoryPage } from './pages/ProductStoryPage'
import { PresentationBuilderStoryPage } from './pages/PresentationBuilderStoryPage'
import { PlayItProStoryPage } from './pages/PlayItProStoryPage'
import { ResumePage } from './pages/ResumePage'
import { BrandSystemPage } from './pages/BrandSystemPage'
import { TerrapinOutdoorsBrandSystemPage } from './pages/TerrapinOutdoorsBrandSystemPage'
import { ReplenishHealthBrandSystemPage } from './pages/ReplenishHealthBrandSystemPage'
import { NotesLayer } from './components/notes/NotesLayer'

/** Set to true to show the sticky notes overlay */
const NOTES_FEATURE_ENABLED = false

function LegacyStoryRedirect() {
  const { slug } = useParams<{ slug: string }>()
  if (!slug) return <Navigate to="/work#product-stories" replace />
  if (slug === 'plottr') {
    return <Navigate to="/stories/presentation-builder" replace />
  }
  return <Navigate to={`/stories/${slug}`} replace />
}

function LegacyBrandSystemRedirect() {
  const { slug } = useParams<{ slug: string }>()
  if (!slug) return <Navigate to="/work#brand-systems" replace />
  return <Navigate to={`/brand-systems/${slug}`} replace />
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <GridBackdrop />
        <EffectsLayer />
        <PaperLiftReveal />
        <ScrollProgress />
        <ScrollToHash />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route
            path="/stories/nutriant"
            element={<Navigate to="/stories/wyldtracks" replace />}
          />
          <Route
            path="/stories/presentation-builder"
            element={<PresentationBuilderStoryPage />}
          />
          <Route path="/stories/play-it-pro" element={<PlayItProStoryPage />} />
          <Route path="/stories/:slug" element={<ProductStoryPage />} />
          <Route
            path="/case-studies/plottr"
            element={<Navigate to="/stories/presentation-builder" replace />}
          />
          <Route path="/case-studies/:slug" element={<LegacyStoryRedirect />} />
          <Route
            path="/brand-systems/dog-friendly-places"
            element={<Navigate to="/brand-systems/terrapin-outdoors" replace />}
          />
          <Route
            path="/brand-systems/ovrmaps"
            element={<Navigate to="/brand-systems/terrapin-outdoors" replace />}
          />
          <Route
            path="/brand-systems/terrapin-outdoors"
            element={<TerrapinOutdoorsBrandSystemPage />}
          />
          <Route
            path="/brand-systems/compliance-engine"
            element={<Navigate to="/brand-systems/replenish-health" replace />}
          />
          <Route
            path="/brand-systems/replenish-health"
            element={<ReplenishHealthBrandSystemPage />}
          />
          <Route path="/brand-systems/:slug" element={<BrandSystemPage />} />
          <Route path="/product-systems/:slug" element={<LegacyBrandSystemRedirect />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <SiteFooter />
        {NOTES_FEATURE_ENABLED && <NotesLayer />}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
