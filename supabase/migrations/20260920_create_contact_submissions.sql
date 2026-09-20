create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null check (char_length(full_name) between 1 and 120),
  company text check (char_length(company) <= 160),
  email text not null check (char_length(email) between 3 and 254),
  phone text not null check (char_length(phone) between 1 and 40),
  investigation_type text check (investigation_type in ('corporate', 'cyber', 'private', 'asset', 'other')),
  message text check (char_length(message) <= 5000),
  status text not null default 'new' check (status in ('new', 'in_progress', 'closed'))
);

alter table public.contact_submissions enable row level security;

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);
