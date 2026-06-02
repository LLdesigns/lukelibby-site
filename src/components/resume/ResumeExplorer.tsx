import type { ResumeSectionId } from '../../data/resume'
import { resumeSections } from '../../data/resume'

type ResumeExplorerProps = {
  activeId: string
  onNavigate: (id: ResumeSectionId) => void
}

export function ResumeExplorer({ activeId, onNavigate }: ResumeExplorerProps) {
  return (
    <nav className="resume-explorer" aria-label="Resume sections">
      <p className="resume-explorer__label">Field Index</p>
      <ul className="resume-explorer__list">
        {resumeSections.map((section, index) => {
          const isActive = activeId === section.id
          return (
            <li key={section.id}>
              <button
                type="button"
                className={`resume-explorer__btn${isActive ? ' resume-explorer__btn--active' : ''}`}
                onClick={() => onNavigate(section.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="resume-explorer__num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {section.label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
