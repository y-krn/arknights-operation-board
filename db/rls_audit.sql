-- RLS audit helper.
-- Run this in Supabase SQL Editor after schema changes.

select
  schemaname,
  tablename,
  rowsecurity
from pg_tables
where schemaname = 'public'
  and tablename in ('events', 'stages', 'squads', 'squad_operators', 'squad_tags', 'reactions')
order by tablename;

select
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
from pg_policies
where schemaname = 'public'
  and tablename in ('events', 'stages', 'squads', 'squad_operators', 'squad_tags', 'reactions')
order by tablename, policyname;

select
  routine_name,
  security_type
from information_schema.routines
where specific_schema = 'public'
  and routine_name in ('set_squad_saved', 'report_squad_success', 'normalize_squad_insert')
order by routine_name;
