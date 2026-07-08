import { Link } from 'react-router-dom'
import { DocumentHead } from '../components/DocumentHead'
import { ResumeExplorer } from '../components/resume/ResumeExplorer'
import { ResumeHero } from '../components/resume/ResumeHero'
import { ResumeSection } from '../components/resume/ResumeSection'
import { SkillExplorer } from '../components/resume/SkillExplorer'
import { ExperienceAccordion } from '../components/resume/ExperienceAccordion'
import { ProjectsExplorer } from '../components/resume/ProjectsExplorer'
import { EducationTimeline } from '../components/resume/EducationTimeline'
import { ScrollReveal } from '../components/ScrollReveal'
import { ThemeBlock } from '../components/ThemeBlock'
import {
  additionalStrengths,
  resumeSections,
  resumeSummary,
  type ResumeSectionId,
} from '../data/resume'
import { profilePageJsonLd } from '../utils/structuredData'
import { useActiveSection } from '../hooks/useActiveSection'

export function ResumePage() {
  const sectionIds = resumeSections.map((s) => s.id)
  const activeId = useActiveSection(sectionIds)

  const scrollToSection = (id: ResumeSectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="resume-page">
      <DocumentHead
        title="Resume"
        description={resumeSummary.split('\n\n')[0]}
        pathname="/resume"
        jsonLd={profilePageJsonLd({
          description: resumeSummary.split('\n\n')[0],
          path: '/resume',
        })}
      />
      <div className="container resume-page__layout">
        <aside className="resume-page__sidebar">
          <ThemeBlock>
          <ScrollReveal variant="drift-left" immediate>
            <Link className="resume-back" to="/">
              ← Back to Home
            </Link>
          </ScrollReveal>
          <ScrollReveal variant="drift-right" immediate delay={100}>
            <ResumeExplorer
              activeId={activeId}
              onNavigate={scrollToSection}
            />
          </ScrollReveal>
          </ThemeBlock>
        </aside>

        <div className="resume-page__main">
          <ScrollReveal variant="unfurl" immediate delay={80}>
            <ResumeHero />
          </ScrollReveal>

          <ResumeSection id="summary" title="Professional Summary" label="Overview">
            <div className="resume-prose paper-card">
              {resumeSummary.split('\n\n').map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection id="skills" title="Core Skills" label="Explore">
            <SkillExplorer />
          </ResumeSection>

          <ResumeSection
            id="experience"
            title="Professional Experience"
            label="Expand"
          >
            <ExperienceAccordion />
          </ResumeSection>

          <ResumeSection
            id="projects"
            title="Independent Projects"
            label="Select"
          >
            <ProjectsExplorer />
          </ResumeSection>

          <ResumeSection id="education" title="Education" label="Timeline">
            <EducationTimeline />
          </ResumeSection>

          <ResumeSection
            id="strengths"
            title="Additional Strengths"
            label="Field Notes"
          >
            <ScrollReveal variant="cascade" className="resume-strengths">
              {additionalStrengths.map((strength) => (
                <div key={strength} className="resume-strength cascade-item">
                  <span className="resume-strength__mark" aria-hidden="true">
                    ▸
                  </span>
                  <p>{strength}</p>
                </div>
              ))}
            </ScrollReveal>
          </ResumeSection>
        </div>
      </div>
    </main>
  )
}
