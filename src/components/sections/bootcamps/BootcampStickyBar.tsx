import { ArrowRight, Users } from 'lucide-react';
import { useT } from '@/lib/i18n/useT';
import type { BootcampVariant } from './BootcampHeroPattern';

interface BootcampStickyBarProps {
  /** Pictogramme / glyph affiché à gauche (ex. drapeau bootcamp).
   * Pas un vrai emoji vibrant — un caractère sobre (•, ◆) ou un mot court.
   * Si vide → uniquement texte. */
  readonly emoji?: string;
  /** Nombre de places restantes pour cette cohorte. */
  readonly places: number;
  /** Statut court (ex. "Inscriptions à venir", "Cohorte en cours"). */
  readonly status: string;
  /** Prix de lancement formaté (ex. "997$ CAD"). Surligné en accent variant. */
  readonly priceLaunch: string;
  /** Prix régulier optionnel — affiché barré à côté du lancement. */
  readonly priceRegular?: string;
  /** Label du bouton CTA (déjà traduit côté parent). */
  readonly ctaLabel: string;
  /** Handler optionnel : scroll vers section d'inscription / capture email. */
  readonly onCtaClick?: () => void;
  /** Label aria du bouton — fallback ctaLabel. */
  readonly ctaAriaLabel?: string;
  /** Label aria du compteur de places (déjà localisé). Si absent → résolu via locale interne. */
  readonly placesLabel?: string;
  /** Label aria de la barre entière (déjà localisé). Si absent → résolu via locale interne. */
  readonly ariaLabel?: string;
  /** Variant bootcamp — drives accent color + glyph separator + CTA gradient.
   * Defaults to legacy gold styling when omitted (back-compat). */
  readonly variant?: BootcampVariant;
}

/**
 * BootcampStickyBar — barre sticky sous la Navbar des sous-pages bootcamp
 * Trilogie. Glass effect dark luxe, accent variant (steel/bronze/platinum)
 * sur le prix lancement, compteur de places + statut court + CTA.
 *
 * Pré-lancement : CTA branché par défaut sur scroll vers la section capture
 * email (handler fourni par la page). Stripe non câblé.
 *
 * `variant` prop drives 3 distinct visual treatments while keeping shared
 * structure (layout, a11y, behavior). Falls back to gold legacy if absent.
 */
export function BootcampStickyBar({
  emoji,
  places,
  status,
  priceLaunch,
  priceRegular,
  ctaLabel,
  onCtaClick,
  ctaAriaLabel,
  placesLabel,
  ariaLabel,
  variant
}: BootcampStickyBarProps) {
  const { locale } = useT();
  const resolvedPlacesLabel =
    placesLabel ?? (locale === 'fr' ? 'Places restantes' : 'Spots remaining');
  const resolvedAriaLabel =
    ariaLabel ??
    (locale === 'fr'
      ? 'Bootcamp — statut, places et inscription'
      : 'Bootcamp — status, spots and registration');

  const theme = variant ? variantTheme[variant] : legacyTheme;
  const separator = variant ? variantSeparator[variant] : '·';

  return (
    <aside
      aria-label={resolvedAriaLabel}
      className="sticky top-[80px] z-30 w-full bg-base/75 border-b border-silver/15 backdrop-blur-md supports-[backdrop-filter]:bg-base/55 shadow-haptic-card animate-in fade-in slide-in-from-top-2 duration-500"
    >
      <div className="max-w-default mx-auto px-md py-sm flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-md">
        <div className="flex flex-wrap items-center gap-x-md gap-y-2 min-w-0">
          {emoji ? (
            <span
              aria-hidden="true"
              className={`text-body-lg leading-none font-display shrink-0 ${theme.emoji}`}
            >
              {emoji}
            </span>
          ) : null}

          <span className="inline-flex items-center gap-2 shrink-0">
            <Users className={`h-4 w-4 max-w-none shrink-0 ${theme.icon}`} aria-hidden="true" />
            <span className="sr-only">{resolvedPlacesLabel}</span>
            <span className="text-body text-primary font-display font-medium tabular-nums">
              {places}
            </span>
          </span>

          <span aria-hidden="true" className="text-silver/30 select-none">
            {separator}
          </span>

          <span className="text-sm text-silver opacity-85 text-pretty min-w-0">{status}</span>

          <span aria-hidden="true" className="hidden sm:inline text-silver/30 select-none">
            {separator}
          </span>

          <span className="inline-flex items-baseline gap-2 shrink-0">
            {priceRegular ? (
              <span className="text-sm text-silver/75 line-through tabular-nums">
                {priceRegular}
              </span>
            ) : null}
            <span className={`text-body font-display font-medium tabular-nums ${theme.price}`}>
              {priceLaunch}
            </span>
          </span>
        </div>

        <button
          type="button"
          onClick={onCtaClick}
          aria-label={ctaAriaLabel ?? ctaLabel}
          className={`relative isolate shrink-0 inline-flex items-center gap-2 rounded-pill px-md py-[0.55rem] text-eyebrow uppercase tracking-wider font-display transition-all duration-base text-base shadow-haptic-card hover:scale-[1.02] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 ${theme.cta}`}
        >
          <span>{ctaLabel}</span>
          <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}

// ─── Theming maps ────────────────────────────────────────────────────────
interface StickyTheme {
  readonly emoji: string;
  readonly icon: string;
  readonly price: string;
  readonly cta: string;
}

const legacyTheme: StickyTheme = {
  emoji: 'text-gold/90',
  icon: 'text-gold/80',
  price: 'text-gold',
  cta: 'bg-[linear-gradient(180deg,oklch(0.86_0.085_75)_0%,oklch(0.66_0.085_75)_100%)] focus-visible:outline-gold'
};

const variantTheme: Record<BootcampVariant, StickyTheme> = {
  // Army — steel accent, sharp/cold
  army: {
    emoji: 'text-[oklch(0.78_0.04_250)]/90',
    icon: 'text-[oklch(0.78_0.04_250)]/85',
    price: 'text-[oklch(0.86_0.04_250)]',
    cta: 'bg-[linear-gradient(180deg,oklch(0.78_0.04_250)_0%,oklch(0.55_0.04_250)_100%)] focus-visible:outline-[oklch(0.78_0.04_250)]'
  },
  // Edge — bronze accent, warm/prestige
  edge: {
    emoji: 'text-[oklch(0.7_0.08_60)]/90',
    icon: 'text-[oklch(0.7_0.08_60)]/85',
    price: 'text-[oklch(0.78_0.08_60)]',
    cta: 'bg-[linear-gradient(180deg,oklch(0.78_0.08_60)_0%,oklch(0.55_0.08_60)_100%)] focus-visible:outline-[oklch(0.7_0.08_60)]'
  },
  // Activation — platinum accent, bright/energetic
  activation: {
    emoji: 'text-[oklch(0.88_0.02_240)]/95',
    icon: 'text-[oklch(0.88_0.02_240)]/90',
    price: 'text-[oklch(0.92_0.02_240)]',
    cta: 'bg-[linear-gradient(180deg,oklch(0.92_0.02_240)_0%,oklch(0.7_0.05_240)_100%)] text-[oklch(0.16_0.005_80)] focus-visible:outline-[oklch(0.88_0.02_240)]'
  }
};

// Per-variant separator glyph — small typographic signal
const variantSeparator: Record<BootcampVariant, string> = {
  army: '›', // tactical chevron
  edge: '·', // editorial dot
  activation: '⟡' // diamond — energy node
};
