# Genius POS — Modern Upgrade

Genius POS is a user-ID-based POS workspace upgraded with 20 high-impact modern capabilities while retaining the supplied payment integration documentation and dedicated account pages.

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

## Security boundary

This repository is a browser prototype. Do not use localStorage as a secure identity database or store raw PAN, CVV, PIN, payment credentials, or production secrets there. Production authentication should use a server-side identity/session service. Production card collection should use the hosted/tokenized payment boundary documented in `hosted-card-integration.md`.

Production passkeys require a server-generated WebAuthn challenge, origin/RP validation, credential persistence and replay protection.

## Pages

Authentication: `pages/signin.html`, `pages/signup.html`, `pages/onboarding.html`, `pages/two-step.html`.
Account: `pages/my-profile.html`, `pages/account.html`, `pages/login-security.html`, `pages/business-information.html`, `pages/connected-accounts.html`, `pages/payment.html`, `pages/help.html`, `pages/support.html`.
Operations: `pages/dashboard.html`, `pages/pos.html`, `pages/analytics.html`, `pages/customers.html`, `pages/transactions.html`, `pages/send.html`, `pages/receive.html`, `pages/inventory.html`, `pages/website.html`, `pages/employees.html`.

## Run

```bash
npm install
npm start
```

Serve the static pages from HTTP(S) rather than `file://` for service workers and WebAuthn.
