-- Copy this file when a new event starts.
-- Change event id, title, dates, and stage rows.

insert into public.events (id, title, description, starts_at, ends_at)
values (
  'new-event-id',
  '新イベント名',
  '周回、勲章加工、少人数、低レア。投稿編成をステージ単位で探せます。',
  '2026-06-01',
  '2026-06-15'
)
on conflict (id) do update
set title = excluded.title,
    description = excluded.description,
    starts_at = excluded.starts_at,
    ends_at = excluded.ends_at;

insert into public.stages (event_id, code, label, sort_order)
values
  ('new-event-id', 'EV-1', '通常', 10),
  ('new-event-id', 'EV-2', '通常', 20),
  ('new-event-id', 'EV-8', '周回 / 素材', 80),
  ('new-event-id', 'EV-EX-8', '強襲', 180)
on conflict (event_id, code) do update
set label = excluded.label,
    sort_order = excluded.sort_order;

notify pgrst, 'reload schema';
