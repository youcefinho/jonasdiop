import { useEffect, useRef } from 'react';

interface UseParallaxOptions {
  /** Parallax intensity. 0.1 = subtle, 0.3 = noticeable, 0.5 = dramatic.
   * Negative inverts direction (element moves up as page scrolls down). */
  speed?: number;
}

/**
 * useParallax — attaches a scroll listener that translates the ref'd element
 * vertically based on its position relative to the viewport center.
 *
 * Element moves slower than scroll when speed < 1 (parallax background feel).
 * Uses rAF throttling for 60fps. GPU-safe (transform translate3d only).
 *
 * Disabled on touch devices + prefers-reduced-motion. Returns the ref to
 * attach.
 *
 * Inspired by editorial sites (Apple/Patek) where signature photos drift
 * during scroll to add depth. Use sparingly — 1-2 images per page max.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>({
  speed = 0.2
}: UseParallaxOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || prefersReduced) return;

    let rafId = 0;
    let pending = false;

    const update = () => {
      pending = false;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportH / 2;
      const distance = elementCenter - viewportCenter;
      const offset = distance * speed;
      el.style.transform = `translate3d(0, ${-offset}px, 0)`;
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      rafId = window.requestAnimationFrame(update);
    };

    el.style.willChange = 'transform';
    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // initial position

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(rafId);
      el.style.willChange = 'auto';
    };
  }, [speed]);

  return ref;
}
