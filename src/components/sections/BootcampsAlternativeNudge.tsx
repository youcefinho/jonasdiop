import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ROUTES } from '@/config/routes';
import type { BilingualLax } from '@/lib/i18n/types';
import { useT } from '@/lib/i18n/useT';

/**
 * BootcampsAlternativeNudge — Home micro-section, anti-cannibalisation strict
 * (brief v3 §5).
 *
 * Une section discrète qui mentionne la Trilogie de bootcamps comme un
 * chemin alternatif court, SANS jamais rivaliser visuellement avec le CTA
 * principal "Prendre rendez-vous" qui reste hégémonique sur le site.
 *
 * Restrictions visuelles auto-imposées :
 *   - Pas de FiligraneNumber, pas de MaskRevealHeading, pas de StaggerReveal
 *   - Pas de CTAPill (réservé au CTA principal "Prendre rendez-vous")
 *   - H2 dégradé en taille (text-h3 plutôt que text-h2/h1)
 *   - Padding vertical réduit (py-xl au lieu de py-2xl)
 *   - CTA = ghost text-link gold, jamais un bouton plein/silver
 *   - Layout serré max-w-content, copy 2 lignes max
 *   - Eyebrow silver/60 plutôt que gold (le gold reste rare et premium)
 *
 * Position attendue dans index.tsx : APRÈS ProgramsGrid (ou après
 * HowItWorksTimeline), AVANT TestimonialGrid. Sépare clairement le bloc
 * "programmes long terme" du reste, sans détourner l'attention du CTA
 * principal.
 */

const copy = {
  eyebrow: {
    fr: 'Format court',
    en: 'Short format'
  } satisfies BilingualLax<string>,
  title: {
    fr: 'Format court ? Pars sur un bootcamp tactique.',
    en: 'Short on time? Go with a tactical bootcamp.'
  } satisfies BilingualLax<string>,
  body: {
    fr: 'Trois bootcamps intensifs de 3 jours pour entrepreneurs qui veulent un résultat opérationnel maintenant. Méthode RISE™. À partir de 997$.',
    en: 'Three 3-day intensive bootcamps for entrepreneurs who want an operational result now. RISE™ method. From $997.'
  } satisfies BilingualLax<string>,
  cta: {
    fr: 'Voir la Trilogie',
    en: 'See the Trilogy'
  } satisfies BilingualLax<string>
} as const;

export function BootcampsAlternativeNudge() {
  const { t, locale } = useT();

  return (
    <section aria-label={t(copy.eyebrow)} className="relative py-xl bg-section-base">
      <div className="relative max-w-content mx-auto px-md">
        <div className="flex flex-col items-start gap-sm max-w-[58ch]">
          <Eyebrow>{t(copy.eyebrow)}</Eyebrow>
          <h2 className="text-h3 text-primary font-display text-balance leading-[1.2]">
            {t(copy.title)}
          </h2>
          <p className="text-body text-silver opacity-75 text-pretty">{t(copy.body)}</p>
          <Link
            to={ROUTES['evenements-bootcamps'][locale]}
            className="mt-xs inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-gold font-display text-xs hover:text-gold/80 transition-colors duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 rounded-sm"
          >
            {t(copy.cta)}
            <ArrowRight className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
