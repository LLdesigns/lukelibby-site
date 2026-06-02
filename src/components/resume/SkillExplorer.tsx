import { useState } from 'react'
import {
  skillCategories,
  type SkillCategoryId,
} from '../../data/resume'

export function SkillExplorer() {
  const [activeCategory, setActiveCategory] = useState<SkillCategoryId | 'all'>(
    'all',
  )

  return (
    <div className="skill-explorer">
      <div className="skill-explorer__tabs" role="tablist" aria-label="Skill categories">
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'all'}
          className={`skill-explorer__tab${activeCategory === 'all' ? ' skill-explorer__tab--active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Skills
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`skill-explorer__tab${activeCategory === cat.id ? ' skill-explorer__tab--active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="skill-explorer__panels">
        {skillCategories.map((cat) => {
          const isActive = activeCategory === 'all' || activeCategory === cat.id
          return (
            <section
              key={cat.id}
              className={`skill-explorer__panel paper-card${isActive ? ' skill-explorer__panel--active' : ' skill-explorer__panel--dim'}`}
              role="tabpanel"
              aria-hidden={!isActive}
            >
              <h3 className="skill-explorer__panel-title">{cat.title}</h3>
              <ul className="skill-explorer__skills">
                {cat.skills.map((skill) => (
                  <li key={skill}>
                    <button
                      type="button"
                      className="skill-explorer__skill"
                      onClick={() => setActiveCategory(cat.id)}
                      title={`Focus: ${cat.title}`}
                    >
                      {skill}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
