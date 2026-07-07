import { supabase } from '../lib/supabase'

export type ContactSubmission = {
  id: string
  created_at: string
  email: string
  name: string
  subject: string | null
  message: string
  source: string
}

export type DiscoverySubmission = {
  id: string
  created_at: string
  email: string
  name: string | null
  answers: Record<string, string>
}

export type ClientProject = {
  id: string
  client_id: string
  title: string
  status: 'discovery' | 'scoped' | 'active' | 'paused' | 'complete'
  summary: string | null
  next_step: string | null
  created_at: string
  updated_at: string
}

export type SiteProfile = {
  id: string
  role: 'admin' | 'client'
  created_at: string
}

export type PortalData = {
  contacts: ContactSubmission[]
  discoveries: DiscoverySubmission[]
  projects: ClientProject[]
  clients: SiteProfile[]
}

export async function fetchPortalData(): Promise<
  { ok: true; data: PortalData } | { ok: false; error: string }
> {
  if (!supabase) {
    return { ok: false, error: 'Supabase is not configured.' }
  }

  const [contacts, discoveries, projects, clients] = await Promise.all([
    supabase
      .from('contact_submissions')
      .select('id, created_at, email, name, subject, message, source')
      .order('created_at', { ascending: false })
      .limit(100),
    supabase
      .from('discovery_submissions')
      .select('id, created_at, email, name, answers')
      .order('created_at', { ascending: false })
      .limit(100),
    supabase
      .from('client_projects')
      .select('id, client_id, title, status, summary, next_step, created_at, updated_at')
      .order('updated_at', { ascending: false }),
    supabase
      .from('site_profiles')
      .select('id, role, created_at')
      .eq('role', 'client')
      .order('created_at', { ascending: false }),
  ])

  const error =
    contacts.error?.message ??
    discoveries.error?.message ??
    projects.error?.message ??
    clients.error?.message

  if (error) {
    return { ok: false, error }
  }

  return {
    ok: true,
    data: {
      contacts: contacts.data ?? [],
      discoveries: discoveries.data ?? [],
      projects: (projects.data ?? []) as ClientProject[],
      clients: (clients.data ?? []) as SiteProfile[],
    },
  }
}

export type CreateProjectInput = {
  clientId: string
  title: string
  status: ClientProject['status']
  summary?: string
  nextStep?: string
}

export async function createClientProject(
  input: CreateProjectInput,
): Promise<{ ok: true; project: ClientProject } | { ok: false; error: string }> {
  if (!supabase) {
    return { ok: false, error: 'Supabase is not configured.' }
  }

  const { data, error } = await supabase
    .from('client_projects')
    .insert({
      client_id: input.clientId,
      title: input.title.trim(),
      status: input.status,
      summary: input.summary?.trim() || null,
      next_step: input.nextStep?.trim() || null,
      updated_at: new Date().toISOString(),
    })
    .select('id, client_id, title, status, summary, next_step, created_at, updated_at')
    .single()

  if (error || !data) {
    return { ok: false, error: error?.message ?? 'Failed to create project.' }
  }

  return { ok: true, project: data as ClientProject }
}

export async function updateClientProject(
  id: string,
  patch: Partial<Pick<ClientProject, 'title' | 'status' | 'summary' | 'next_step'>>,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!supabase) {
    return { ok: false, error: 'Supabase is not configured.' }
  }

  const { error } = await supabase
    .from('client_projects')
    .update({ ...patch, updated_at: new Date().toISOString() })
    .eq('id', id)

  if (error) {
    return { ok: false, error: error.message }
  }

  return { ok: true }
}

export async function deleteClientProject(
  id: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!supabase) {
    return { ok: false, error: 'Supabase is not configured.' }
  }

  const { error } = await supabase.from('client_projects').delete().eq('id', id)

  if (error) {
    return { ok: false, error: error.message }
  }

  return { ok: true }
}
