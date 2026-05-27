import { type ReactNode, useEffect, useRef } from 'react';

interface ImageRevealProps {
  children: ReactNode;
  /** Reveal direction. `expand` = clip-path inset from 50% center →
   * 0% (image expands open). `slide-up` = clip-path bottom→top. `slide-left`
   * = clip-path right→left. Default `expand`. */
  direction?: 'expand' | 'slide-up' | 'slide-left' | 'slide-right';
  /** Reveal duration (ms). Default 900. */
  duration?: number;
  /** Delay before reveal (ms). Default 0. */
  delay?: number;
  /** Intersection threshold 0..1. Default 0.
   * NOTE : MUST stay at 0 by default. Chrome's IntersectionObserver respects
   * the target's `clip-path` when computing `intersectionRatio`. Since this
   * component starts with a clip-path that hides the wrapper (inset(100%) or
   * inset(45%)), the visible area = 0 → ratio = 0 → any threshold > 0 would
   * NEVER fire. The bug : portraits stuck invisible on below-the-fold sections
   * because reveal() was never called. Threshold 0 means "any positive bounding
   * box overlap fires" — IO callback runs even when ratio=0 because
   * isIntersecting flips from false to true. */
  threshold?: number;
  className?: string;
}

const INITIAL_CLIPS: Record<NonNullable<ImageRevealProps['direction']>, string> = {
  expand: 'inset(45% 45% 45% 45%)',
  'slide-up': 'inset(100% 0 0 0)',
  'slide-left': 'inset(0 0 0 100%)',
  'slide-right': 'inset(0 100% 0 0)'
};

/**
 * ImageReveal — wraps an image (or any visual block) and animates its
 * clip-path on viewport entry. Creates the "Awwwards-tier" reveal where
 * the image appears to "open" from a clipped state.
 *
 * Directions :
 *  - `expand` (default) : clip-path inset 45% → 0 — image expands from center
 *  - `slide-up` : reveals bottom→top
 *  - `slide-left` / `slide-right` : horizontal slide reveals
 *
 * GPU-safe (clip-path animation is composited). Respects reduced-motion
 * (immediate full reveal). Triggers once via IntersectionObserver.
 */
export function ImageReveal({
  children,
  direction = 'expand',
  duration = 900,
  delay = 0,
  threshold = 0,
  className
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.style.clipPath = 'inset(0 0 0 0)';
      return;
    }

    el.style.clipPath = INITIAL_CLIPS[direction];
    el.style.transition = 'none';
    el.style.willChange = 'clip-path';

    /**
     * Trigger the reveal animation. Idempotent — guards against IO double-fire
     * + above-the-fold immediate-reveal race.
     */
    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      window.setTimeout(() => {
        el.style.transition = `clip-path ${duration}ms cubic-bezier(0.7, 0, 0.3, 1)`;
        el.style.clipPath = 'inset(0 0 0 0)';
        window.setTimeout(() => {
          el.style.willChange = 'auto';
        }, duration + 100);
      }, delay);
    };

    /**
     * Check if the element is ALREADY in viewport on mount. Above-the-fold
     * images (Hero portraits etc.) need immediate reveal because the
     * IntersectionObserver "first observe" sometimes misses elements that
     * were intersecting before the observer was attached (StrictMode double
     * mount, hydration timing, etc.).
     */
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) {
      // Use rAF to let the initial clip-path commit before we transition off.
      window.requestAnimationFrame(() => reveal());
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        reveal();
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, duration, delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
