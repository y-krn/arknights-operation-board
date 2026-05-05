select table_schema, table_name
from information_schema.tables
where table_schema = 'public'
  and table_name in (
    'events',
    'stages',
    'squads',
    'squad_operators',
    'squad_tags',
    'reactions'
  )
order by table_name;

select id, title, starts_at, ends_at
from public.events
order by starts_at desc;

select event_id, code, label, sort_order
from public.stages
order by event_id, sort_order;

notify pgrst, 'reload schema';
