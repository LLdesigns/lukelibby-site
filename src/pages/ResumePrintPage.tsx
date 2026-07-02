import type { ReactNode } from 'react'
import {
  additionalStrengths,
  education,
  experience,
  independentProjects,
  resumeMeta,
  resumeSummary,
  skillCategories,
} from '../data/resume'
import '../styles/resume-print.css'

const featuredRoles = experience.slice(0, 2)
const earlierRoles = experience.slice(2, 6)
const freelanceRole = experience.find((role) => role.id === 'freelance')
const featuredProjects = independentProjects.slice(0, 2)
const printStrengths = additionalStrengths.slice(0, 5)

function PrintSection({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="resume-print__section">
      <p className="resume-print__section-label">{label}</p>
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
          <p className="resume-print__roles">{resumeMeta.roles.join(' · ')}</p>
          <dl className="resume-print__meta">
            <div className="resume-print__chip">
              <dt className="resume-print__chip-label">Location</dt>
              <dd>{resumeMeta.location}</dd>
            </div>
            <div className="resume-print__chip">
              <dt className="resume-print__chip-label">Website</dt>
              <dd>lukelibby.com</dd>
            </div>
            <div className="resume-print__chip">
              <dt className="resume-print__chip-label">LinkedIn</dt>
              <dd>linkedin.com/in/{resumeMeta.linkedInHandle}</dd>
            </div>
            <div className="resume-print__chip">
              <dt className="resume-print__chip-label">Portfolio</dt>
              <dd>{resumeMeta.portfolioNote}</dd>
            </div>
          </dl>
        </header>

        <PrintSection label="Overview" title="Professional Summary">
          <div className="resume-print__paper">
            {resumeSummary.split('\n\n').map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </PrintSection>

        <PrintSection label="Toolkit" title="Core Skills">
          <div className="resume-print__skills-grid">
            {skillCategories.map((category) => (
              <div key={category.id} className="resume-print__skill-group">
                <h3 className="resume-print__skill-group-title">{category.title}</h3>
                <ul className="resume-print__skill-list">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </PrintSection>

        <PrintSection label="Timeline" title="Professional Experience">
          <div className="resume-print__roles-list">
            {featuredRoles.map((role) => (
              <article key={role.id} className="resume-print__role">
                <div className="resume-print__role-head">
                  <h3 className="resume-print__role-title">{role.title}</h3>
                  <p className="resume-print__role-period">{role.period}</p>
                </div>
                <p className="resume-print__role-company">{role.company}</p>
                <p className="resume-print__role-intro">{role.intro}</p>
                <ul className="resume-print__bullets">
                  {role.contributions.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}

            <article className="resume-print__role resume-print__role--compact">
              <div className="resume-print__role-head">
                <h3 className="resume-print__role-title">
                  Earlier Pluralsight & Digital-Tutors
                </h3>
                <p className="resume-print__role-period">2014 – 2021</p>
              </div>
              <p className="resume-print__role-company">Pluralsight / Digital-Tutors</p>
              <ul className="resume-print__bullets">
                {earlierRoles.map((role) => (
                  <li key={role.id}>
                    <strong>{role.title}</strong> — {role.intro}
                  </li>
                ))}
              </ul>
            </article>

            {freelanceRole && (
              <article className="resume-print__role">
                <div className="resume-print__role-head">
                  <h3 className="resume-print__role-title">{freelanceRole.title}</h3>
                  <p className="resume-print__role-period">{freelanceRole.period}</p>
                </div>
                <p className="resume-print__role-company">{freelanceRole.company}</p>
                <ul className="resume-print__bullets">
                  {freelanceRole.contributions.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            )}
          </div>
        </PrintSection>

        <div className="resume-print__split">
          <PrintSection label="Builds" title="Selected Projects">
            <div className="resume-print__projects">
              {featuredProjects.map((project) => (
                <article key={project.id} className="resume-print__project">
                  <div className="resume-print__project-head">
                    <h3 className="resume-print__project-title">{project.title}</h3>
                    <p className="resume-print__project-role">{project.role}</p>
                  </div>
                  <p className="resume-print__project-subtitle">{project.subtitle}</p>
                  <p className="resume-print__project-copy">{project.description}</p>
                  <ul className="resume-print__bullets resume-print__bullets--compact">
                    {project.highlights.slice(0, 2).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </PrintSection>

          <PrintSection label="Credentials" title="Education">
            <div className="resume-print__education">
              {education.map((item) => (
                <article key={item.id} className="resume-print__education-item">
                  <div className="resume-print__education-head">
                    <h3 className="resume-print__education-school">{item.school}</h3>
                    {item.period && (
                      <p className="resume-print__education-period">{item.period}</p>
                    )}
                  </div>
                  <p className="resume-print__education-degree">{item.degree}</p>
                  <p className="resume-print__education-meta">
                    {item.gpa && <>GPA {item.gpa}</>}
                    {item.gpa && item.honors && <> · </>}
                    {item.honors}
                  </p>
                </article>
              ))}
            </div>
          </PrintSection>
        </div>

        <PrintSection label="Field Notes" title="Additional Strengths">
          <ul className="resume-print__strengths">
            {printStrengths.map((strength) => (
              <li key={strength}>
                <span className="resume-print__strength-mark" aria-hidden="true">
                  ▸
                </span>
                {strength}
              </li>
            ))}
          </ul>
        </PrintSection>

        <footer className="resume-print__footer">
          <span>lukelibby.com</span>
          <span>Generated from portfolio field report</span>
        </footer>
      </article>
    </div>
  )
}
