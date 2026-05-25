import { clsx } from 'clsx';
import { Quote, User } from 'lucide-react';
import { useT } from '@/lib/i18n/useT';

interface TestimonialShellCardProps {
  centerElevated?: boolean;
}

/**
 * Placeholder testimonial card while waiting for real client testimonials (H3 pending).
 * centerElevated=true → border-gold/30 for "preuve sociale phare" anchor position.
 */
export function TestimonialShellCard({ centerElevated = false }: TestimonialShellCardProps) {
  const { t } = useT();
  return (
    <article
      aria-label={t({ fr: 'Témoignage à venir', en: 'Testimonial coming soon' })}
      className={clsx(
        'flex flex-col items-center gap-sm p-md rounded-lg border bg-elevated text-center transition-all',
        centerElevated ? 'border-gold/30' : 'border-silver/15'
      )}
    >
      <Quote className="h-8 w-8 text-silver opacity-40" aria-hidden="true" />
      <p className="text-eyebrow uppercase tracking-widest text-silver opacity-80 font-display">
        {t({ fr: 'Témoignage à venir', en: 'Testimonial coming soon' })}
      </p>
      <div className="h-12 w-12 rounded-full bg-base flex items-center justify-center">
        <User className="h-6 w-6 text-silver opacity-30" aria-hidden="true" />
      </div>
      <p className="text-sm text-tertiary opacity-70">
        {t({ fr: "En attente d'autorisation client", en: 'Pending client authorization' })}
      </p>
    </article>
  );
}
