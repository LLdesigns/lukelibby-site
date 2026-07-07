import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { Button } from '../Button'
import { submitContact, type ContactSource } from '../../api/submissions'

type ContactFormProps = {
  source: ContactSource
  id?: string
  onSuccess?: () => void
}

export function ContactForm({ source, id, onSuccess }: ContactFormProps) {
  const formId = useId()
  const startedAtRef = useRef(new Date())
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    startedAtRef.current = new Date()
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const result = await submitContact({
      email,
      name,
      message,
      subject,
      source,
      website,
      startedAt: startedAtRef.current,
    })

    if (!result.ok) {
      setStatus('error')
      setErrorMessage(result.error)
      return
    }

    setStatus('success')
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    onSuccess?.()
  }

  if (status === 'success') {
    return (
      <div className="form-panel form-panel--success" id={id}>
        <p className="form-panel__success-title">Message sent</p>
        <p className="form-panel__success-copy">
          Thanks — I will get back to you soon.
        </p>
        <Button type="button" variant="secondary" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form className="form-panel" id={id} onSubmit={handleSubmit} noValidate>
      <div className="form-panel__grid">
        <label className="form-field">
          <span className="form-field__label">Name</span>
          <input
            className="form-field__input"
            type="text"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={120}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label className="form-field">
          <span className="form-field__label">Email</span>
          <input
            className="form-field__input"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>

      <label className="form-field">
        <span className="form-field__label">Subject (optional)</span>
        <input
          className="form-field__input"
          type="text"
          name="subject"
          maxLength={200}
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
      </label>

      <label className="form-field">
        <span className="form-field__label">Message</span>
        <textarea
          className="form-field__textarea"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <label className="form-honeypot" htmlFor={`${formId}-website`} aria-hidden="true">
        Website
        <input
          id={`${formId}-website`}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </label>

      {status === 'error' && (
        <p className="form-panel__error" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="form-panel__actions">
        <Button type="submit" variant="primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
      </div>
    </form>
  )
}
