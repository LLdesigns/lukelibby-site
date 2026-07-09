import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { DocumentHead } from '../components/DocumentHead'
import { submitDiscovery, isValidEmail } from '../api/submissions'
import { Button } from '../components/Button'
import {
  discoveryIntro,
  discoveryQuestions,
  type DiscoveryQuestion,
} from '../data/discoveryQuestions'
import '../styles/discovery.css'

const privateDiscoveryHead = (
  <DocumentHead
    title="Project Brief"
    description="Private project discovery intake for Luke Libby consulting."
    pathname="/discovery"
    noindex
  />
)

type AnswerState = Record<string, { choice?: string; detail?: string; text?: string }>

function getSlideCount() {
  return discoveryQuestions.length + 1
}

function canAdvance(question: DiscoveryQuestion, answers: AnswerState): boolean {
  const answer = answers[question.id]

  if (question.type === 'email') {
    return isValidEmail(answer?.text ?? '')
  }

  if (question.type === 'text') {
    const value = answer?.text?.trim() ?? ''
    if (question.required) return value.length > 0
    return true
  }

  return Boolean(answer?.choice)
}

function buildPayloadAnswers(answers: AnswerState): Record<string, string> {
  const payload: Record<string, string> = {}

  for (const question of discoveryQuestions) {
    const answer = answers[question.id]
    if (!answer) continue

    if (question.type === 'choice') {
      if (answer.choice) payload[question.id] = answer.choice
      if (answer.detail?.trim()) payload[`${question.id}_detail`] = answer.detail.trim()
    } else if (answer.text?.trim()) {
      payload[question.id] = answer.text.trim()
    }
  }

  return payload
}

