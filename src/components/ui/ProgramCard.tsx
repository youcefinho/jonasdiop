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
  /** Phare badge + gold ring treatment for the 3 featured brief v3 programmes. */
  featured?: boolean;
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
 * featured: adds gold ring-1 + "Programme phare" corner badge (brief v3 3 phares :
 * The Shift, Master Closing, Focus & Flow).
 *
 * Renders as a TanStack Link wrapping the full card (SEO-friendly, accessible).
 */
export function ProgramCard({
  variant,
  href,
  eyebrow,
  title,
  description,
  featured = false
}: ProgramCardProps) {
  const { t } = useT();
  return (
    <Link
      to={href}
      className={clsx(
        // Multi-layer haptic shadow + white inset highlight + sheen on hover.
        // Premium depth pattern extracted from jonasdiop.com (Framer template).
        'group relative overflow-hidden flex flex-col gap-sm p-md bg-elevated border rounded-lg transition-all duration-base hover-lift',
        'shadow-haptic-card shadow-haptic-card-hover',
        // Sheen silver diagonal hover — pseudo-element slides on hover
        "after:content-[''] after:absolute after:inset-0 after:rounded-lg after:bg-[linear-gradient(120deg,transparent_30%,oklch(0.79_0.005_270/0.08)_50%,transparent_70%)] after:bg-[length:200%_200%] after:bg-[position:200%_0] after:transition-all after:duration-[700ms] after:ease-[cubic-bezier(0.4,0,0.2,1)] after:pointer-events-none group-hover:after:bg-[position:-50%_0]",
        variantClasses[variant],
        featured && 'ring-1 ring-gold/25 hover:ring-gold/40'
      )}
    >
      {featured && (
        <span
          aria-hidden="true"
          className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gold/12 border border-gold/30 text-[10px] uppercase tracking-widest text-gold font-display font-medium leading-none"
        >
          <span className="inline-block h-1 w-1 rounded-full bg-gold" />
          {t({ fr: 'Programme phare', en: 'Featured program' })}
        </span>
      )}
      <p
        className={clsx(
          'text-eyebrow uppercase tracking-widest font-display',
          eyebrowColorClasses[variant],
          featured && 'pr-[140px]'
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
