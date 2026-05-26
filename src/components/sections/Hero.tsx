import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollCue } from '@/components/ui/ScrollCue';
import { ROUTES } from '@/config/routes';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useT } from '@/lib/i18n/useT';
import { heroEntranceTimings } from '@/lib/motion/presets';

/**
 * Hero direction C — typo-led centered.
 * Layout : Eyebrow + MaskRevealHeading H1 + sub + 2 CTAs + ScrollCue.
 * Animations choreographed via heroEntranceTimings (200/400/900/1100/1200/1400ms).
 * VSL section 2 anchor = #methodologie (set by VslPlaceholderSection).
 */
export function Hero() {
  const { t, locale } = useT();
  const scrollTo = useSmoothScroll();

  return (
    <section
      aria-label={t({ fr: 'Section principale', en: 'Hero section' })}
      className="relative min-h-[78svh] flex flex-col items-center justify-center text-center px-md py-2xl"
    >
      <div className="flex flex-col items-center gap-md max-w-content">
        <Eyebrow>{t({ fr: "Architecte d'affaires", en: 'Business Architect' })}</Eyebrow>

        <MaskRevealHeading as="h1" delay={heroEntranceTimings.h1MaskReveal}>
          {t({
            fr: "Ajouter un zéro à votre chiffre d'affaires.",
            en: 'Add a zero to your revenue.'
          })}
        </MaskRevealHeading>

        <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
          {t({
            fr: "Architecture d'affaires & scaling stratégique pour entrepreneurs ambitieux.",
            en: 'Business architecture & strategic scaling for ambitious entrepreneurs.'
          })}
        </p>

        <div className="flex flex-col sm:flex-row gap-sm mt-md">
          <CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>
            {t({ fr: 'Prendre rendez-vous', en: 'Book a call' })}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </CTAPill>
          <CTAPill variant="silver-secondary" onClick={() => scrollTo('#methodologie')}>
            {t({ fr: 'Découvrir la méthode CDT™', en: 'Discover the CDT™ method' })}
          </CTAPill>
        </div>
      </div>

      <ScrollCue
        href="#methodologie"
        ariaLabel={t({ fr: 'Faire défiler vers la méthodologie', en: 'Scroll to methodology' })}
      />
    </section>
  );
}
