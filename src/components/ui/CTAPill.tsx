import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';

type CTAVariant = 'silver-primary' | 'gold-primary' | 'silver-secondary' | 'silver-outline';

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
  'relative isolate inline-flex items-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display transition-all duration-base';

/**
 * Halo silver radial — signature derrière les CTAs silver-primary.
 * Pseudo positioned -z-10 behind button, soft silver bloom + blur, intensifies
 * on hover. Matches Stitch board 13 "silver luminous stage" effect.
 */
const silverHalo =
  "before:content-[''] before:absolute before:inset-[-1.75rem] before:rounded-pill before:bg-[radial-gradient(circle,oklch(0.79_0.005_270/0.22)_0%,transparent_70%)] before:blur-xl before:-z-10 before:opacity-90 hover:before:opacity-100 hover:before:inset-[-2.25rem] before:transition-all before:duration-base";

/**
 * Halo warm gold radial — signature derrière les CTAs gold-primary.
 * Same bloom architecture as silverHalo but warm gold (#c9a572) for the
 * exceptional commitment moments (Hero PRENDRE RENDEZ-VOUS, FinalCTA "Réserver
 * mon appel"). Matches Stitch board 13 warm bloom around gold pill.
 */
const goldHalo =
  "before:content-[''] before:absolute before:inset-[-1.75rem] before:rounded-pill before:bg-[radial-gradient(circle,oklch(0.74_0.085_75/0.35)_0%,oklch(0.74_0.085_75/0.10)_45%,transparent_72%)] before:blur-xl before:-z-10 before:opacity-95 hover:before:opacity-100 hover:before:inset-[-2.25rem] before:transition-all before:duration-base";

const variantClasses: Record<CTAVariant, string> = {
  // DEFAULT primary — filled silver #c0c0c5 + text base. Used on every page's
  // commitment CTA (form submits, page-final CTAs, LP CTAs, etc.) per
  // DESIGN-v2-silver.md "Primary (silver) : filled silver bg + base text".
  'silver-primary': `bg-silver text-base hover:bg-silver/90 hover:scale-[1.02] hover:shadow-[0_0_24px_oklch(0.79_0.005_270/0.25)] ${silverHalo}`,
  // EXCEPTIONAL primary — gold. Reserved for Hero PRENDRE RENDEZ-VOUS +
  // FinalCTA "Réserver mon appel" only (Home page commitment moments per
  // Stitch board 13). Warm gold halo, not silver.
  'gold-primary': `bg-gold text-base hover:shadow-[0_0_32px_oklch(0.74_0.085_75/0.50)] hover:scale-[1.02] ${goldHalo}`,
  'silver-secondary':
    'bg-transparent border border-silver/40 text-silver hover:border-silver hover:bg-silver/5',
  'silver-outline': 'bg-transparent border border-silver/60 text-silver hover:bg-silver/10'
};

/**
 * CTA pill button — used for hero CTAs, final CTAs, nav CTA.
 * Four variants :
 *   - silver-primary  : DEFAULT for every commitment CTA across the site.
 *   - gold-primary    : EXCEPTIONAL — Home Hero + Home FinalCTA only (1 of 7
 *                       strict gold usages per DESIGN-v2-silver.md).
 *   - silver-secondary: transparent bordered (nav, scroll cue, secondary CTAs).
 *   - silver-outline  : same family, slightly different hover (nav consultation).
 * Auto-renders as <a> if href, <button> if onClick.
 * Discriminated union enforces XOR : either href or onClick, never both.
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
