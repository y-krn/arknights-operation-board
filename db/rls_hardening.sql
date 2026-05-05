-- Harden anonymous access for the public MVP.
--
-- Public users may:
-- - read events, stages, squads, operators, and tags
-- - create squads with normal initial counters
-- - attach operators/tags to squads
-- - call RPC functions for save/success reactions
--
-- Public users may not:
-- - insert reactions directly
-- - create a squad with forged counters or featured=true

drop policy if exists "anonymous reaction insert" on public.reactions;

drop policy if exists "anonymous squad insert" on public.squads;
create policy "anonymous squad insert" on public.squads
for insert
with check (
  saved_count = 0
  and success_reports = 0
  and attempts = 1
  and featured = false
);

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

notify pgrst, 'reload schema';
