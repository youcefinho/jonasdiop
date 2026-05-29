import { ArrowRight, BookOpen, Download } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

/**
 * LivrePreviewSection — Home section 6 "LIVRE (mise en avant)" per brief v3.
 *
 * Composition brief :
 *   - Visuel 3D du livre (placeholder until cover assets fournis)
 *   - Titre + accroche
 *   - Bouton "Découvrir le livre" → /livre
 *   - Capture email "Reçois le 1er chapitre gratuit" (form structure prête à wire)
 *
 * Position Home : après TestimonialGrid/MarqueeTestimonials, avant Ressources.
 *
 * Form action="#" pour l'instant — wire vers plateforme email (ConvertKit /
 * ActiveCampaign / Mailerlite) quand Jonas confirme la plateforme.
 */
export function LivrePreviewSection() {
  const { t, locale } = useT();
  return (
    <section
      aria-label={t({ fr: 'Le livre — chapitre gratuit', en: 'The book — free chapter' })}
      className="relative py-2xl bg-section-elevated border-y border-silver/10 overflow-hidden"
    >
      <FiligraneNumber number="06" position="right" />
      <div className="relative max-w-default mx-auto px-md grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
        {/* ── Visuel placeholder livre 3D ── */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            aria-hidden="true"
            className={[
              'relative aspect-[3/4] w-full max-w-[280px] rounded-[clamp(0.5rem,0.5vw+0.3rem,1rem)]',
              'bg-gradient-to-br from-elevated via-base to-elevated',
              'border border-silver/15 ring-1 ring-gold/10',
              'shadow-haptic-focal',
              'flex flex-col items-center justify-center gap-md p-md'
            ].join(' ')}
          >
            <BookOpen aria-hidden="true" className="h-12 w-12 max-w-none text-gold/60 stroke-1" />
            <span className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px] text-center">
              {t({ fr: 'Couverture · à venir', en: 'Cover · coming soon' })}
            </span>
            <span className="text-gold font-display text-xl tracking-tight text-center text-balance leading-tight">
              {t({ fr: 'AJOUTE\nUN ZÉRO', en: 'ADD\nA ZERO' }).replace('\\n', '\n')}
            </span>
          </div>
        </div>

        {/* ── Content + lead magnet capture ── */}
        <div className="lg:col-span-7 flex flex-col gap-md">
          <Eyebrow>
            {t({ fr: 'Le livre · bientôt disponible', en: 'The book · coming soon' })}
          </Eyebrow>
          <MaskRevealHeading
            as="h2"
            className="text-h2 text-primary font-display text-balance leading-[1.1]"
          >
            {t({
              fr: "L'architecture d'affaires en un livre.",
              en: 'Business architecture in one book.'
            })}
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
            {t({
              fr: "Les 7 leviers structurels que les entrepreneurs à fort scaling activent — et que les autres ratent. Ingénierie d'offres, compression du temps, architecture systémique. Pas de théorie, des frameworks appliquables.",
              en: 'The 7 structural levers high-scaling entrepreneurs activate — and that others miss. Offer engineering, time compression, systemic architecture. No theory, applicable frameworks.'
            })}
          </p>

          {/* ── Lead magnet capture form ── */}
          <form
            action="#"
            method="post"
            aria-label={t({
              fr: 'Recevoir le premier chapitre gratuit',
              en: 'Receive the first chapter for free'
            })}
            className="mt-sm flex flex-col sm:flex-row gap-sm max-w-[480px]"
          >
            <label htmlFor="livre-lead-email" className="sr-only">
              {t({ fr: 'Adresse courriel', en: 'Email address' })}
            </label>
            <input
              id="livre-lead-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder={t({ fr: 'ton@email.com', en: 'your@email.com' })}
              disabled
              className="flex-1 px-md py-sm rounded-pill bg-base border border-silver/20 text-body text-primary placeholder:text-silver/40 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/20 transition-colors duration-base disabled:opacity-60"
            />
            <button
              type="submit"
              disabled
              className="inline-flex items-center justify-center gap-2 px-md py-sm rounded-pill bg-gold/10 border border-gold/30 text-eyebrow uppercase tracking-wider text-gold font-display font-medium hover:bg-gold/15 transition-colors duration-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Download className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              {t({ fr: 'Recevoir le chapitre', en: 'Get the chapter' })}
            </button>
          </form>
          <p className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]">
            {t({
              fr: "Plateforme email en cours d'intégration · disponible au lancement",
              en: 'Email platform being integrated · available at launch'
            })}
          </p>

          {/* ── CTA Découvrir le livre ── */}
          <div className="mt-sm">
            <CTAPill variant="silver-outline" href={ROUTES.livre[locale]}>
              {t({ fr: 'Découvrir le livre', en: 'Discover the book' })}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </div>
    </section>
  );
}