export function DiscoveryPage() {
  const startedAtRef = useRef(new Date())
  const [slide, setSlide] = useState(0)
  const [answers, setAnswers] = useState<AnswerState>({})
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const totalSlides = getSlideCount()
  const isIntro = slide === 0
  const questionIndex = slide - 1
  const question = !isIntro ? discoveryQuestions[questionIndex] : null
  const progress = ((slide + 1) / totalSlides) * 100

  useEffect(() => {
    document.body.classList.add('discovery-open')
    return () => document.body.classList.remove('discovery-open')
  }, [])

  const email = answers.email?.text ?? ''
  const name = answers.name?.text ?? ''

  const canGoNext = useMemo(() => {
    if (isIntro) return true
    if (!question) return false
    return canAdvance(question, answers)
  }, [isIntro, question, answers])

  function updateAnswer(
    questionId: string,
    patch: Partial<AnswerState[string]>,
  ) {
    setAnswers((current) => ({
      ...current,
      [questionId]: { ...current[questionId], ...patch },
    }))
  }

  async function handleSubmit() {
    if (!isValidEmail(email)) {
      setErrorMessage('Email is required to submit your project brief.')
      setStatus('error')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    const result = await submitDiscovery({
      email,
      name,
      answers: buildPayloadAnswers(answers),
      website,
      startedAt: startedAtRef.current,
    })

    if (!result.ok) {
      setStatus('error')
      setErrorMessage(result.error)
      return
    }

    setStatus('done')
  }

  function goNext() {
    if (!canGoNext) return

    if (slide === totalSlides - 1) {
      void handleSubmit()
      return
    }

    setSlide((current) => Math.min(current + 1, totalSlides - 1))
    setErrorMessage('')
    setStatus('idle')
  }

  function goBack() {
    setSlide((current) => Math.max(current - 1, 0))
    setErrorMessage('')
    setStatus('idle')
  }

  if (status === 'done') {
    return (
      <main className="discovery-page">
        {privateDiscoveryHead}
        <div className="discovery-page__inner discovery-page__inner--success">
          <div className="discovery-success-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="discovery-page__eyebrow">Project brief</p>
          <h1 className="discovery-page__title">Thanks — brief received.</h1>
          <p className="discovery-page__copy">
            I will review what you shared and follow up at {email}.
          </p>
          <div className="discovery-page__footer-actions">
            <Button variant="primary" href="/">
              Back to home
            </Button>
            <Link className="btn btn--secondary" to="/contact">
              Contact page
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="discovery-page">
      {privateDiscoveryHead}
      <div className="discovery-page__top">
        <Link className="discovery-page__close" to={{ pathname: '/', hash: '#consulting' }}>
          ← Back
        </Link>
        <div className="discovery-page__progress" aria-hidden="true">
          <span className="discovery-page__progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="discovery-page__step">
          {isIntro ? 'Intro' : `Question ${questionIndex + 1} of ${discoveryQuestions.length}`}
        </p>
      </div>

      <div className="discovery-page__inner">
        {isIntro ? (
          <>
            <p className="discovery-page__eyebrow">Free discovery</p>
            <h1 className="discovery-page__title">{discoveryIntro.title}</h1>
            <p className="discovery-page__copy">{discoveryIntro.subtitle}</p>
          </>
        ) : question ? (
          <DiscoverySlide
            question={question}
            answer={answers[question.id]}
            onChange={(patch) => updateAnswer(question.id, patch)}
          />
        ) : null}

        <label className="form-honeypot" aria-hidden="true">
          Company fax
          <input
            type="text"
            name="ll_hp_fax"
            tabIndex={-1}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </label>

        {status === 'error' && (
          <p className="form-panel__error" role="alert">
            {errorMessage}
          </p>
        )}
      </div>

      <div className="discovery-page__footer">
        <Button
          type="button"
          variant="secondary"
          onClick={goBack}
          disabled={slide === 0 || status === 'submitting'}
        >
          Back
        </Button>
        <Button
          type="button"
          variant="primary"
          onClick={goNext}
          disabled={!canGoNext || status === 'submitting'}
        >
          {slide === totalSlides - 1
            ? status === 'submitting'
              ? 'Submitting…'
              : 'Submit brief'
            : 'Continue'}
        </Button>
      </div>
    </main>
  )
}

type DiscoverySlideProps = {
  question: DiscoveryQuestion
  answer?: AnswerState[string]
  onChange: (patch: Partial<AnswerState[string]>) => void
}

function DiscoverySlide({ question, answer, onChange }: DiscoverySlideProps) {
  if (question.type === 'choice') {
    return (
      <div className="discovery-slide">
        <h2 className="discovery-slide__prompt">{question.prompt}</h2>
        {question.helper && <p className="discovery-slide__helper">{question.helper}</p>}
        <div className="discovery-slide__choices" role="radiogroup" aria-label={question.prompt}>
          {question.choices.map((choice) => {
            const selected = answer?.choice === choice.id
            return (
              <button
                key={choice.id}
                type="button"
                className={`discovery-choice${selected ? ' is-selected' : ''}`}
                onClick={() => onChange({ choice: choice.id })}
                aria-pressed={selected}
              >
                {choice.label}
              </button>
            )
          })}
        </div>
        {question.allowDetail && (
          <label className="form-field discovery-slide__detail">
            <span className="form-field__label">{question.detailPrompt ?? 'Add detail (optional)'}</span>
            <textarea
              className="form-field__textarea"
              rows={3}
              value={answer?.detail ?? ''}
              onChange={(event) => onChange({ detail: event.target.value })}
            />
          </label>
        )}
      </div>
    )
  }

  if (question.type === 'email') {
    return (
      <div className="discovery-slide">
        <h2 className="discovery-slide__prompt">{question.prompt}</h2>
        {question.helper && <p className="discovery-slide__helper">{question.helper}</p>}
        <label className="form-field">
          <span className="form-field__label">Email</span>
          <input
            className="form-field__input"
            type="email"
            autoComplete="email"
            required
            value={answer?.text ?? ''}
            onChange={(event) => onChange({ text: event.target.value })}
          />
        </label>
      </div>
    )
  }

  return (
    <div className="discovery-slide">
      <h2 className="discovery-slide__prompt">{question.prompt}</h2>
      {question.helper && <p className="discovery-slide__helper">{question.helper}</p>}
      <label className="form-field">
        <span className="form-field__label">{question.required ? 'Your answer' : 'Optional'}</span>
        <textarea
          className="form-field__textarea"
          rows={4}
          placeholder={question.placeholder}
          value={answer?.text ?? ''}
          onChange={(event) => onChange({ text: event.target.value })}
        />
      </label>
    </div>
  )
}
