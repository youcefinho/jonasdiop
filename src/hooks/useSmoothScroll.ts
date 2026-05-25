import { useCallback } from 'react';
import { getLenis } from '@/lib/motion/lenis';

type SmoothScrollFn = (anchor: string) => void;

/**
 * Returns a smooth-scroll function that targets an anchor (e.g., '#methodologie').
 * Prefers Lenis if available (smooth animation), falls back to native scrollIntoView.
 * No-op if target element not found.
 */
export function useSmoothScroll(): SmoothScrollFn {
  return useCallback((anchor: string) => {
    const target = document.querySelector(anchor);
    if (!target) return;

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { duration: 1.2 });
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
}
