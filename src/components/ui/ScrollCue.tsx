import { ChevronDown } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface ScrollCueProps {
  href: string;
  ariaLabel: string;
}

/**
 * Mini chevron scroll cue, bottom-center of section.
 * Animation : breathe loop (scale 1↔1.05) via Tailwind animate utility.
 * Click : smooth-scrolls to href anchor (uses Lenis if available).
 */
export function ScrollCue({ href, ariaLabel }: ScrollCueProps) {
  const scrollTo = useSmoothScroll();

  return (
    <button
      type="button"
      onClick={() => scrollTo(href)}
      aria-label={ariaLabel}
      className="absolute bottom-md left-1/2 -translate-x-1/2 text-silver opacity-60 hover:opacity-100 transition-opacity duration-base animate-breathe"
    >
      <ChevronDown className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
