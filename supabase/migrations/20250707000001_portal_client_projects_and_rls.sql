-- Client portal: projects, own-submission reads, admin profile access

create table if not exists public.client_projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(trim(title)) between 3 and 120),
  status text not null default 'discovery' check (
    status in ('discovery', 'scoped', 'active', 'paused', 'complete')
  ),
  summary text check (summary is null or char_length(summary) <= 2000),
  next_step text check (next_step is null or char_length(next_step) <= 500),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists client_projects_client_id_idx
  on public.client_projects (client_id, updated_at desc);

alter table public.client_projects enable row level security;

drop policy if exists "admin_all_client_projects" on public.client_projects;
create policy "admin_all_client_projects"
  on public.client_projects for all
  to authenticated
  using (public.is_site_admin())
  with check (public.is_site_admin());

drop policy if exists "client_read_own_projects" on public.client_projects;
create policy "client_read_own_projects"
  on public.client_projects for select
  to authenticated
  using (client_id = auth.uid());

grant select on public.client_projects to authenticated;
grant insert, update, delete on public.client_projects to authenticated;

drop policy if exists "client_read_own_contact" on public.contact_submissions;
create policy "client_read_own_contact"
  on public.contact_submissions for select
  to authenticated
  using (
    lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );

drop policy if exists "client_read_own_discovery" on public.discovery_submissions;
create policy "client_read_own_discovery"
  on public.discovery_submissions for select
  to authenticated
  using (
    lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );

drop policy if exists "admin_read_all_profiles" on public.site_profiles;
create policy "admin_read_all_profiles"
  on public.site_profiles for select
  to authenticated
  using (public.is_site_admin());

create or replace function public.handle_new_site_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.site_profiles (id, role)
  values (new.id, 'client')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_site_profile on auth.users;
create trigger on_auth_user_created_site_profile
  after insert on auth.users
  for each row execute function public.handle_new_site_user();
