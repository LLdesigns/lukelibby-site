import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  additionalStrengths,
  education,
  experience,
  independentProjects,
  resumeMeta,
  resumePdf,
  resumeSummary,
  skillCategories,
  type SkillCategoryId,
} from '../../data/resume'
import { useActiveSection } from '../../hooks/useActiveSection'
import { withBasePath } from '../../utils/basePath'

const sections = [
  { id: 'resume-summary', label: 'Summary' },
  { id: 'resume-experience', label: 'Experience' },
  { id: 'resume-projects', label: 'Projects' },
  { id: 'resume-skills', label: 'Skills' },
  { id: 'resume-education', label: 'Education' },
  { id: 'resume-strengths', label: 'Strengths' },
] as const

type SectionId = (typeof sections)[number]['id']

/** Interactive digital resume for the v2 landing page. */
export function V2Resume() {
  const sectionIds = useMemo(() => sections.map((section) => section.id), [])
  const activeId = useActiveSection(sectionIds)
  const [openJob, setOpenJob] = useState<string>(experience[0]?.id ?? '')
  const [skillFilter, setSkillFilter] = useState<SkillCategoryId>('product')
  const [activeProject, setActiveProject] = useState<string>(independentProjects[0]?.id ?? '')
  const [openSchool, setOpenSchool] = useState<string>(education[0]?.id ?? '')

  const project =
    independentProjects.find((item) => item.id === activeProject) ?? independentProjects[0]

  function scrollToSection(id: SectionId) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="v2-resume" id="resume" aria-labelledby="resume-title">
      <div className="v2-resume__shell">
        <aside className="v2-resume__rail">
          <p className="v2-resume__rail-label">Index</p>
          <nav className="v2-resume__index" aria-label="Resume sections">
            {sections.map((section, index) => {
              const active = activeId === section.id
              return (
                <button
                  key={section.id}
                  type="button"
                  className={active ? 'is-active' : undefined}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => scrollToSection(section.id)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {section.label}
                </button>
              )
            })}
          </nav>
          <a
            className="v2-resume__download"
            href={withBasePath(resumePdf.href)}
            download={resumePdf.filename}
          >
            Download PDF
          </a>
        </aside>

        <div className="v2-resume__main">
          <header className="v2-resume__header">
            <p className="v2-resume__eyebrow">Resume</p>
            <h2 id="resume-title">{resumeMeta.name}</h2>
            <p className="v2-resume__roles">{resumeMeta.roles.join(' · ')}</p>
            <p className="v2-resume__place">{resumeMeta.location}</p>
            <a
              className="v2-resume__download v2-resume__download--mobile"
              href={withBasePath(resumePdf.href)}
              download={resumePdf.filename}
            >
              Download PDF
            </a>
          </header>

          <div className="v2-resume__block" id="resume-summary">
            <div className="v2-resume__block-head">
              <h3>Professional summary</h3>
              <span>Overview</span>
            </div>
            <div className="v2-resume__summary">
              {resumeSummary.split('\n\n').map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </div>
          </div>

          <div className="v2-resume__block" id="resume-experience">
            <div className="v2-resume__block-head">
              <h3>Experience</h3>
              <span>Expand</span>
            </div>
            <div className="v2-resume__jobs">
              {experience.map((job) => {
                const open = openJob === job.id
                return (
                  <article key={job.id} className={open ? 'is-open' : undefined}>
                    <button
                      type="button"
                      className="v2-resume__job-trigger"
                      aria-expanded={open}
                      onClick={() => setOpenJob(open ? '' : job.id)}
                    >
                      <span className="v2-resume__job-period">{job.period}</span>
                      <span className="v2-resume__job-title">{job.title}</span>
                      <span className="v2-resume__job-company">{job.company}</span>
                      <span className="v2-resume__job-icon" aria-hidden="true">
                        {open ? '−' : '+'}
                      </span>
                    </button>
                    {open ? (
                      <div className="v2-resume__job-body">
                        <p>{job.intro}</p>
                        <p className="v2-resume__subhead">Key contributions</p>
                        <ul className="v2-resume__points">
                          {job.contributions.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                        <p className="v2-resume__tech">{job.technologies.join(' · ')}</p>
                      </div>
                    ) : null}
                  </article>
                )
              })}
            </div>
          </div>

          <div className="v2-resume__block" id="resume-projects">
            <div className="v2-resume__block-head">
              <h3>Independent projects</h3>
              <span>Select</span>
            </div>
            <div className="v2-resume__project-tabs" role="tablist" aria-label="Projects">
              {independentProjects.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activeProject === item.id}
                  className={activeProject === item.id ? 'is-active' : undefined}
                  onClick={() => setActiveProject(item.id)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            {project ? (
              <article className="v2-resume__project" role="tabpanel">
                <div className="v2-resume__project-head">
                  <div>
                    <h4>{project.title}</h4>
                    <p className="v2-resume__project-sub">{project.subtitle}</p>
                    <p className="v2-resume__project-role">{project.role}</p>
                  </div>
                  <div className="v2-resume__project-links">
                    {'href' in project && project.href ? (
                      <Link to={project.href}>Read case study</Link>
                    ) : null}
                    {'liveUrl' in project && project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live site
                      </a>
                    ) : null}
                  </div>
                </div>
                <p className="v2-resume__project-desc">{project.description}</p>
                <p className="v2-resume__subhead">Highlights</p>
                <ul className="v2-resume__points">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="v2-resume__tech">{project.technologies.join(' · ')}</p>
              </article>
            ) : null}
          </div>

          <div className="v2-resume__block" id="resume-skills">
            <div className="v2-resume__block-head">
              <h3>Core skills</h3>
              <span>Focus</span>
            </div>
            <div className="v2-resume__skill-tabs" role="tablist" aria-label="Skill categories">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={skillFilter === category.id}
                  className={skillFilter === category.id ? 'is-active' : undefined}
                  onClick={() => setSkillFilter(category.id)}
                >
                  {category.title}
                </button>
              ))}
            </div>
            {skillCategories.map((category) =>
              skillFilter === category.id ? (
                <p key={category.id} className="v2-resume__skill-line" role="tabpanel">
                  {category.skills.join(' · ')}
                </p>
              ) : null,
            )}
          </div>

          <div className="v2-resume__block" id="resume-education">
            <div className="v2-resume__block-head">
              <h3>Education</h3>
              <span>Timeline</span>
            </div>
            <ol className="v2-resume__edu">
              {education.map((item, index) => {
                const open = openSchool === item.id
                return (
                  <li key={item.id} className={open ? 'is-open' : undefined}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenSchool(open ? '' : item.id)}
                    >
                      <span className="v2-resume__edu-step">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="v2-resume__edu-brief">
                        <span className="v2-resume__edu-school">{item.school}</span>
                        <span className="v2-resume__edu-meta">
                          {[item.period, item.gpa ? `GPA ${item.gpa}` : ''].filter(Boolean).join(' · ')}
                        </span>
                      </span>
                    </button>
                    {open ? (
                      <div className="v2-resume__edu-detail">
                        <p className="v2-resume__edu-degree">{item.degree}</p>
                        {item.honors ? <p className="v2-resume__edu-honors">{item.honors}</p> : null}
                      </div>
                    ) : null}
                  </li>
                )
              })}
            </ol>
          </div>

          <div className="v2-resume__block" id="resume-strengths">
            <div className="v2-resume__block-head">
              <h3>Additional strengths</h3>
              <span>Field notes</span>
            </div>
            <ul className="v2-resume__strengths">
              {additionalStrengths.map((strength) => (
                <li key={strength.label}>
                  <span aria-hidden="true" />
                  <p>
                    <strong>{strength.label}:</strong> {strength.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
