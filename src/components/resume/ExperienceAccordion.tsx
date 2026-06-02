import { useState } from 'react'
import { experience } from '../../data/resume'

export function ExperienceAccordion() {
  const [openId, setOpenId] = useState<string>(experience[0]?.id ?? '')

  return (
    <div className="resume-accordion">
      {experience.map((job) => {
        const isOpen = openId === job.id
        return (
          <article
            key={job.id}
            className={`resume-accordion__item paper-card${isOpen ? ' resume-accordion__item--open' : ''}`}
          >
            <button
              type="button"
              className="resume-accordion__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? '' : job.id)}
            >
              <div className="resume-accordion__trigger-main">
                <span className="resume-accordion__period">{job.period}</span>
                <h3 className="resume-accordion__title">{job.title}</h3>
                <p className="resume-accordion__company">{job.company}</p>
              </div>
              <span className="resume-accordion__icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="resume-accordion__body">
                <p className="resume-accordion__intro">{job.intro}</p>
                <h4 className="resume-accordion__subhead">Key Contributions</h4>
                <ul className="resume-accordion__list">
                  {job.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="resume-accordion__tech">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="resume-accordion__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        )
      })}
    </div>
  )
}
