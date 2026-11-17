import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { submitContact } from '../../api/submissions'

/** A short contact form for the v2 footer. */
export function V2ContactForm() {
  const formId = useId()
  const startedAtRef = useRef(new Date())
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
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
      source: 'homepage',
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
    setMessage('')
  }

  if (status === 'success') {
    return (
      <p className="v2-contact__success" role="status">
        Message sent. I’ll get back to you.
      </p>
    )
  }

  return (
    <form className="v2-contact__form" onSubmit={handleSubmit}>
      <label className="v2-contact__field">
        <span>Name</span>
        <input
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
      <label className="v2-contact__field">
        <span>Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label className="v2-contact__field">
        <span>Message</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <label className="v2-contact__trap" htmlFor={`${formId}-hp`} aria-hidden="true">
        Company fax
        <input
          id={`${formId}-hp`}
          type="text"
          name="ll_hp_fax"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </label>
      {status === 'error' ? (
        <p className="v2-contact__error" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <button className="v2-contact__submit" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}
