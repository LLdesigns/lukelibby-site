import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/theme.css'
import './styles/components.css'
import './styles/global.css'
import './styles/grid-backdrop.css'
import './styles/effects.css'
import './styles/case-study.css'
import './styles/scroll-reveal.css'
import './styles/resume.css'
import './styles/work.css'
import './styles/product-system.css'
import './styles/story-page.css'
import './styles/play-it-pro-story.css'
import './styles/presentation-builder-story.css'
import './styles/brand-system.css'
import './styles/replenish-health.css'
import './styles/terrapin-outdoors.css'
import './styles/notes.css'
import './styles/consulting.css'
import './styles/forms.css'
import './styles/discovery.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
