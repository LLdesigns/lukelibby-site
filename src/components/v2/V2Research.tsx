import { Link } from 'react-router-dom'

/** Research sits under the honeycomb. Only Learning and Assisted lab production. */
export function V2Research() {
  return (
    <section className="v2-research" id="research" aria-labelledby="research-title">
      <div className="v2-research__inner">
        <h2 id="research-title">Research</h2>

        <article className="v2-research__block" id="learning" aria-labelledby="learning-title">
          <h3 id="learning-title">Learning</h3>
          <p>
            Work on reading a transcript and proposing learning objectives, with the suggestion left
            for a person to review before it becomes the record.
          </p>
        </article>

        <article
          className="v2-research__block"
          id="assisted-lab-production"
          aria-labelledby="lab-production-title"
        >
          <h3 id="lab-production-title">Assisted lab production</h3>
          <p>
            An AI-assisted hands-on lab production workflow where instructional review, code checks,
            and publishing standards stay in the loop.
          </p>
          <Link className="v2-research__link" to="/work/ai-lab-production">
            Read the case study
          </Link>
        </article>
      </div>
    </section>
  )
}
