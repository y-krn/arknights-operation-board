# Operation Board

Arknights event squad sharing MVP.

## Local

Open `index.html` directly in a browser.

The committed `config.public.js` points to the Supabase project used by the app. If you want to use a different Supabase project locally, copy `config.example.js` to `config.js`, edit it, and temporarily change the script tag in `index.html` / `api/admin.view.html` while developing.

## Supabase Setup

1. Create a Supabase project.
2. Run `db/supabase.sql` in the SQL editor.
3. Run `db/operator_builds.sql`.
4. Run `db/admin_delete.sql`.
5. Run `db/create_squad_rpc.sql`.
6. Deploy the app code that calls `create_squad`.
7. Run `db/rls_hardening.sql`.
8. Run `db/event_master_seed.sql`.
9. Optionally run `db/rls_audit.sql` and confirm RLS policies.
10. Confirm `config.public.js` has the project URL and anon public key.
11. Open `index.html`.

Supabase anon keys are public browser keys. Keep Row Level Security enabled and never put a service role key in the browser. Anonymous users can read public data and create new posts through RPC, but direct reaction/operator/tag inserts are disabled and squad insert counters are normalized by trigger.

## Event Master

The event master is generated from IPA dump files:

```sh
node scripts/generate-event-master.js
node scripts/generate-event-seed-sql.js
```

Then run `db/event_master_seed.sql` in Supabase.

To remove the old placeholder event, run `db/remove_legacy_cloudless_red_smoke.sql`.

## Publish

This is a static app. Deploy the repository root to any static hosting provider.

Set Vercel environment variables before deploying:

- `ADMIN_USER`
- `ADMIN_PASSWORD`

`/admin` and `/admin.html` are served through a Basic-auth protected Vercel Function. The local `api/admin.view.html` file is still used for development and browser tests.

Before deploying:

```sh
npm run predeploy
```

Required public files include:

- `index.html`
- `api/admin.view.html`
- `config.public.js`
- `app.js`
- `admin.js`
- `styles.css`
- generated catalog files such as `event-master.js`, `operators.js`, `skills.js`, `modules.js`, and `operator-icons.js`
- `assets/operator-icons/`

`api/admin.view.html` is not intended to be served directly in production. `/admin` and `/admin.html` are protected by Basic auth, and the page only generates SQL for a project owner to run manually in Supabase.

## Checks

```sh
npm run check
npm run test:browser
```
