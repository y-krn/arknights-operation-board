alter table public.squad_operators add column if not exists skill_label text not null default '';
alter table public.squad_operators add column if not exists module_label text not null default '';

notify pgrst, 'reload schema';
