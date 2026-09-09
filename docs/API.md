# Genius POS Web API

The browser is a client; PostgreSQL is the shared source of truth. Any web, mobile, desktop, kiosk, partner, or future Genius POS client can use this REST API.

## Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/me`

Protected requests use `Authorization: Bearer <token>`.

## Data
- `POST /api/sync/push` — batch upsert client records.
- `GET /api/sync/pull?since=<ISO timestamp>` — incremental sync.
- `GET /api/records/:type` — read a record type.
- `POST /api/records/:type` — create/update a record.
- `DELETE /api/records/:type/:id` — soft delete.
- `GET /api/export` — full tenant JSON export.

Records are tenant-scoped and stored as JSONB so the shared API can evolve without forcing every client onto one rigid schema.

## Production
1. Provision PostgreSQL.
2. Set `DATABASE_URL`, a strong `JWT_SECRET`, and `CORS_ORIGIN`.
3. Run `npm install && npm start` or the supplied Dockerfile.
4. Use HTTPS.
5. Keep payment credentials and raw card data out of browser storage; use a hosted/tokenized PCI-validated payment provider.
