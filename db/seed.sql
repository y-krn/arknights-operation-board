insert into public.events (id, title, description, starts_at, ends_at)
values (
  'cloudless-red-smoke',
  '曇りなき紅煙',
  '周回、勲章加工、少人数、低レア。投稿編成をステージ単位で探せます。',
  '2026-05-01',
  '2026-05-15'
)
on conflict (id) do update
set title = excluded.title,
    description = excluded.description,
    starts_at = excluded.starts_at,
    ends_at = excluded.ends_at;

insert into public.stages (event_id, code, label, sort_order)
values
  ('cloudless-red-smoke', 'HS-8', '周回 / 素材', 10),
  ('cloudless-red-smoke', 'HS-9', '勲章加工', 20),
  ('cloudless-red-smoke', 'HS-EX-8', '強襲', 30),
  ('cloudless-red-smoke', 'S-5', '高難度', 40)
on conflict (event_id, code) do update
set label = excluded.label,
    sort_order = excluded.sort_order;
