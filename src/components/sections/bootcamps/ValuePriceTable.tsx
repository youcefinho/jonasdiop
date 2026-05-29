import { ArrowRight, Check } from 'lucide-react';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { BootcampVariant } from './BootcampHeroPattern';

interface ValueRow {
  /** Libellé du composant de valeur (ex. "3 jours immersifs"). */
  readonly label: string;
  /** Valeur formatée (ex. "3 997$"). */
  readonly value: string;
}

interface ValuePriceTableProps {
  /** Eyebrow uppercase optionnel. */
  readonly eyebrow?: string;
  /** Headline H2 (déjà traduit, ex. "Récap valeur"). */
  readonly headline?: string;
  /** Lignes de valeur cumulées. */
  readonly valueRows: readonly ValueRow[];
  /** Valeur totale calculée (formatée, ex. "8 991$"). */
  readonly valueTotal: string;
  /** Label "Valeur totale" (déjà traduit). */
  readonly valueTotalLabel?: string;
  /** Prix lancement (formatté, ex. "997$ CAD"). Highlighted. */
  readonly priceLaunch: string;
  /** Label "Prix lancement" (déjà traduit). */
  readonly priceLaunchLabel?: string;
  /** Prix régulier (formatté, ex. "1 497$ CAD"). Affiché barré. */
  readonly priceRegular: string;
  /** Label "Prix régulier" (déjà traduit). */
  readonly priceRegularLabel?: string;
  /** Options de paiement (ex. "Comptant", "3x sans frais"). */
  readonly paymentOptions: readonly string[];
  /** Label CTA primaire (mode pré-lancement : "Sois notifié..."). */
  readonly ctaPrimaryLabel: string;
  /** Handler CTA primaire (scroll vers capture email / form). */
  readonly onCtaPrimaryClick?: () => void;
  /** Label CTA secondaire optionnel (ex. "Poser une question"). */
  readonly ctaSecondaryLabel?: string;
  /** Handler CTA secondaire. */
  readonly onCtaSecondaryClick?: () => void;
  /** Note mode pré-lancement (ex. "Inscriptions à venir — early-bird"). */
  readonly preLaunchNote?: string;
  /** Variant bootcamp — drives accent + section label.
   *   - army       → "Engagement" + steel accent
   *   - edge       → "Application" + bronze accent + roman label
   *   - activation → "Installation" + platinum accent + version label
   * Defaults to legacy gold when omitted. */
  readonly variant?: BootcampVariant;
}

/**
 * ValuePriceTable — pricing card centrale premium.
 *
 * Anatomie :
 *   - Eyebrow + H2 (centrés)
 *   - Liste des composantes de valeur (left label, right value tabular-nums)
 *   - Ligne "Valeur totale" en évidence
 *   - Bloc prix : régulier barré → lancement en gold large
 *   - Options de paiement (puces check gold)
 *   - 2 CTAs (primaire gold-gradient + secondaire silver-outline)
 *   - Note pré-lancement honnête sous les CTAs
 *
 * Mode pré-lancement : CTAs branchés sur capture email (pas Stripe).
 * Le label `ctaPrimaryLabel` doit refléter "Sois notifié..." côté parent.
 */
