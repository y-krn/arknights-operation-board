-- Remove the old placeholder event from Supabase.
-- Related stages, squads, operators, tags, and reactions are removed by cascade.

delete from public.events
where id = 'cloudless-red-smoke';

notify pgrst, 'reload schema';
