import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { PullQuote } from '@/components/ui/PullQuote';
import { ROUTES } from '@/config/routes';
import { jonasQuotes } from '@/data/copy/quotes';
import { useT } from '@/lib/i18n/useT';

export function FinalCTASection() {
  const { t, locale } = useT();
  return (
    <section
      aria-label={t({ fr: 'Réserver un appel', en: 'Book a call' })}
      className="relative py-2xl bg-elevated border-t border-silver/10"
    >
      <FiligraneNumber number="06" position="right" />
      <div className="relative max-w-content mx-auto px-md flex flex-col items-center gap-xl">
        <PullQuote source={jonasQuotes.franklin} variant="inline" />

        <div className="flex flex-col items-center text-center gap-md">
          <Eyebrow>{t({ fr: 'Prochaine étape', en: 'Next step' })}</Eyebrow>
          <MaskRevealHeading as="h2">
            {t({ fr: 'Prêt à ajouter un zéro ?', en: 'Ready to add a zero?' })}
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty">
            {t({
              fr: 'Appel de qualification gratuit · 30 minutes · Réponse 48h',
              en: 'Free qualification call · 30 minutes · 48h response'
            })}
          </p>
          <div className="mt-md">
            <CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>
              {t({ fr: 'Réserver mon appel', en: 'Book my call' })}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </div>
    </section>
  );
}
