# DESIGN SYSTEM v2 — Jonas Diop (Silver Primary)

## Brand positioning

Premium business consulting site for **Jonas Diop**, founder of **DIOP Stratégies Internationales Inc.** (Montréal + worldwide).

- **Métier**: Architecte d'affaires, scaling stratégique, méthodologie propriétaire CDT™ (Compression Dynamique du Temps)
- **Promesse**: "Ajouter un zéro à votre chiffre d'affaires en récupérant 50% de votre temps"
- **Avatar**: Entrepreneurs, coachs, experts à 100K-1M$ CA
- **Style cible**: Élégant, haut de gamme, autoritaire — institutional premium moderne (Apple / Tesla / Patek Philippe Platinum)
- **Stats trust REAL**: 857+ entrepreneurs / 31M$+ générés / 15 ans expérience
- **Bilingual**: FR (default Québec) + EN (Worldwide)

## Color palette — Dark luxe + SILVER PRIMARY + Gold rare signature

### Base / surfaces (dark warm)
- `--bg-base`: #0a0a0a — primary background (noir non-pur warm subtle)
- `--bg-elevated`: #141414 — cards, panels
- `--bg-overlay`: #1f1f1f — modals, dropdowns

### Text (warm ivory)
- `--text-primary`: #f5f5f0 — ivoire warm (NOT pure white)
- `--text-secondary`: #a8a39a — dimmed
- `--text-tertiary`: #8a8377 — helper, captions

### Accent SILVER PRIMARY (signature dominante)
- `--accent-silver`: #c0c0c5 — platine élégant froid neutre (PRIMARY pour CTAs, highlights, signature lines)
- `--accent-silver-soft`: #d4d4d8 — overlays, halos diffus
- `--accent-silver-deep`: #5e5e6a — shadow silver, depth

### Accent GOLD RARE (bijou signature parcimonieux)
- `--accent-gold`: #c9a572 — champagne mat — USAGE LIMITÉ aux touchpoints suivants UNIQUEMENT:
  - Logo dot accent (LA signature visuelle de Jonas Diop)
  - CDT™ trademark marker (™ et le mot CDT en gold)
  - Stats trust band (857+ / 31M$+ / 15 ans en gold uniquement)
  - Hover focal sur 1 CTA exceptionnel primary (le "Prendre rendez-vous" final)
- `--accent-gold-soft`: #d4bf9a — halos rares pour gold touchpoints

### Borders / dividers
- `--border-subtle`: rgba(245, 245, 240, 0.08) — fine dividers
- `--border-silver`: rgba(192, 192, 197, 0.20) — accent borders cards programmes

### Halos / glows
- `--glow-silver`: radial-gradient(circle, rgba(192, 192, 197, 0.12) 0%, transparent 70%)
- `--glow-gold-rare`: radial-gradient(circle, rgba(201, 165, 114, 0.15) 0%, transparent 70%) — USED RARELY only on signature touchpoints

## Typography (UNCHANGED)

### Headlines (display geometric)
- Family: **Space Grotesk** (primary)
- Weights: 400, 500 (default), 600
- Letter-spacing: tight (-0.025em to -0.04em)
- Sizes: H1 clamp(3rem, 5.5vw, 5.5rem) / H2 clamp(2.25rem, 4vw, 4rem) / H3 clamp(1.5rem, 2.5vw, 2.25rem)

### Body
- Family: **Inter**
- Weights: 400 default, 500 emphasis
- Sizes: Body clamp(1rem, 1.1vw, 1.125rem) / Small 0.875rem

### Eyebrow (SIGNATURE)
- Family: Space Grotesk uppercase
- Weight: 500
- Letter-spacing: 0.2em (widest tracking)
- Size: 0.75-0.875rem
- Color: **--accent-silver (primary)** OR --text-tertiary
- Pattern: "EYEBROW LABEL" with optional **GOLD dot accent** (filled dot before label = rare signature use)

## Editorial principles V6 Intralys

