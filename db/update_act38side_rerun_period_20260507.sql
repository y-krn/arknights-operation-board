-- Mark 幕開く者たち as the active rerun period without splitting event_id.
-- Source event/activity: act38side
-- Rerun period: 2026-05-07 04:00 JST - 2026-05-17 03:59 JST
-- Note: events.starts_at / ends_at are date columns, so the time part is not stored.

begin;

update public.events
set
  title = '幕開く者たち',
  description = '復刻サイドストーリー / 26戦闘ステージ',
  starts_at = '2026-05-07',
  ends_at = '2026-05-17'
where id = 'act38side';

-- Ensure the existing act38side stage master is present.
-- Re-run db/event_master_seed.sql first if this returns 0 rows in your project.
select id, title, description, starts_at, ends_at
from public.events
where id = 'act38side';

commit;
