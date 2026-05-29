import { Link } from '@tanstack/react-router';
import { ArrowRight, Lock } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export type TrilogieSlug = 'an-army-of-one' | 'the-edge' | 'the-activation';

interface TrilogieCard {
  readonly slug: TrilogieSlug;
  readonly name: string;
  readonly blocage: string;
  readonly audience: string;
  readonly priceLaunch: string;
  readonly priceRegular: string;
  readonly places: number;
  readonly format: string;
  readonly href: string;
}

/**
 * Trilogie verbatim — locked source-of-truth fed from PDFs Trilogie + brief.
 * EN translations restent côté page (les sous-pages EN passent un override si
 * besoin via prop `cards`).
 */
const TRILOGIE_FR: readonly TrilogieCard[] = [
  {
    slug: 'an-army-of-one',
    name: 'An Army of One',
    blocage: 'Chaos interne — système + exécution',
    audience: 'Entrepreneurs solo 5-25K$/mois',
    priceLaunch: '997$',
    priceRegular: '1 497$',
    places: 20,
    format: 'Inscription directe',
    href: '/evenements/bootcamps/an-army-of-one'
  },
  {
    slug: 'the-edge',
    name: 'The Edge',
    blocage: 'Invisibilité — autorité + perception',
    audience: 'Coachs/experts 5-20K$/mois',
    priceLaunch: '1 497$',
    priceRegular: '1 997$',
    places: 15,
    format: 'Application requise',
    href: '/evenements/bootcamps/the-edge'
  },
  {
    slug: 'the-activation',
    name: 'The Activation',
    blocage: 'Plafond — cognitif + identitaire',
    audience: 'Entrepreneurs établis 15-50K$/mois',
    priceLaunch: '1 497$',
    priceRegular: '1 997$',
    places: 20,
    format: 'Inscription directe',
    href: '/evenements/bootcamps/the-activation'
  }
] as const;

interface TrilogieFooterCrossLinkProps {
  /** Slug de la sous-page courante — la card correspondante est highlight + désactivée. */
  readonly currentSlug?: TrilogieSlug;
  /** Eyebrow (déjà traduit). Default FR. */
  readonly eyebrow?: string;
  /** Headline H2 (déjà traduit). Default FR. */
  readonly headline?: string;
  /** Sous-titre (déjà traduit). */
  readonly subtitle?: string;
  /** Override des cards (pour EN miroir ou data alternative). */
  readonly cards?: readonly TrilogieCard[];
  /** Labels colonnes (a11y + meta affichées sur card). */
  readonly labels?: {
    readonly blocage?: string;
    readonly audience?: string;
    readonly priceLaunch?: string;
    readonly priceRegular?: string;
    readonly places?: string;
    readonly format?: string;
    readonly current?: string;
    readonly cta?: string;
  };
}

/**
 * TrilogieFooterCrossLink — bloc 3 cards bottom de chaque sous-page bootcamp.
 *
 * Affiche les 3 bootcamps en grid premium 3-col desktop / 1-col mobile.
 * La card de la sous-page courante (`currentSlug`) est highlight (border gold)
 * et rendue comme `<div>` non-cliquable avec badge "Tu es ici" — les 2 autres
 * sont des `<Link>` TanStack Router avec hover lift + flèche.
 *
 * Anti-cannibalisation : labels CTA des cards = "Découvrir" (neutre), pas
 * "Réserver ma place" qui resterait dans la sous-page elle-même.
 */
