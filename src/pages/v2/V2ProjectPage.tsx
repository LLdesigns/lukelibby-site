import { Link, useParams } from 'react-router-dom'
import { DocumentHead } from '../../components/DocumentHead'
import { ProjectPage } from '../../components/v2/project/ProjectPage'
import { getV2Project } from '../../data/v2/projects'
import '../../styles/v2-project.css'

export function V2ProjectPage() {
  const { slug } = useParams()
  const project = getV2Project(slug)

  if (!project) {
    return (
      <main className="vp vp-missing">
        <DocumentHead title="Project" description="This project page is not published yet." noindex />
        <p>This project page is not published yet.</p>
        <Link to="/">Back to all work</Link>
      </main>
    )
  }

  return (
    <>
      <DocumentHead
        title={project.title}
        description={project.description}
        pathname={`/v2/work/${project.slug}`}
        imagePath={project.hero.image}
        type="article"
        noindex={project.published === false}
      />
      <ProjectPage project={project} />
    </>
  )
}
