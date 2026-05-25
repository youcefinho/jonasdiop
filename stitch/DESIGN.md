# DESIGN SYSTEM — Jonas Diop / DIOP Stratégies Internationales

## Brand positioning

Premium business consulting site for **Jonas Diop**, founder of **DIOP Stratégies Internationales Inc.** (Montréal + worldwide).

- **Métier**: Architecte d'affaires, scaling stratégique, méthodologie propriétaire CDT™ (Compression Dynamique du Temps)
- **Promesse maître**: "Ajouter un zéro à ton CA en récupérant 50% de ton temps"
- **Avatar**: Entrepreneurs, coachs, experts à 100K-1M$ CA, prêts à scaler sans s'épuiser
- **Style cible**: Élégant, haut de gamme, autoritaire, sobre — institutional premium
- **Tone**: Pragmatisme + Vision + Levier (3 valeurs brief)
- **Stats trust**: 15+ ans expérience / 857+ entrepreneurs accompagnés / 31M$+ générés par clients
- **Bilingual**: FR (default Québec) + EN (Worldwide)

## Color palette — Dark luxe + accent gold sobre

### Base / surfaces (dark warm)
- `--bg-base`: #0a0a0a — primary background (noir non-pur, very subtle warm undertone)
- `--bg-elevated`: #141414 — cards, panels, section blocks
- `--bg-overlay`: #1f1f1f — modals, dropdowns, hover states

### Text (warm ivory, not pure white)
- `--text-primary`: #f5f5f0 — ivoire warm (high-end reading comfort, more premium than #fff)
- `--text-secondary`: #a8a39a — dimmed (eyebrows, sub-titles)
- `--text-tertiary`: #8a8377 — helper, captions, footer links

### Accent gold sobre (SIGNATURE)
- `--accent-gold`: #c9a572 — champagne mat (CTA, highlights, logo dot, signature lines) — NOT bright gold, mature champagne tone
- `--accent-gold-soft`: #d4bf9a — overlays, halos diffus
- `--accent-gold-deep`: #6d553a — shadow gold, depth tones

### Borders / dividers
- `--border-subtle`: rgba(245, 245, 240, 0.08) — fine dividers
- `--border-gold`: rgba(201, 165, 114, 0.25) — accent borders sur cards programmes

### Halos / glows (signature effects)
- `--glow-gold`: radial-gradient(circle, rgba(201, 165, 114, 0.15) 0%, transparent 70%)
- `--glow-white`: radial-gradient(circle, rgba(245, 245, 240, 0.08) 0%, transparent 70%)

## Typography

