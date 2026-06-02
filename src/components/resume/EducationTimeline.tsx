import { useState } from 'react'
import { education } from '../../data/resume'

export function EducationTimeline() {
  const [activeId, setActiveId] = useState<string>(education[0]?.id ?? '')

  return (
    <ol className="edu-timeline">
      {education.map((entry, index) => {
        const isActive = activeId === entry.id
        return (
          <li key={entry.id} className="edu-timeline__item">
            <button
              type="button"
              className={`edu-timeline__node${isActive ? ' edu-timeline__node--active' : ''}`}
              onClick={() => setActiveId(entry.id)}
              aria-expanded={isActive}
            >
              <span className="edu-timeline__step">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="edu-timeline__brief">
                <span className="edu-timeline__school">{entry.school}</span>
                <span className="edu-timeline__gpa">
                  {entry.period ? `${entry.period} · ` : ''}GPA {entry.gpa}
                </span>
              </div>
            </button>
            {isActive && (
              <div className="edu-timeline__detail paper-card">
                <h3 className="edu-timeline__degree">{entry.degree}</h3>
                <p className="edu-timeline__school-full">{entry.school}</p>
                {entry.honors && (
                  <p className="edu-timeline__honors">{entry.honors}</p>
                )}
              </div>
            )}
          </li>
        )
      })}
    </ol>
  )
}
