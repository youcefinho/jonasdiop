import { ArrowRight, FileText } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

interface Category {
  id: string;
  label: { fr: string; en: string };
}

const CATEGORIES: ReadonlyArray<Category> = [
  { id: 'architecture', label: { fr: 'Architecture', en: 'Architecture' } },
  { id: 'scaling', label: { fr: 'Scaling', en: 'Scaling' } },
  { id: 'closing', label: { fr: 'Closing', en: 'Closing' } },
  { id: 'cash-flow', label: { fr: 'Cash flow', en: 'Cash flow' } },
  { id: 'mindset', label: { fr: 'Mindset', en: 'Mindset' } }
];

/**
 * RessourcesPreviewSection — preview section on Home linking to /ressources.
 *
 * Affiche : eyebrow + h2 + sub + 5 chips catégories + 3 placeholder articles +
 * CTA "Voir tous les articles". Articles réels viendront via GHL Blog API
 * headless (Sprint 5+). Pour l'instant : empty state engaging.
 */
export function RessourcesPreviewSection() {
  const { t, locale } = useT();
  return (
    <section
      aria-label={t({ fr: 'Ressources & articles', en: 'Resources & articles' })}
      className="relative py-2xl bg-elevated border-y border-silver/10 overflow-hidden"
    >
      <FiligraneNumber number="05" position="right" />
      <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
          <Eyebrow>{t({ fr: 'Ressources', en: 'Resources' })}</Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance leading-[1.1] max-w-[22ch]">
            {t({
              fr: 'Articles, frameworks & outils.',
              en: 'Articles, frameworks & tools.'
            })}
          </h2>
          <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
            {t({
              fr: "Ce qu'on partage publiquement de la méthode CDT™. Architecture, scaling, closing, cash flow.",
              en: 'What we share publicly of the CDT™ method. Architecture, scaling, closing, cash flow.'
            })}
          </p>
        </div>

        {/* Categories chips */}
        <ul className="flex flex-wrap items-center justify-center gap-sm">
          {CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <span
                className={[
                  'inline-flex items-center gap-2 px-md py-2 rounded-full',
                  'text-eyebrow uppercase tracking-widest font-display text-xs',
                  'bg-base ring-1 ring-silver/15 text-silver opacity-75'
                ].join(' ')}
              >
                <span aria-hidden="true" className="inline-block h-1 w-1 rounded-full bg-gold" />
                {t(cat.label)}
              </span>
            </li>
          ))}
        </ul>

        {/* 3 placeholder article cards — empty state until GHL Blog API wired */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {[1, 2, 3].map((idx) => (
            <article
              key={idx}
              className={[
                'flex flex-col gap-sm p-md rounded-[clamp(0.75rem,0.8vw+0.4rem,1.25rem)]',
                'bg-base ring-1 ring-silver/10',
                'shadow-[inset_0_1px_1px_oklch(1_0_0/0.04)]'
              ].join(' ')}
            >
              <div className="flex items-center gap-sm text-silver opacity-60">
                <FileText className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                <span className="text-eyebrow uppercase tracking-widest font-display text-[10px]">
                  {t({ fr: 'Article · à venir', en: 'Article · coming' })}
                </span>
              </div>
              <h3 className="text-h3 text-primary font-display text-balance leading-[1.2] opacity-50">
                {t({
                  fr: 'Premier article CDT™ publié bientôt.',
                  en: 'First CDT™ article published soon.'
                })}
              </h3>
              <p className="text-sm text-silver opacity-50 text-pretty">
                {t({
                  fr: 'Inscrivez-vous à la newsletter pour être notifié des nouvelles publications.',
                  en: 'Subscribe to the newsletter to be notified of new publications.'
                })}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <CTAPill variant="silver-outline" href={ROUTES.ressources[locale]}>
            {t({ fr: 'Voir toutes les ressources', en: 'View all resources' })}
            <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
          </CTAPill>
        </div>
      </div>
    </section>
  );
}
