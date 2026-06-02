import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/theme.css'
import './styles/components.css'
import './styles/global.css'
import './styles/case-study.css'
import './styles/scroll-reveal.css'
import './styles/resume.css'
import './styles/work.css'
import './styles/product-system.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
