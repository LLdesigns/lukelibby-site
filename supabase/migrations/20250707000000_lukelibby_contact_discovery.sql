-- lukelibby.com portfolio: contact + discovery intake (project woeywuplfbsbgpxeidmv)

create table if not exists public.site_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'client' check (role in ('admin', 'client')),
  created_at timestamptz not null default now()
);

alter table public.site_profiles enable row level security;

drop policy if exists "site_profiles_read_own" on public.site_profiles;
create policy "site_profiles_read_own"
  on public.site_profiles for select
  to authenticated
  using (id = auth.uid());

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  name text not null,
  subject text,
  message text not null,
  source text not null default 'contact',
  website text,
  started_at timestamptz,
  user_agent text,
  constraint contact_email_format check (
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  ),
  constraint contact_name_len check (char_length(trim(name)) between 2 and 120),
  constraint contact_message_len check (char_length(trim(message)) between 10 and 5000),
  constraint contact_honeypot_empty check (website is null or website = ''),
  constraint contact_source_valid check (source in ('contact', 'consulting', 'homepage'))
);

create table if not exists public.discovery_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  name text,
  answers jsonb not null default '{}'::jsonb,
  website text,
  started_at timestamptz not null,
  form_duration_ms integer not null,
  user_agent text,
  constraint discovery_email_format check (
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  ),
  constraint discovery_honeypot_empty check (website is null or website = ''),
  constraint discovery_min_duration check (form_duration_ms >= 8000),
  constraint discovery_answers_object check (jsonb_typeof(answers) = 'object')
);

create index if not exists contact_submissions_email_created_idx
  on public.contact_submissions (lower(email), created_at desc);

create index if not exists discovery_submissions_email_created_idx
  on public.discovery_submissions (lower(email), created_at desc);

create or replace function public.check_submission_rate_limit(
  p_table text,
  p_email text,
  p_max int default 3,
  p_window interval default interval '1 hour'
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  recent_count int;
begin
  if p_table = 'contact' then
    select count(*) into recent_count
    from public.contact_submissions
    where lower(email) = lower(p_email)
      and created_at > now() - p_window;
  elsif p_table = 'discovery' then
    select count(*) into recent_count
    from public.discovery_submissions
    where lower(email) = lower(p_email)
      and created_at > now() - p_window;
  else
    return false;
  end if;
  return recent_count < p_max;
end;
$$;

create or replace function public.enforce_contact_rate_limit()
returns trigger
language plpgsql
as $$
begin
  if not public.check_submission_rate_limit('contact', NEW.email) then
    raise exception 'rate_limit_exceeded' using errcode = 'P0001';
  end if;
  return NEW;
end;
$$;

drop trigger if exists contact_submissions_rate_limit on public.contact_submissions;
create trigger contact_submissions_rate_limit
  before insert on public.contact_submissions
  for each row execute function public.enforce_contact_rate_limit();

create or replace function public.enforce_discovery_rate_limit()
returns trigger
language plpgsql
as $$
begin
  if not public.check_submission_rate_limit('discovery', NEW.email) then
    raise exception 'rate_limit_exceeded' using errcode = 'P0001';
  end if;
  return NEW;
end;
$$;

drop trigger if exists discovery_submissions_rate_limit on public.discovery_submissions;
create trigger discovery_submissions_rate_limit
  before insert on public.discovery_submissions
  for each row execute function public.enforce_discovery_rate_limit();

create or replace function public.is_site_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.site_profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

alter table public.contact_submissions enable row level security;
alter table public.discovery_submissions enable row level security;

drop policy if exists "anon_insert_contact" on public.contact_submissions;
create policy "anon_insert_contact"
  on public.contact_submissions for insert
  to anon, authenticated
  with check (
    (website is null or website = '')
    and char_length(trim(message)) >= 10
  );

drop policy if exists "admin_read_contact" on public.contact_submissions;
create policy "admin_read_contact"
  on public.contact_submissions for select
  to authenticated
  using (public.is_site_admin());

drop policy if exists "anon_insert_discovery" on public.discovery_submissions;
create policy "anon_insert_discovery"
  on public.discovery_submissions for insert
  to anon, authenticated
  with check (
    (website is null or website = '')
    and form_duration_ms >= 8000
  );

drop policy if exists "admin_read_discovery" on public.discovery_submissions;
create policy "admin_read_discovery"
  on public.discovery_submissions for select
  to authenticated
  using (public.is_site_admin());

grant insert on public.contact_submissions to anon, authenticated;
grant insert on public.discovery_submissions to anon, authenticated;
grant select on public.contact_submissions to authenticated;
grant select on public.discovery_submissions to authenticated;
