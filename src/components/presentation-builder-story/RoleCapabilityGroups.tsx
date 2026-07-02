import type { PresentationBuilderStoryContent } from '../../data/productStories/presentationBuilderStory'

type RoleCapabilityGroupsProps = {
  content: PresentationBuilderStoryContent['myRole']
}

export function RoleCapabilityGroups({ content }: RoleCapabilityGroupsProps) {
  return (
    <>
      <p className="psb-section__lede">{content.intro}</p>
      <div className="psb-role">
        {content.groups.map((group) => (
          <article key={group.title} className="psb-role__group">
            <h3 className="psb-role__group-title">{group.title}</h3>
            <ul className="psb-role__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="psb-bridge">{content.closing}</p>
    </>
  )
}
