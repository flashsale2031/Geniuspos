# Genius POS build manifest

Source package:
`Bonds_Bank_POS_Visa_Direct_Hosted_Tokenized_Card_v1.1.zip`

Rebrand applied:
- Bondsmall* JavaScript globals -> Genius* globals
- Bondsmall catalog events -> Genius catalog events
- BondsMallOpenProductById -> GeniusPOSOpenProductById
- BONDS20 -> GENIUS20
- BONDS MALL visible footer -> GENIUS POS
- account script reference -> genius-account.js
- product URL fallback uses the current Genius POS origin

Security behavior preserved:
- no PAN/CVV/expiry in localStorage
- hosted/tokenized card entry boundary
- server-side Visa credentials
- safe EmailJS fields only

The original package is an integration component and still expects the host storefront/catalog/account DOM and supporting scripts.