export function ValuePriceTable({
  eyebrow,
  headline,
  valueRows,
  valueTotal,
  valueTotalLabel = 'Valeur totale',
  priceLaunch,
  priceLaunchLabel = 'Prix lancement',
  priceRegular,
  priceRegularLabel = 'Prix régulier',
  paymentOptions,
  ctaPrimaryLabel,
  onCtaPrimaryClick,
  ctaSecondaryLabel,
  onCtaSecondaryClick,
  preLaunchNote,
  variant
}: ValuePriceTableProps) {
  const theme = variant ? variantTheme[variant] : legacyTheme;
  return (
    <ScrollReveal>
      <section
        aria-label={headline ?? eyebrow ?? 'Récapitulatif valeur et prix'}
        className="relative py-2xl bg-section-base"
      >
        <div className="relative max-w-default mx-auto px-md">
          {(eyebrow || headline) && (
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              {eyebrow ? (
                <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-silver/20 bg-base/40 backdrop-blur-sm shadow-haptic-inset">
                  <span
                    aria-hidden="true"
                    className={`inline-block h-1.5 w-1.5 rounded-full animate-eyebrow-dot-pulse ${theme.dotBg}`}
                  />
                  <span className="text-eyebrow uppercase tracking-widest text-silver font-display">
                    {eyebrow}
                  </span>
                </p>
              ) : null}
              {headline ? <MaskRevealHeading as="h2">{headline}</MaskRevealHeading> : null}
            </div>
          )}

          <article className="max-w-[44rem] mx-auto bg-elevated border border-silver/20 rounded-lg overflow-hidden shadow-haptic-focal">
            <div className="p-md sm:p-lg flex flex-col gap-md">
              <dl className="flex flex-col">
                {valueRows.map((row) => (
                  <div
                    key={`val-${row.label.slice(0, 48)}`}
                    className="flex items-baseline justify-between gap-md py-sm border-b border-silver/10 last:border-b-0"
                  >
                    <dt className="text-body text-silver opacity-85 text-pretty min-w-0">
                      {row.label}
                    </dt>
                    <dd className="text-body text-primary font-display font-medium tabular-nums shrink-0">
                      {row.value}
                    </dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-md pt-md mt-sm border-t border-silver/25">
                  <dt className="text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs">
                    {valueTotalLabel}
                  </dt>
                  <dd className="text-h3 text-primary font-display font-medium tabular-nums shrink-0">
                    {valueTotal}
                  </dd>
                </div>
              </dl>

              <div
                className={`mt-md flex flex-col items-center text-center gap-2 p-md rounded-lg bg-base border ${theme.priceBorder}`}
              >
                <span className="inline-flex items-baseline gap-3">
                  <span className="sr-only">{priceRegularLabel} : </span>
                  <span
                    aria-hidden="true"
                    className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]"
                  >
                    {priceRegularLabel}
                  </span>
                  <span className="text-body text-silver/75 line-through tabular-nums">
                    {priceRegular}
                  </span>
                </span>
                <p className="flex flex-col items-center gap-1">
                  <span
                    className={`text-eyebrow uppercase tracking-widest font-display text-xs ${theme.priceLabel}`}
                  >
                    {priceLaunchLabel}
                  </span>
                  <span
                    className={`text-[clamp(2.25rem,1.5rem+2.8vw,3.5rem)] font-display font-normal tracking-[-0.04em] tabular-nums leading-none ${theme.priceAmount}`}
                  >
                    {priceLaunch}
                  </span>
                </p>
              </div>

              {paymentOptions.length > 0 ? (
                <ul className="flex flex-col gap-2 mt-sm">
                  {paymentOptions.map((option) => (
                    <li
                      key={`pay-${option.slice(0, 48)}`}
                      className="flex items-start gap-2 text-body text-silver opacity-85 text-pretty"
                    >
                      <Check
                        className={`h-4 w-4 max-w-none shrink-0 mt-1 ${theme.checkIcon}`}
                        aria-hidden="true"
                      />
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-md flex flex-col sm:flex-row gap-sm items-center justify-center">
                <button
                  type="button"
                  onClick={onCtaPrimaryClick}
                  aria-label={ctaPrimaryLabel}
                  className={`relative isolate inline-flex items-center gap-2 rounded-pill px-md py-[0.65rem] text-eyebrow uppercase tracking-wider font-display transition-all duration-base text-base shadow-haptic-card hover:scale-[1.02] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 ${theme.cta}`}
                >
                  <span>{ctaPrimaryLabel}</span>
                  <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                </button>

                {ctaSecondaryLabel ? (
                  <button
                    type="button"
                    onClick={onCtaSecondaryClick}
                    aria-label={ctaSecondaryLabel}
                    className="inline-flex items-center gap-2 rounded-pill px-md py-[0.65rem] text-eyebrow uppercase tracking-wider font-display transition-colors duration-base bg-transparent border border-silver/40 text-silver hover:border-silver focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-silver"
                  >
                    <span>{ctaSecondaryLabel}</span>
                  </button>
                ) : null}
              </div>

              {preLaunchNote ? (
                <p className="mt-sm text-center text-sm text-silver opacity-65 italic text-pretty max-w-[52ch] mx-auto">
                  {preLaunchNote}
                </p>
              ) : null}
            </div>
          </article>
        </div>
      </section>
    </ScrollReveal>
  );
}

// ─── Theming maps ────────────────────────────────────────────────────────
interface PriceTheme {
  readonly dotBg: string;
  readonly priceBorder: string;
  readonly priceLabel: string;
  readonly priceAmount: string;
  readonly checkIcon: string;
  readonly cta: string;
}

const legacyTheme: PriceTheme = {
  dotBg: 'bg-gold',
  priceBorder: 'border-gold/25',
  priceLabel: 'text-gold/70',
  priceAmount: 'text-gold',
  checkIcon: 'text-gold/80',
  cta: 'bg-[linear-gradient(180deg,oklch(0.86_0.085_75)_0%,oklch(0.66_0.085_75)_100%)] focus-visible:outline-gold'
};

const variantTheme: Record<BootcampVariant, PriceTheme> = {
  army: {
    dotBg: 'bg-[oklch(0.78_0.04_250)]',
    priceBorder: 'border-[oklch(0.65_0.04_250)]/30',
    priceLabel: 'text-[oklch(0.78_0.04_250)]/80',
    priceAmount: 'text-[oklch(0.86_0.04_250)]',
    checkIcon: 'text-[oklch(0.78_0.04_250)]/85',
    cta: 'bg-[linear-gradient(180deg,oklch(0.78_0.04_250)_0%,oklch(0.55_0.04_250)_100%)] focus-visible:outline-[oklch(0.78_0.04_250)]'
  },
  edge: {
    dotBg: 'bg-[oklch(0.7_0.08_60)]',
    priceBorder: 'border-[oklch(0.62_0.08_60)]/30',
    priceLabel: 'text-[oklch(0.7_0.08_60)]/85',
    priceAmount: 'text-[oklch(0.78_0.08_60)]',
    checkIcon: 'text-[oklch(0.7_0.08_60)]/85',
    cta: 'bg-[linear-gradient(180deg,oklch(0.78_0.08_60)_0%,oklch(0.55_0.08_60)_100%)] focus-visible:outline-[oklch(0.7_0.08_60)]'
  },
  activation: {
    dotBg: 'bg-[oklch(0.88_0.02_240)]',
    priceBorder: 'border-[oklch(0.78_0.05_240)]/30',
    priceLabel: 'text-[oklch(0.88_0.02_240)]/85',
    priceAmount: 'text-[oklch(0.92_0.02_240)]',
    checkIcon: 'text-[oklch(0.88_0.02_240)]/90',
    cta: 'bg-[linear-gradient(180deg,oklch(0.92_0.02_240)_0%,oklch(0.7_0.05_240)_100%)] text-[oklch(0.16_0.005_80)] focus-visible:outline-[oklch(0.88_0.02_240)]'
  },
  retraite: {
    dotBg: 'bg-[oklch(0.74_0.05_155)]',
    priceBorder: 'border-[oklch(0.58_0.06_155)]/30',
    priceLabel: 'text-[oklch(0.74_0.05_155)]/85',
    priceAmount: 'text-[oklch(0.82_0.05_155)]',
    checkIcon: 'text-[oklch(0.74_0.05_155)]/85',
    cta: 'bg-[linear-gradient(180deg,oklch(0.82_0.05_155)_0%,oklch(0.58_0.06_155)_100%)] focus-visible:outline-[oklch(0.74_0.05_155)]'
  },
  masterclass: {
    dotBg: 'bg-[oklch(0.75_0.1_270)]',
    priceBorder: 'border-[oklch(0.6_0.12_270)]/30',
    priceLabel: 'text-[oklch(0.75_0.1_270)]/85',
    priceAmount: 'text-[oklch(0.82_0.1_270)]',
    checkIcon: 'text-[oklch(0.75_0.1_270)]/85',
    cta: 'bg-[linear-gradient(180deg,oklch(0.82_0.1_270)_0%,oklch(0.6_0.12_270)_100%)] focus-visible:outline-[oklch(0.75_0.1_270)]'
  }
};