### Headlines (display geometric modern)
- **Family**: Space Grotesk (primary) / Geist (fallback) / Poppins (legacy fallback)
- **Weights**: 400 (light), 500 (default), 600 (rare emphasis)
- **Letter-spacing**: tight (-0.025em to -0.04em) — premium signature
- **Line-height**: 1.05 (H1-H2), 1.15 (H3)
- **Sizes** (clamp responsive d'entrée):
  - H1: clamp(3rem, 5.5vw, 5.5rem) — 48-88px
  - H2: clamp(2.25rem, 4vw, 4rem) — 36-64px
  - H3: clamp(1.5rem, 2.5vw, 2.25rem) — 24-36px

### Body
- **Family**: Inter (primary) / Geist Sans (alternative)
- **Weights**: 400 (default), 500 (emphasis)
- **Line-height**: 1.6 (paragraph), 1.5 (small)
- **Sizes**:
  - Body: clamp(1rem, 1.1vw, 1.125rem) — 16-18px
  - Small: 0.875rem — 14px

### Eyebrow (SIGNATURE label)
- **Family**: Space Grotesk uppercase
- **Weight**: 500
- **Letter-spacing**: 0.2em (widest tracking)
- **Size**: 0.75rem - 0.875rem (12-14px)
- **Color**: --accent-gold (signature) OR --text-tertiary
- **Pattern**: "EYEBROW LABEL" placed before every section H1/H2 (e.g., "MÉTHODOLOGIE", "PROGRAMMES", "TÉMOIGNAGES")
- **Optional dot accent**: gold filled dot before/after eyebrow label

## Editorial principles V6 Intralys

### Layout grammar
- **Generous whitespace** — container max-width 1280px, generous lateral padding
- **Asymmetric splits 50/50** (Dan Martell pattern) — image left + text right, alternated per section
- **Section numbering 01-05** — large outline/filigrane gold numbers grouping sequences (process steps, pillars, advantages)
- **Alternance hero centered ↔ split sections** — prevents monotone scroll
- **Symmetric centered** for trust bands, CTAs finals, FAQ

### Signature visual effects
- **Halo gold radial** behind primary CTAs and signature icons (radial-gradient gold soft)
- **Sheen gold on cards hover** — subtle diagonal gold sheen animation on hover (skew gradient)
- **Eyebrow uppercase + dot** — eyebrow gold + filled dot signature pattern
- **Filigrane numbers** — large outline numbers (200% opacity) behind section titles (process, stats)
- **Glow background sections** — radial subtle white/gold on hero + final CTA sections
- **Sticky nav backdrop-blur** — nav transparent on hero, dark+blur after scroll past hero

### Components signature
- **CTAs pill ultra-arrondi** — border-radius 9999px (full pill), padding 1rem 2rem
  - Primary: filled gold (#c9a572 bg + #0a0a0a text)
  - Secondary: transparent bordered (1px gold + text gold)
  - Hover: halo gold intensify + scale(1.02)
- **Cards programmes** — bg --bg-elevated, border-subtle, padding generous, hover lift + sheen gold
- **Trust band stats** — H1 number XL (CountUp animation on scroll-into-view) + caption petit gold uppercase
- **Testimonials** — pull-quote large italic + photo circulaire + nom + société + résultat chiffré accent gold
- **Stats numbers** — Space Grotesk weight 500, very large (clamp 4rem-7rem), color gold filigrane outline

### Motion (motion/react / Framer Motion)
- **Spring transitions**, not linear ease
- **Entrance**: opacity 0 + translate-y(20px) → opacity 1 + translate-y(0), duration 0.6s
- **Hover**: scale(1.02) + glow gold intensify, transition 200ms
- **Scroll reveals**: stagger children 0.05s, threshold 0.2

### Imagery style
- **Photos cinematic dark warm tones** — ambient lighting (Edison bulb warm)
- **Portraits low-key lighting** — premium business attire (costume sombre, fond noir)
- **Black & white photography preferred** for testimonials
- **Hero photo Jonas**: portrait demi-buste, regard caméra, costume noir sur fond noir warm, éclairage rim light gold subtil

## ANTI-PATTERNS strict (do NOT generate)

1. ❌ Pure white background (#fff) — breaks dark theme integrity
2. ❌ Saturated colors (red, blue, green pure) — keep monochrome + champagne gold only
3. ❌ Sans-serif rounded fonts (Quicksand, Comfortaa, Nunito) — too playful, breaks premium tone
4. ❌ Serif headlines (Playfair Display, Cormorant Garamond, Lora) — too "old money editorial", we want modern premium
5. ❌ Neon gradients, web3 aesthetic, glassmorphism overdone, cyberpunk
6. ❌ Generic stock photos (overused Unsplash thumbnails, AI-generated faces with uncanny valley)
7. ❌ Quirky illustrations (Notion hand-drawn, Stripe playful, Mailchimp mascots) — breaks authority
8. ❌ **Pricing displayed publicly** — Jonas requires qualification call first (FAQ Q4)
9. ❌ **Lead magnet popup** ("Get free PDF / cheatsheet") — brief explicitly says NO freebie
10. ❌ Comic Sans, Papyrus, Curlz, Brush Script (banned)
11. ❌ Emoji overload in copy (we use sparingly, only for testimonials or eyebrows occasionally)
12. ❌ "AI-powered" badges, "trusted by 1M users" inflated claims without proof

## Style references / mood inspirations

- **Dan Martell** (danmartell.com) — dark authority + Bebas Neue display + cinematic warm photos
- **ConsultTitan** (consulting-bussines-template.framer.website) — monochrome dark + Poppins tight + pill CTAs + glow gradients
- **Goldman Sachs landing** — institutional gold accents + restrained serif accents + spacious editorial layout
- **Apple keynote slides** — generous whitespace + impeccable typography + restrained color
- **Robb Report** magazine — luxury editorial print with gold accent restraint
