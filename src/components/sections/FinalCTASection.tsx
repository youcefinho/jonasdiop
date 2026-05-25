import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

export function FinalCTASection() {
  const { t, locale } = useT();
  return (
    <section
      aria-label={t({ fr: 'Réserver un appel', en: 'Book a call' })}
      className="py-2xl bg-elevated border-t border-silver/10"
    >
      <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
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
    </section>
  );
}
