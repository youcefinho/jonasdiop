import { clsx } from 'clsx';

interface LogoWordmarkProps {
  size?: 'sm' | 'md' | 'lg';
  /** Show gold dot signature after wordmark. Default false (matches Stitch
   * board 13 Hero navbar logo). Enable for FooterRich (board 18 "gold dot
   * signature" variant) or any context where the dot signature is wanted. */
  withDot?: boolean;
  className?: string;
}

const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'text-[clamp(0.875rem,0.75rem+0.4vw,1rem)]',
  md: 'text-[clamp(1rem,0.85rem+0.5vw,1.25rem)]',
  lg: 'text-[clamp(1.25rem,1rem+0.8vw,1.75rem)]'
};

/**
 * Logo wordmark text-based "JONAS DIOP". Placeholder until real SVG vector
 * logo lands (H7 pending Jonas).
 *
 * Default = plain wordmark (no dot) per Stitch board 13 Hero navbar.
 * `withDot` = true → gold dot signature after wordmark per Stitch board 18
 * (logo variant 2 "wordmark + gold dot signature").
 */
export function LogoWordmark({ size = 'md', withDot = false, className }: LogoWordmarkProps) {
  return (
    <span
      data-logo-wordmark
      className={clsx(
        'inline-flex items-baseline gap-1 font-display font-semibold tracking-tight text-primary uppercase',
        sizeClasses[size],
        className
      )}
    >
      <span>JONAS DIOP</span>
      {withDot && (
        <span
          data-logo-dot
          aria-hidden="true"
          className="inline-block h-1 w-1 rounded-full bg-gold translate-y-[-2px]"
        />
      )}
    </span>
  );
}
