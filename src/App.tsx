import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { EffectsLayer } from './components/EffectsLayer'
import { PaperLiftReveal } from './components/PaperLiftReveal'
import { GridBackdrop } from './components/GridBackdrop'
import { Header } from './components/Header'
import { ScrollProgress } from './components/ScrollProgress'
import { ScrollToHash } from './components/ScrollToHash'
import { SiteFooter } from './components/SiteFooter'
import { HoneycombLaunchOverlay } from './components/v2/HoneycombLaunchOverlay'
import { V2LandingPage } from './pages/v2/V2LandingPage'
import { V2ProjectPage } from './pages/v2/V2ProjectPage'
import { WorkPage } from './pages/WorkPage'
import { AuthPage } from './pages/AuthPage'
import { ResetPasswordPage } from './pages/ResetPasswordPage'
import { DashboardPage } from './pages/DashboardPage'
import { DiscoveryPage } from './pages/DiscoveryPage'
import { ResumePrintPage } from './pages/ResumePrintPage'
import { BrandSystemPage } from './pages/BrandSystemPage'
import { TerrapinOutdoorsBrandSystemPage } from './pages/TerrapinOutdoorsBrandSystemPage'
import { ReplenishHealthBrandSystemPage } from './pages/ReplenishHealthBrandSystemPage'
import { NotesLayer } from './components/notes/NotesLayer'

/** Set to true to show the sticky notes overlay */
const NOTES_FEATURE_ENABLED = false

/** Old /stories and /case-studies URLs → current v2 project pages. */
const STORY_TO_V2: Record<string, string> = {
  wyldtracks: '/v2/work/wyldtracks',
  nutriant: '/v2/work/wyldtracks',
  'play-it-pro': '/v2/work/play-it-pro',
  'presentation-builder': '/v2/work/plottr',
  plottr: '/v2/work/plottr',
  'ai-lab-production': '/v2/work/ai-lab-production',
  slidekit: '/v2/work/slidekit',
  videokit: '/v2/work/videokit',
  luma: '/v2/work/luma',
  ovrmaps: '/v2/work/ovrmaps',
}

function LegacyStoryRedirect() {
  const { slug } = useParams<{ slug: string }>()
  if (!slug) return <Navigate to="/" replace />
  const next = STORY_TO_V2[slug]
  return <Navigate to={next ?? '/'} replace />
}

function LegacyBrandSystemRedirect() {
  const { slug } = useParams<{ slug: string }>()
  if (!slug) return <Navigate to="/work#brand-systems" replace />
  return <Navigate to={`/brand-systems/${slug}`} replace />
}

/** Legacy work archive and tools. Public home is v2 at `/`. */
function SiteApp() {
  return (
    <>
      <GridBackdrop />
      <EffectsLayer />
      <PaperLiftReveal />
      <ScrollProgress />
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/work" element={<WorkPage />} />
        <Route path="/stories/:slug" element={<LegacyStoryRedirect />} />
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
        <Route path="/resume" element={<Navigate to={{ pathname: '/', hash: '#resume' }} replace />} />
        <Route path="/contact" element={<Navigate to={{ pathname: '/', hash: '#contact' }} replace />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute requireAdmin>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/client" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/consulting"
          element={<Navigate to={{ pathname: '/', hash: '#contact' }} replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
      {NOTES_FEATURE_ENABLED && <NotesLayer />}
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <HoneycombLaunchOverlay />
          <Routes>
            <Route path="/" element={<V2LandingPage />} />
            <Route path="/v2" element={<Navigate to="/" replace />} />
            <Route path="/v2/work/:slug" element={<V2ProjectPage />} />
            <Route path="/resume/print" element={<ResumePrintPage />} />
            <Route path="/discovery" element={<DiscoveryPage />} />
            <Route path="/*" element={<SiteApp />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
