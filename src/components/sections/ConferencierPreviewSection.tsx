import { ArrowRight, Mic2 } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

/**
 * ConferencierPreviewSection — Home section 8 "CONFÉRENCIER" per brief v3.
 *
 * Brief §3.1 §Section 8 :
 *   "Section visuellement distincte (fond différent, plus institutionnel)
 *    Titre : 'Faire intervenir [Nom] dans votre événement'
 *    1 phrase de pitch orientée B2B + 3 à 5 logos d'événements/entreprises
 *    CTA distinct : 'Voir les conférences'"
 *
 * Règle anti-cannibalisation brief §5 :
 *   "Le CTA Conférences doit être visuellement secondaire sur toutes les pages
 *    sauf la page Conférences elle-même."
 *
 * Implementation :
 *   - Background différencié (bg-base/40 + border-l-2 gold accent rail)
 *   - Tone VOUS (B2B exception du TU global)
 *   - CTA outline-silver (visuellement secondaire vs gold-primary du CTA principal)
 *   - 3 logos placeholders en attendant le kit Jonas (refs événements passés)
 *   - Pas de form, pas de capture email (la page /conferences gère le booking)
 */
export function ConferencierPreviewSection() {
  const { t, locale } = useT();
  const placeholderLogos = [
    { fr: 'Conférence #1', en: 'Event #1' },
    { fr: 'Conférence #2', en: 'Event #2' },
    { fr: 'Conférence #3', en: 'Event #3' }
  ];

  return (
    <section
      aria-label={t({
        fr: 'Faire intervenir Jonas Diop dans votre événement',
        en: 'Bring Jonas Diop into your event'
      })}
      className="relative py-2xl bg-base/40 border-l-2 border-gold/40 overflow-hidden"
    >
      <FiligraneNumber number="08" position="left" />
      <div className="relative max-w-default mx-auto px-md grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
        {/* ── Content (B2B VOUS-tone) ── */}
        <div className="lg:col-span-7 flex flex-col gap-md">
          <Eyebrow>
            {t({ fr: 'Conférences B2B · keynotes', en: 'B2B Speaking · keynotes' })}
          </Eyebrow>
          <MaskRevealHeading
            as="h2"
            className="text-h2 text-primary font-display text-balance leading-[1.1]"
          >
            {t({
              fr: 'Faites intervenir Jonas Diop dans votre événement.',
              en: 'Bring Jonas Diop into your event.'
            })}
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[62ch]">
            {t({
              fr: 'Keynote signature, atelier stratégique ou panel : Jonas intervient devant comités de direction et équipes leadership sur le scaling sans épuisement, le Game Changer Protocol et la méthodologie CDT™.',
              en: 'Signature keynote, strategic workshop or panel : Jonas addresses executive boards and leadership teams on scaling without burnout, the Game Changer Protocol and CDT™ methodology.'
            })}
          </p>

          <div className="mt-md">
            <CTAPill variant="silver-outline" href={ROUTES.conferences[locale]}>
              {t({ fr: 'Voir les conférences', en: 'View speaking page' })}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>

        {/* ── 3 placeholder event logos (pending kit Jonas) ── */}
        <div className="lg:col-span-5 flex flex-col gap-sm">
          <p className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs">
            {t({ fr: 'Références événements', en: 'Past engagements' })}
          </p>
          <ul
            className="grid grid-cols-3 gap-sm"
            aria-label={t({ fr: 'Logos événements', en: 'Event logos' })}
          >
            {placeholderLogos.map((logo) => (
              <li
                key={logo.fr}
                className="aspect-[3/2] flex items-center justify-center p-sm bg-elevated/60 border border-silver/15 rounded-md"
              >
                <span aria-hidden="true" className="flex flex-col items-center gap-1 text-center">
                  <Mic2 className="h-5 w-5 max-w-none text-silver/40" />
                  <span className="text-[9px] uppercase tracking-widest text-silver/50 font-display leading-tight">
                    {t(logo)}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px] mt-1">
            {t({
              fr: 'Logos clients dévoilés après confirmation kit Jonas',
              en: 'Client logos disclosed after Jonas kit confirmation'
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
