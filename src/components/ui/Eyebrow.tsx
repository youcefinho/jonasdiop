import { clsx } from 'clsx';
import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  goldDot?: boolean;
  /** Variant pill = badge with border + radius + padding (jonasdiop.com style).
   * Default `pill`. Use `plain` to keep the legacy inline-text style. */
  variant?: 'pill' | 'plain';
  className?: string;
}

/**
 * Eyebrow label — uppercase tracking-widest with optional gold dot signature.
 *
 * NEW variant 'pill' (default) extracted from jonasdiop.com Framer "shimmering"
 * element : rounded-full pill avec border subtle 1px silver/20 + padding
 * 6px-12px. Donne un badge premium identifiable au-dessus des h1/h2.
 *
 * Legacy `plain` variant disponible si besoin de l'eyebrow inline (cas rares
 * comme captions sous photos signature).
 */
export function Eyebrow({ children, goldDot = true, variant = 'pill', className }: EyebrowProps) {
  if (variant === 'plain') {
    return (
      <p className={clsx('inline-flex items-center gap-2', className)}>
        {goldDot && (
          <span
            data-eyebrow-dot
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-gold animate-eyebrow-dot-pulse"
          />
        )}
        <span className="text-eyebrow uppercase tracking-widest text-silver font-display">
          {children}
        </span>
      </p>
    );
  }

  // pill variant — badge with subtle border + bg + padding (jonasdiop signature)
  return (
    <p
      className={clsx(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full',
        'border border-silver/20 bg-base/40 backdrop-blur-sm',
        'shadow-haptic-inset',
        className
      )}
    >
      {goldDot && (
        <span
          data-eyebrow-dot
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full bg-gold animate-eyebrow-dot-pulse"
        />
      )}
      <span className="text-eyebrow uppercase tracking-widest text-silver font-display">
        {children}
      </span>
    </p>
  );
}
