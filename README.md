# Genius POS — Web Integrated / Multi-Platform

Genius POS is a user-ID-based POS workspace upgraded with 20 modern capabilities and now connected to a shared PostgreSQL REST API. The browser is a client; the API/database is the shared source of truth for web, mobile, desktop, kiosk, partner and future clients.

## 20 upgrades

1. Passkey-ready authentication — WebAuthn/FIDO2 integration hook.
2. Password hashing — SHA-256 browser demo hashing with migration support.
3. Optional two-step authentication.
4. Offline-first shell with service-worker caching.
5. Progressive Web App manifest.
6. Camera/barcode-ready checkout.
7. Dedicated checkout terminal.
8. Instant product search.
9. Picture-first catalog.
10. Smart cart controls and persistence.
11. Tax calculation.
12. Discount calculation slot.
13. Hold orders with audit events.
14. Receipt preview.
15. Card/Cash payment routing.
16. Low-stock visual intelligence.
17. Business analytics.
18. User-ID audit trail.
19. Dark mode.
20. Responsive/accessibility foundation.

## Web integration

- `server/index.mjs` — Express REST API + PostgreSQL shared data layer.
- `assets/api.js` — browser API client, authentication token handling, incremental sync and JSON export.
- `docs/API.md` — endpoint guide.
- `docs/openapi.yaml` — API contract.
- `Dockerfile` — container deployment.

## Run

```bash
cp .env.example .env
npm install
npm start
```

Required production settings: `DATABASE_URL` and a strong random `JWT_SECRET`. Configure `CORS_ORIGIN` for the web/mobile origins that are allowed to call the API. Tables are initialized automatically on first API start.

Set `window.GENIUSPOS_API_URL` before the browser API client loads if the API lives on another domain, or save the API URL in `localStorage` under `geniuspos.apiUrl`.

## Security boundary

Do not use browser localStorage as the production identity database and never store raw PAN, CVV, PIN, payment credentials or production secrets there. Production card collection should continue through the hosted/tokenized PCI-validated payment boundary documented in `hosted-card-integration.md`. Use HTTPS in production.
