import { clsx } from 'clsx';
import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  goldDot?: boolean;
  className?: string;
}

/**
 * Eyebrow label — uppercase tracking-widest with optional gold dot signature.
 * Used cross-Jonas (Hero, About, CDT, LPs, sections signature).
 * Default goldDot=true (the signature pattern).
 */
export function Eyebrow({ children, goldDot = true, className }: EyebrowProps) {
  return (
    <p className={clsx('inline-flex items-center gap-2', className)}>
      {goldDot && (
        <span
          data-eyebrow-dot
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full bg-gold"
        />
      )}
      <span className="text-eyebrow uppercase tracking-widest text-silver font-display">
        {children}
      </span>
    </p>
  );
}
