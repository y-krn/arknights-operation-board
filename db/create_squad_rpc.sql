-- Create squads through a single RPC so child table inserts do not need public insert policies.

drop function if exists public.create_squad(text, text, text, text, text, text, jsonb, text[]);

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

notify pgrst, 'reload schema';
