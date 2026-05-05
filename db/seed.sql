insert into public.events (id, title, description, starts_at, ends_at)
values (
  'act46side',
  '聖山降臨1101',
  'サイドストーリー / 戦闘ステージ',
  '2026-04-14',
  '2099-12-31'
)
on conflict (id) do update
set title = excluded.title,
    description = excluded.description,
    starts_at = excluded.starts_at,
    ends_at = excluded.ends_at;

insert into public.stages (event_id, code, label, sort_order)
values
  ('act46side', 'OS-1', '悲嘆の声', 2001),
  ('act46side', 'OS-10', '我らのイェラガンドに', 2010),
  ('act46side', 'OS-S-2', '雪だるま作り', 4002),
  ('act46side', 'OS-EX-8', '聖山の下に', 3008)
on conflict (event_id, code) do update
set label = excluded.label,
    sort_order = excluded.sort_order;
