# Operation Board

Arknights event squad sharing MVP.

## Local

Open `index.html` directly in a browser. With the default empty `config.js`, the app uses `localStorage`.

## Supabase Setup

1. Create a Supabase project.
2. Run `db/supabase.sql` in the SQL editor.
3. Run `db/seed.sql`.
4. Copy `config.example.js` to `config.js`.
5. Set `supabase.url` and `supabase.anonKey` in `config.js`.
6. Open `index.html`.

`config.js` is ignored by git so public keys and environment-specific values do not get committed.

## New Event

Use `db/event_template.sql` to add the next event and stages. The public app reads the active event from Supabase, so no code change is needed when the event changes.

## Checks

```sh
npm run check
npm run test:browser
```
