import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';

type CTAVariant = 'gold-primary' | 'silver-secondary' | 'silver-outline';

interface CTAPillBaseProps {
  variant: CTAVariant;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

interface CTAPillLinkProps extends CTAPillBaseProps {
  href: string;
  onClick?: never;
}

interface CTAPillButtonProps extends CTAPillBaseProps {
  href?: never;
  onClick: () => void;
}

type CTAPillProps = CTAPillLinkProps | CTAPillButtonProps;

const baseClasses =
  'inline-flex items-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display transition-all duration-base';

const variantClasses: Record<CTAVariant, string> = {
  'gold-primary':
    'bg-gold text-base hover:shadow-[0_0_32px_oklch(0.74_0.085_75/0.35)] hover:scale-[1.02]',
  'silver-secondary':
    'bg-transparent border border-silver/40 text-silver hover:border-silver hover:bg-silver/5',
  'silver-outline': 'bg-transparent border border-silver/60 text-silver hover:bg-silver/10'
};

/**
 * CTA pill button — used for hero CTAs, final CTAs, nav CTA.
 * Three variants: gold-primary (1 of 7 gold usages strict), silver-secondary, silver-outline.
 * Auto-renders as <a> if href, <button> if onClick.
 * Discriminated union enforces XOR: either href or onClick, never both.
 */
export function CTAPill(props: CTAPillProps) {
  const { variant, children, className, ariaLabel } = props;
  const allClasses = clsx(baseClasses, variantClasses[variant], className);

  if ('href' in props && props.href !== undefined) {
    return (
      <Link to={props.href} className={allClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={props.onClick} className={allClasses} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
