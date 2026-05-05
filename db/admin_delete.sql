-- Operation Board admin delete template.
-- Replace the UUID values with target squad ids.
-- squad_operators, squad_tags, and reactions are deleted by on delete cascade.

delete from public.squads
where id in (
  '00000000-0000-4000-8000-000000000000'
);

notify pgrst, 'reload schema';
