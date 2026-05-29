import { ArrowRight, Users } from 'lucide-react';
import { useT } from '@/lib/i18n/useT';

interface BootcampStickyBarProps {
  /** Pictogramme / glyph affiché à gauche (ex. drapeau bootcamp).
   * Pas un vrai emoji vibrant — un caractère sobre (•, ◆) ou un mot court.
   * Si vide → uniquement texte. */
  readonly emoji?: string;
  /** Nombre de places restantes pour cette cohorte. */
  readonly places: number;
  /** Statut court (ex. "Inscriptions à venir", "Cohorte en cours"). */
  readonly status: string;
  /** Prix de lancement formaté (ex. "997$ CAD"). Surligné en gold. */
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
}

/**
 * BootcampStickyBar — barre sticky sous la Navbar des sous-pages bootcamp
 * Trilogie. Glass effect dark luxe, accent gold sur le prix lancement,
 * compteur de places + statut court + CTA "Sois notifié / Réserver".
 *
 * Pré-lancement : CTA branché par défaut sur scroll vers la section capture
 * email (handler fourni par la page). Stripe non câblé.
 *
 * Positionnement attendu : `top-[80px]` sous la Navbar fixe (80px). La sous-page
 * wrappe `<BootcampStickyBar />` dans un `<div className="sticky top-[80px] z-30">`
 * OU le composant peut être placé une fois en haut du template hors `<main>`.
 * Ici on rend le bar comme bloc `sticky` autonome — la page parent contrôle l'ordre.
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
  ariaLabel
}: BootcampStickyBarProps) {
  const { locale } = useT();
  const resolvedPlacesLabel =
    placesLabel ?? (locale === 'fr' ? 'Places restantes' : 'Spots remaining');
  const resolvedAriaLabel =
    ariaLabel ??
    (locale === 'fr'
      ? 'Bootcamp — statut, places et inscription'
      : 'Bootcamp — status, spots and registration');
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
              className="text-body-lg leading-none text-gold/90 font-display shrink-0"
            >
              {emoji}
            </span>
          ) : null}

          <span className="inline-flex items-center gap-2 shrink-0">
            <Users className="h-4 w-4 max-w-none shrink-0 text-gold/80" aria-hidden="true" />
            <span className="sr-only">{resolvedPlacesLabel}</span>
            <span className="text-body text-primary font-display font-medium tabular-nums">
              {places}
            </span>
          </span>

          <span aria-hidden="true" className="text-silver/30 select-none">
            ·
          </span>

          <span className="text-sm text-silver opacity-85 text-pretty min-w-0">{status}</span>

          <span aria-hidden="true" className="hidden sm:inline text-silver/30 select-none">
            ·
          </span>

          <span className="inline-flex items-baseline gap-2 shrink-0">
            {priceRegular ? (
              <span className="text-sm text-silver/75 line-through tabular-nums">
                {priceRegular}
              </span>
            ) : null}
            <span className="text-body text-gold font-display font-medium tabular-nums">
              {priceLaunch}
            </span>
          </span>
        </div>

        <button
          type="button"
          onClick={onCtaClick}
          aria-label={ctaAriaLabel ?? ctaLabel}
          className="relative isolate shrink-0 inline-flex items-center gap-2 rounded-pill px-md py-[0.55rem] text-eyebrow uppercase tracking-wider font-display transition-all duration-base bg-[linear-gradient(180deg,oklch(0.86_0.085_75)_0%,oklch(0.66_0.085_75)_100%)] text-base shadow-haptic-card hover:scale-[1.02] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <span>{ctaLabel}</span>
          <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
