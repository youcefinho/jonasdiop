import { type RefObject, useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  duration: number;
  threshold: number;
  ref: RefObject<HTMLElement | null>;
}

/**
 * Animate a number from 0 to `value` when the ref element enters viewport
 * at `threshold` ratio. Runs ONCE per page-load (no reset on re-entry).
 * Respects prefers-reduced-motion: returns final value immediately.
 *
 * Easing: ease-out-expo (matches motion presets).
 */
export function useCountUp(value: number, options: UseCountUpOptions): number {
  const { duration, threshold, ref } = options;
  const [current, setCurrent] = useState(0);
  const hasRunRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCurrent(value);
      hasRunRef.current = true;
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold && !hasRunRef.current) {
            hasRunRef.current = true;
            const startTime = performance.now();
            const animate = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - 2 ** (-10 * progress);
              const next = Math.round(value * eased);
              setCurrent(next);
              if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
              } else {
                setCurrent(value);
              }
            };
            rafRef.current = requestAnimationFrame(animate);
            observer.disconnect();
          }
        }
      },
      { threshold: [threshold] }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration, threshold, ref]);

  return current;
}
