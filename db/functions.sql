drop function if exists public.set_squad_saved(uuid, text, boolean);
drop function if exists public.report_squad_success(uuid, text);

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
