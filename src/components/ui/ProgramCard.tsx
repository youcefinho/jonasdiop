import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import type { BilingualLax } from '@/lib/i18n/types';
import { useT } from '@/lib/i18n/useT';

export type ProgramVariant = 'groupe' | 'formation' | 'accompagnement';

interface ProgramCardProps {
  variant: ProgramVariant;
  href: string;
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  description: BilingualLax<string>;
}

const variantClasses: Record<ProgramVariant, string> = {
  groupe: 'border-silver/15 hover:border-silver/30',
  formation: 'border-silver/15 hover:border-silver/30',
  accompagnement: 'border-gold/30 hover:border-gold/50'
};

const eyebrowColorClasses: Record<ProgramVariant, string> = {
  groupe: 'text-silver opacity-70',
  formation: 'text-silver opacity-70',
  accompagnement: 'text-gold opacity-80'
};

/**
 * ProgramCard — atomic card for service/programme listings.
 * 3 variants:
 *   - groupe: silver border, "En savoir plus" CTA
 *   - formation: silver border, "En savoir plus" CTA
 *   - accompagnement: gold border (1 of 7 strict gold usages), "Postuler/Apply" CTA (premium tier)
 *
 * Renders as a TanStack Link wrapping the full card (SEO-friendly, accessible).
 */
export function ProgramCard({ variant, href, eyebrow, title, description }: ProgramCardProps) {
  const { t } = useT();
  return (
    <Link
      to={href}
      className={clsx(
        'group relative flex flex-col gap-sm p-md bg-elevated border rounded-lg transition-all duration-base hover:scale-[1.01]',
        variantClasses[variant]
      )}
    >
      <p
        className={clsx(
          'text-eyebrow uppercase tracking-widest font-display',
          eyebrowColorClasses[variant]
        )}
      >
        {t(eyebrow)}
      </p>
      <h3 className="text-h3 text-primary font-display">{t(title)}</h3>
      <p className="text-body text-silver opacity-80 text-pretty">{t(description)}</p>
      <span className="mt-auto inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-silver group-hover:text-primary transition-colors">
        {variant === 'accompagnement'
          ? t({ fr: 'Postuler', en: 'Apply' })
          : t({ fr: 'En savoir plus', en: 'Learn more' })}
        <ArrowRight className="h-3 w-3" aria-hidden="true" />
      </span>
    </Link>
  );
}
