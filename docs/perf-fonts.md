# Fonts strategy

- Self-host via Fontsource (no CDN, no FOIT, GDPR-safe)
- Display = Space Grotesk Variable (latin subset suffit FR-CA + EN)
- Body = Inter Variable
- Sprint 1+ : ajouter `preloadCriticalFonts` Vite plugin (cf. oceanne pattern) pour LCP < 1.5s
