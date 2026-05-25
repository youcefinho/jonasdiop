import { clsx } from 'clsx';

interface LogoWordmarkProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'text-[clamp(0.875rem,0.75rem+0.4vw,1rem)]',
  md: 'text-[clamp(1rem,0.85rem+0.5vw,1.25rem)]',
  lg: 'text-[clamp(1.25rem,1rem+0.8vw,1.75rem)]'
};

/**
 * Logo wordmark text-based "JONAS DIOP" with gold dot signature after 'D'.
 * Placeholder until real SVG vector logo lands (H7 pending Jonas).
 */
export function LogoWordmark({ size = 'md', className }: LogoWordmarkProps) {
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
      <span
        data-logo-dot
        aria-hidden="true"
        className="inline-block h-1 w-1 rounded-full bg-gold translate-y-[-2px]"
      />
    </span>
  );
}