### Layout grammar
- Generous whitespace, container max-width 1280px, 80px lateral margins
- Asymmetric splits 50/50 alternated per section
- Section numbering 01-05 large outline silver filigrane
- Alternance hero centered ↔ split sections
- 160px section gaps

### Signature visual effects
- **Halo silver radial** behind CTAs primary
- **Halo gold rare** ONLY behind: logo, CDT™ marker, final big stat number
- **Sheen silver on cards hover** — diagonal silver gradient sweep
- **Eyebrow uppercase + gold dot** — gold dot is the ONLY rare signature use of gold in nav/section labels
- **Filigrane numbers silver** — large outline numbers behind section titles
- **Sticky nav backdrop-blur** — nav transparent on hero, dark+blur after scroll

### Components signature
- **CTAs pill ultra-arrondi** (border-radius 9999px, padding 1rem 2rem):
  - **Primary (silver)**: filled silver (#c0c0c5 bg + #0a0a0a text)
  - **Secondary (transparent silver)**: transparent bordered (1px silver + text silver)
  - **HERO FINAL CTA "Prendre rendez-vous" only**: filled GOLD (#c9a572 bg + #0a0a0a text) — used ONCE in hero + once in final CTA section as signature commitment moment
  - Hover: scale(1.02) + glow intensify
- **Cards programmes**: bg --bg-elevated, border-silver subtle, padding generous, hover lift + sheen silver
- **Trust band stats** (857+ / 31M$+ / 15 ans): H1 number XL in GOLD (only stats use gold) + caption petit silver uppercase
- **Testimonials**: pull-quote large italic + photo circulaire + nom + société + résultat chiffré **silver** (not gold)
- **CDT™ branding mentions**: always with GOLD ™ marker + GOLD "CDT" letters (this is the proprietary methodology badge)

### Motion
- Spring transitions (motion/react)
- Entrance: opacity 0 + translate-y(20px) → 0
- Hover: scale(1.02) + glow intensify
- Scroll reveals: stagger children 0.05s

### Imagery style
- Photos cinematic dark cool/neutral tones (silver-toned lighting, less Edison warm orange)
- Portraits low-key with cool rim light SILVER tone
- Black & white photography preferred for testimonials
- Hero photo Jonas: portrait costume noir sur fond noir, éclairage rim light **SILVER COOL** (not gold warm)

## ANTI-PATTERNS strict

1. ❌ Gold dominant (gold must remain RARE signature — silver is the primary metal)
2. ❌ Pure white background (#fff) — keep warm dark
3. ❌ Saturated colors (red, blue, green) — monochrome + silver + gold rare only
4. ❌ Sans-serif rounded fonts (Quicksand, Comfortaa) — too playful
5. ❌ Serif headlines (Playfair, Cormorant) — too "old money"
6. ❌ Pure bright chrome silver (#fff or #d8d8d8 too cold) — we want #c0c0c5 platine élégant
7. ❌ Yellow saturated gold — we want mature champagne #c9a572 only
8. ❌ Neon gradients, web3, glassmorphism overdone
9. ❌ Stock photos generic, AI faces uncanny
10. ❌ Pricing displayed publicly — Jonas requires qualification call
11. ❌ Lead magnet popup ("Get free PDF")
12. ❌ Comic Sans, Papyrus, Curlz (banned)
13. ❌ "AI-powered" badges, inflated trust claims

## Style references / mood

- **Apple Pro/Vision Pro landing** — silver primary metal, dark warm, generous space, modern premium
- **Tesla Model S landing** — institutional silver, dark, restrained accents
- **Patek Philippe Calatrava Platinum** — silver/platinum metal aesthetic, rare gold accents for signature pieces
- **Goldman Sachs landing** — dark institutional with rare gold accents
- **Dan Martell** (danmartell.com) — dark authority + cinematic photos (we adopt the dark warm but with silver primary instead of his magenta)
- **ConsultTitan template** — dark monochrome + pill CTAs + glow gradients
