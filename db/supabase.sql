create extension if not exists pgcrypto;

create table if not exists public.events (
  id text primary key,
  title text not null,
  description text not null default '',
  starts_at date not null,
  ends_at date not null,
  created_at timestamptz not null default now()
);

create table if not exists public.stages (
  id uuid primary key default gen_random_uuid(),
  event_id text not null references public.events(id) on delete cascade,
  code text not null,
  label text not null default '',
  sort_order integer not null default 0,
  unique (event_id, code)
);

create table if not exists public.squads (
  id uuid primary key default gen_random_uuid(),
  event_id text not null references public.events(id) on delete cascade,
  stage_code text not null,
  title text not null check (char_length(title) between 1 and 80),
  author text not null check (char_length(author) between 1 and 40),
  note text not null default '' check (char_length(note) <= 1200),
  link text not null default '' check (link = '' or link ~ '^https?://'),
  saved_count integer not null default 0 check (saved_count >= 0),
  success_reports integer not null default 0 check (success_reports >= 0),
  attempts integer not null default 1 check (attempts >= 1),
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  constraint squads_stage_fk foreign key (event_id, stage_code) references public.stages(event_id, code) on delete cascade
);

create table if not exists public.squad_operators (
  squad_id uuid not null references public.squads(id) on delete cascade,
  name text not null,
  skill_label text not null default '',
  module_label text not null default '',
  slot_order integer not null default 0,
  primary key (squad_id, name)
);

create table if not exists public.squad_tags (
  squad_id uuid not null references public.squads(id) on delete cascade,
  tag text not null,
  primary key (squad_id, tag)
);

create table if not exists public.reactions (
  id uuid primary key default gen_random_uuid(),
  squad_id uuid not null references public.squads(id) on delete cascade,
  reaction_type text not null check (reaction_type in ('save', 'success')),
  client_token text not null,
  created_at timestamptz not null default now(),
  unique (squad_id, reaction_type, client_token)
);

alter table public.events enable row level security;
alter table public.stages enable row level security;
alter table public.squads enable row level security;
alter table public.squad_operators enable row level security;
alter table public.squad_tags enable row level security;
alter table public.reactions enable row level security;

drop policy if exists "events are readable" on public.events;
drop policy if exists "stages are readable" on public.stages;
drop policy if exists "squads are readable" on public.squads;
drop policy if exists "squad operators are readable" on public.squad_operators;
drop policy if exists "squad tags are readable" on public.squad_tags;
drop policy if exists "anonymous squad insert" on public.squads;
drop policy if exists "anonymous operator insert" on public.squad_operators;
drop policy if exists "anonymous tag insert" on public.squad_tags;
drop policy if exists "anonymous reaction insert" on public.reactions;

create policy "events are readable" on public.events for select using (true);
create policy "stages are readable" on public.stages for select using (true);
create policy "squads are readable" on public.squads for select using (true);
create policy "squad operators are readable" on public.squad_operators for select using (true);
create policy "squad tags are readable" on public.squad_tags for select using (true);

create policy "anonymous squad insert" on public.squads for insert with check (
  saved_count = 0
  and success_reports = 0
  and attempts = 1
  and featured = false
);

create index if not exists squads_event_stage_created_idx on public.squads (event_id, stage_code, created_at desc);
create index if not exists squad_operators_name_idx on public.squad_operators (name);
create index if not exists squad_tags_tag_idx on public.squad_tags (tag);

alter table public.squad_operators add column if not exists skill_label text not null default '';
alter table public.squad_operators add column if not exists module_label text not null default '';

drop function if exists public.set_squad_saved(uuid, text, boolean);
drop function if exists public.report_squad_success(uuid, text);
drop function if exists public.create_squad(text, text, text, text, text, text, jsonb, text[]);

create or replace function public.normalize_squad_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as '
begin
  new.saved_count := 0;
  new.success_reports := 0;
  new.attempts := 1;
  new.featured := false;
  return new;
end;
';

drop trigger if exists normalize_squad_insert_before_insert on public.squads;
create trigger normalize_squad_insert_before_insert
before insert on public.squads
for each row
execute function public.normalize_squad_insert();


create or replace function public.create_squad(
  p_event_id text,
  p_stage_code text,
  p_title text,
  p_author text,
  p_note text,
  p_link text,
  p_operators jsonb,
  p_tags text[]
)
returns table (id uuid, created_at timestamptz)
language plpgsql
security definer
set search_path = public
as '
declare
  created_squad public.squads%rowtype;
  operator_item jsonb;
  tag_item text;
  operator_index integer := 0;
begin
  if jsonb_typeof(p_operators) <> ''array'' or jsonb_array_length(p_operators) = 0 then
    raise exception ''operators must be a non-empty array'';
  end if;

  insert into public.squads (event_id, stage_code, title, author, note, link)
  values (p_event_id, p_stage_code, p_title, p_author, coalesce(p_note, ''''), coalesce(p_link, ''''))
  returning * into created_squad;

  for operator_item in select * from jsonb_array_elements(p_operators)
  loop
    insert into public.squad_operators (squad_id, name, skill_label, module_label, slot_order)
    values (
      created_squad.id,
      operator_item->>''name'',
      coalesce(operator_item->>''skill_label'', ''''),
      coalesce(operator_item->>''module_label'', ''''),
      coalesce((operator_item->>''slot_order'')::integer, operator_index)
    );
    operator_index := operator_index + 1;
  end loop;

  if p_tags is not null then
    foreach tag_item in array p_tags
    loop
      if nullif(trim(tag_item), '''') is not null then
        insert into public.squad_tags (squad_id, tag)
        values (created_squad.id, left(trim(tag_item), 24))
        on conflict do nothing;
      end if;
    end loop;
  end if;

  return query select created_squad.id, created_squad.created_at;
end;
';


create or replace function public.set_squad_saved(
  p_squad_id uuid,
  p_client_token text,
  p_saved boolean
)
returns table (new_saved_count integer)
language plpgsql
security definer
set search_path = public
as '
declare
  changed_rows integer;
begin
  if p_saved then
    insert into public.reactions (squad_id, reaction_type, client_token)
    values (p_squad_id, ''save'', p_client_token)
    on conflict (squad_id, reaction_type, client_token) do nothing;

    get diagnostics changed_rows = row_count;

    if changed_rows > 0 then
      update public.squads
      set saved_count = saved_count + 1
      where id = p_squad_id;
    end if;
  else
    delete from public.reactions
    where squad_id = p_squad_id
      and reaction_type = ''save''
      and client_token = p_client_token;

    get diagnostics changed_rows = row_count;

    if changed_rows > 0 then
      update public.squads
      set saved_count = greatest(saved_count - 1, 0)
      where id = p_squad_id;
    end if;
  end if;

  return query
  select s.saved_count
  from public.squads as s
  where s.id = p_squad_id;
end;
';

create or replace function public.report_squad_success(
  p_squad_id uuid,
  p_client_token text
)
returns table (new_success_reports integer, new_attempts integer)
language plpgsql
security definer
set search_path = public
as '
declare
  changed_rows integer;
begin
  insert into public.reactions (squad_id, reaction_type, client_token)
  values (p_squad_id, ''success'', p_client_token)
  on conflict (squad_id, reaction_type, client_token) do nothing;

  get diagnostics changed_rows = row_count;

  if changed_rows > 0 then
    update public.squads
    set success_reports = success_reports + 1,
        attempts = attempts + 1
    where id = p_squad_id;
  end if;

  return query
  select s.success_reports, s.attempts
  from public.squads as s
  where s.id = p_squad_id;
end;
';

notify pgrst, 'reload schema';
