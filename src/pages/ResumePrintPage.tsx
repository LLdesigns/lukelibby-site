import type { ReactNode } from 'react'
import {
  education,
  experience,
  independentProjects,
  resumeMeta,
  skillCategories,
} from '../data/resume'
import '../styles/resume-print.css'

const printSummary =
  'Creative technologist and product builder with ten-plus years at Pluralsight and freelance work across AI systems, video production, hands-on labs, and practical software. I build internal tools and AI workflows that speed up production without cutting corners on quality.'

const currentRole = experience[0]
const previousRole = experience[1]
const freelanceRole = experience.find((role) => role.id === 'freelance')
const featuredProjects = independentProjects.slice(0, 2)

function PrintSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="resume-print__section">
      <h2 className="resume-print__section-title">{title}</h2>
      {children}
    </section>
  )
}

export function ResumePrintPage() {
  return (
    <div className="resume-print">
      <article className="resume-print__sheet">
        <header className="resume-print__hero">
          <p className="resume-print__eyebrow">Field Report / Resume</p>
          <h1 className="resume-print__name">{resumeMeta.name}</h1>
          <p className="resume-print__roles">
            Creative Technologist · Product Builder
          </p>
          <p className="resume-print__contact">
            Farmington, UT · lukelibby.com · linkedin.com/in/{resumeMeta.linkedInHandle}
          </p>
        </header>

        <PrintSection title="Summary">
          <p className="resume-print__copy">{printSummary}</p>
        </PrintSection>

        <PrintSection title="Core Skills">
          <div className="resume-print__skills">
            {skillCategories.map((category) => (
              <p key={category.id} className="resume-print__skill-line">
                <strong>{category.title}:</strong>{' '}
                {category.skills.slice(0, 8).join(' · ')}
              </p>
            ))}
          </div>
        </PrintSection>

        <PrintSection title="Experience">
          <div className="resume-print__roles">
            {[currentRole, previousRole].map((role) => (
              <article key={role.id} className="resume-print__role">
                <div className="resume-print__role-head">
                  <h3 className="resume-print__role-title">
                    {role.title} · {role.company}
                  </h3>
                  <p className="resume-print__role-period">{role.period}</p>
                </div>
                <ul className="resume-print__bullets">
                  {role.contributions.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}

            <article className="resume-print__role">
              <div className="resume-print__role-head">
                <h3 className="resume-print__role-title">
                  Earlier Pluralsight & Digital-Tutors
                </h3>
                <p className="resume-print__role-period">2014 – 2021</p>
              </div>
              <p className="resume-print__copy resume-print__copy--compact">
                Video Content Producer, Production Editor, QA Specialist, and AV Editor —
                author coaching, Adobe suite workflows, motion graphics, and publication
                quality.
              </p>
            </article>

            {freelanceRole && (
              <article className="resume-print__role">
                <div className="resume-print__role-head">
                  <h3 className="resume-print__role-title">
                    {freelanceRole.title} · {freelanceRole.company}
                  </h3>
                  <p className="resume-print__role-period">{freelanceRole.period}</p>
                </div>
                <p className="resume-print__copy resume-print__copy--compact">
                  {freelanceRole.contributions[0]}
                </p>
              </article>
            )}
          </div>
        </PrintSection>

        <div className="resume-print__footer-grid">
          <PrintSection title="Selected Projects">
            <ul className="resume-print__inline-list">
              {featuredProjects.map((project) => (
                <li key={project.id}>
                  <strong>{project.title}</strong> — {project.subtitle}.{' '}
                  {project.highlights[0]}
                </li>
              ))}
            </ul>
          </PrintSection>

          <PrintSection title="Education">
            <ul className="resume-print__inline-list">
              {education.map((item) => (
                <li key={item.id}>
                  <strong>{item.school}</strong>
                  {item.period ? ` (${item.period})` : ''} — {item.degree}
                  {item.gpa ? `, GPA ${item.gpa}` : ''}
                  {item.honors ? `, ${item.honors}` : ''}
                </li>
              ))}
            </ul>
          </PrintSection>
        </div>
      </article>
    </div>
  )
}
