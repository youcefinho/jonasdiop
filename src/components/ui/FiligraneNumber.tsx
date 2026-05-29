import { clsx } from 'clsx';

interface FiligraneNumberProps {
  /** Two-digit section index displayed as outline filigrane (e.g. "02", "03"). */
  number: string;
  /** Horizontal anchor. Alternate left/right across consecutive sections for rhythm. */
  position?: 'right' | 'left';
}

/**
 * FiligraneNumber — large outline silver section-index marker rendered behind
 * section headings. Signature DESIGN-v2-silver.md ("Section numbering 01-05
 * large outline silver filigrane"). Decorative only : aria-hidden, pointer-events
 * none, select-none. Subtle stroke (silver/6%) so it whispers under the title.
 */
export function FiligraneNumber({ number, position = 'right' }: FiligraneNumberProps) {
  return (
    <span
      data-filigrane-number
      aria-hidden="true"
      className={clsx(
        'pointer-events-none absolute top-md select-none font-display font-bold leading-none tracking-tighter text-transparent',
        'text-[clamp(7rem,18vw,14rem)]',
        // Default silver stroke for non-bootcamp pages. Bootcamp pages override
        // via cascade selector `[data-bootcamp] [data-filigrane-number]` below.
        '[-webkit-text-stroke:1px_oklch(0.79_0.005_270/0.06)]',
        '[text-stroke:1px_oklch(0.79_0.005_270/0.06)]',
        position === 'right' ? 'right-md' : 'left-md'
      )}
    >
      {number}
    </span>
  );
}
