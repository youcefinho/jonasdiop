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
  /** Intersection threshold 0..1. Default 0.15. */
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
  threshold = 0.15,
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        window.setTimeout(() => {
          el.style.transition = `clip-path ${duration}ms cubic-bezier(0.7, 0, 0.3, 1)`;
          el.style.clipPath = 'inset(0 0 0 0)';
          window.setTimeout(() => {
            el.style.willChange = 'auto';
          }, duration + 100);
        }, delay);
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
