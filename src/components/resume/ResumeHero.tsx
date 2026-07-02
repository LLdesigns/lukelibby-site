import { Link } from 'react-router-dom'
import { resumeMeta } from '../../data/resume'
import { ThemeBlock } from '../ThemeBlock'

export function ResumeHero() {
  return (
    <header className="resume-hero">
      <ThemeBlock>
        <p className="resume-hero__eyebrow">Field Report / Interactive Resume</p>
        <h1 className="resume-hero__title">{resumeMeta.name}</h1>
        <p className="resume-hero__roles">{resumeMeta.roles.join(' · ')}</p>
        <ul className="resume-hero__meta">
          <li className="resume-hero__chip">
            <span className="resume-hero__chip-label">Location</span>
            <span>{resumeMeta.location}</span>
          </li>
          <li className="resume-hero__chip">
            <span className="resume-hero__chip-label">Portfolio</span>
            <span>{resumeMeta.portfolioNote}</span>
          </li>
          <li className="resume-hero__chip">
            <span className="resume-hero__chip-label">LinkedIn</span>
            <a
              href={resumeMeta.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeMeta.linkedInHandle} ?
            </a>
          </li>
        </ul>
        <div className="resume-hero__actions">
          <Link to="/#work" className="btn btn--primary">
            View Case Studies
          </Link>
          <a
            href={resumeMeta.linkedInUrl}
            className="btn btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      </ThemeBlock>
    </header>
  )
}
