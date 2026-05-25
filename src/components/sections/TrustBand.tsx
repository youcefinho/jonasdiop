import { StatNumber } from '@/components/ui/StatNumber';
import { useT } from '@/lib/i18n/useT';

/**
 * Trust band section — 3 stats (857+ entrepreneurs, 31M$+ generated, 15 ANS expertise).
 * Stats animated via CountUp on scroll-into-view (40% threshold, run once).
 * Numbers in gold (1 of 7 strict gold usages: trust band stats).
 */
export function TrustBand() {
  const { t } = useT();
  return (
    <section
      aria-label={t({ fr: 'Chiffres clés', en: 'Key figures' })}
      className="py-xl border-y border-silver/10 bg-base"
    >
      <div className="container mx-auto max-w-default px-md grid grid-cols-1 md:grid-cols-3 gap-lg">
        <StatNumber
          value={857}
          suffix="+"
          label={{ fr: 'Entrepreneurs accompagnés', en: 'Entrepreneurs guided' }}
        />
        <StatNumber
          value={31}
          suffix="M$+"
          label={{ fr: 'Généré pour nos clients', en: 'Generated for our clients' }}
        />
        <StatNumber
          value={15}
          suffix=" ANS"
          label={{ fr: "D'expertise stratégique", en: 'Of strategic expertise' }}
        />
      </div>
    </section>
  );
}
