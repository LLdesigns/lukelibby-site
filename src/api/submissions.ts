import { supabase } from '../lib/supabase'

const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

export type ContactSource = 'contact' | 'consulting' | 'homepage'

export type ContactPayload = {
  email: string
  name: string
  message: string
  subject?: string
  source: ContactSource
  website?: string
  startedAt: Date
}

export type DiscoveryPayload = {
  email: string
  name?: string
  answers: Record<string, string>
  website?: string
  startedAt: Date
}

export function isValidEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email.trim())
}

function mapSubmissionError(message: string): string {
  if (message.includes('rate_limit_exceeded')) {
    return 'Too many submissions recently. Please try again in an hour.'
  }
  if (message.includes('contact_email_format') || message.includes('discovery_email_format')) {
    return 'Please enter a valid email address.'
  }
  if (message.includes('contact_message_len')) {
    return 'Message must be between 10 and 5,000 characters.'
  }
  if (message.includes('discovery_min_duration')) {
    return 'Please take a moment to complete the brief before submitting.'
  }
  return 'Something went wrong. Please try again.'
}

export async function submitContact(payload: ContactPayload): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!supabase) {
    return { ok: false, error: 'Contact form is not configured yet.' }
  }

  const email = payload.email.trim()
  const name = payload.name.trim()
  const message = payload.message.trim()

  if (!isValidEmail(email)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }
  if (name.length < 2) {
    return { ok: false, error: 'Please enter your name.' }
  }
  if (message.length < 10) {
    return { ok: false, error: 'Message must be at least 10 characters.' }
  }
  if (payload.website) {
    return { ok: true }
  }

  const { error } = await supabase.from('contact_submissions').insert({
    email,
    name,
    message,
    subject: payload.subject?.trim() || null,
    source: payload.source,
    website: payload.website || null,
    started_at: payload.startedAt.toISOString(),
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
  })

  if (error) {
    return { ok: false, error: mapSubmissionError(error.message) }
  }

  return { ok: true }
}

export async function submitDiscovery(
  payload: DiscoveryPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!supabase) {
    return { ok: false, error: 'Discovery form is not configured yet.' }
  }

  const email = payload.email.trim()
  const formDurationMs = Date.now() - payload.startedAt.getTime()

  if (!isValidEmail(email)) {
    return { ok: false, error: 'Email is required to submit your project brief.' }
  }
  if (payload.website) {
    return { ok: true }
  }
  if (formDurationMs < 8000) {
    return { ok: false, error: 'Please take a moment to complete the brief before submitting.' }
  }

  const { error } = await supabase.from('discovery_submissions').insert({
    email,
    name: payload.name?.trim() || null,
    answers: payload.answers,
    website: payload.website || null,
    started_at: payload.startedAt.toISOString(),
    form_duration_ms: formDurationMs,
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
  })

  if (error) {
    return { ok: false, error: mapSubmissionError(error.message) }
  }

  return { ok: true }
}
