import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Header } from './components/Header'
import { ScrollProgress } from './components/ScrollProgress'
import { ScrollToHash } from './components/ScrollToHash'
import { SiteFooter } from './components/SiteFooter'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { HomePage } from './pages/HomePage'
import { WorkPage } from './pages/WorkPage'
import { ProductSystemPage } from './pages/ProductSystemPage'
import { ResumePage } from './pages/ResumePage'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollProgress />
        <ScrollToHash />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-studies/plottr" element={<Navigate to="/case-studies/presentation-builder" replace />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/product-systems/:slug" element={<ProductSystemPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <SiteFooter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