export function TrilogieFooterCrossLink({
  currentSlug,
  eyebrow = 'La trilogie',
  headline = 'Les 3 bootcamps',
  subtitle = 'Chacun adresse un blocage spécifique. Choisis celui qui correspond à où tu en es.',
  cards = TRILOGIE_FR,
  labels
}: TrilogieFooterCrossLinkProps) {
  const L = {
    blocage: labels?.blocage ?? 'Blocage résolu',
    audience: labels?.audience ?? 'Audience',
    priceLaunch: labels?.priceLaunch ?? 'Lancement',
    priceRegular: labels?.priceRegular ?? 'Régulier',
    places: labels?.places ?? 'Places',
    format: labels?.format ?? 'Format',
    current: labels?.current ?? 'Tu es ici',
    cta: labels?.cta ?? 'Découvrir'
  } as const;

  return (
    <ScrollReveal>
      <section
        aria-label={`${eyebrow} — ${headline}`}
        className="relative py-2xl bg-section-elevated border-y border-silver/10"
      >
        <div className="relative max-w-default mx-auto px-md">
          <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
            <Eyebrow>{eyebrow}</Eyebrow>
            <MaskRevealHeading as="h2">{headline}</MaskRevealHeading>
            {subtitle ? (
              <p className="text-body text-silver opacity-85 text-pretty max-w-[58ch]">
                {subtitle}
              </p>
            ) : null}
          </div>

          <ul
            className="grid grid-cols-1 md:grid-cols-3 gap-md max-w-default mx-auto list-none"
            data-card-group="trilogie-crosslink"
          >
            {cards.map((card) => {
              const isCurrent = card.slug === currentSlug;
              const innerContent = (
                <>
                  <div className="flex items-start justify-between gap-sm">
                    <h3 className="text-h3 text-primary font-display text-balance leading-tight text-[1.125rem]">
                      {card.name}
                    </h3>
                    {isCurrent ? (
                      <span className="inline-flex items-center gap-1 shrink-0 px-2 py-1 rounded-full border border-gold/40 bg-gold/10">
                        <Lock
                          className="h-3 w-3 max-w-none shrink-0 text-gold/90"
                          aria-hidden="true"
                        />
                        <span className="text-eyebrow uppercase tracking-widest text-gold/90 font-display text-[10px]">
                          {L.current}
                        </span>
                      </span>
                    ) : null}
                  </div>

                  <dl className="flex flex-col gap-sm">
                    <div className="flex flex-col gap-1">
                      <dt className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                        {L.blocage}
                      </dt>
                      <dd className="text-body text-silver opacity-90 text-pretty">
                        {card.blocage}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                        {L.audience}
                      </dt>
                      <dd className="text-body text-silver opacity-80 text-pretty">
                        {card.audience}
                      </dd>
                    </div>
                    <div className="grid grid-cols-2 gap-sm pt-sm border-t border-silver/10">
                      <div className="flex flex-col gap-1 min-w-0">
                        <dt className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                          {L.priceRegular}
                        </dt>
                        <dd className="text-sm text-silver/75 line-through tabular-nums">
                          {card.priceRegular}
                        </dd>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <dt className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-[10px]">
                          {L.priceLaunch}
                        </dt>
                        <dd className="text-body text-gold font-display font-medium tabular-nums">
                          {card.priceLaunch}
                        </dd>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-sm">
                      <div className="flex flex-col gap-1 min-w-0">
                        <dt className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                          {L.places}
                        </dt>
                        <dd className="text-body text-primary font-display tabular-nums">
                          {card.places}
                        </dd>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <dt className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                          {L.format}
                        </dt>
                        <dd className="text-sm text-silver opacity-85 text-pretty">
                          {card.format}
                        </dd>
                      </div>
                    </div>
                  </dl>

                  {!isCurrent ? (
                    <span className="mt-auto inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-gold/90 font-display text-xs pt-sm border-t border-silver/10">
                      {L.cta}
                      <ArrowRight
                        className="h-3.5 w-3.5 max-w-none shrink-0 transition-transform duration-base group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  ) : null}
                </>
              );

              const cardBase =
                'group flex flex-col gap-md p-md h-full bg-base border rounded-lg shadow-haptic-card transition-all duration-base';

              return (
                <li key={card.slug} className="h-full">
                  {isCurrent ? (
                    <div
                      aria-current="page"
                      className={`${cardBase} border-gold/40 cursor-default opacity-95`}
                    >
                      {innerContent}
                    </div>
                  ) : (
                    <Link
                      to={card.href}
                      aria-label={`${card.name} — ${L.cta}`}
                      className={`${cardBase} border-silver/15 hover:border-gold/30 hover-lift no-underline`}
                    >
                      {innerContent}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </ScrollReveal>
  );
}
