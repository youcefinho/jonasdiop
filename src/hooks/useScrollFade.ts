import { useEffect, useRef } from 'react';

interface UseScrollFadeOptions {
  /** Distance (px) over which the fade fully completes. Default 600. */
  distance?: number;
  /** Max translateY offset (px) at full fade. Default 40. */
  maxOffset?: number;
}

/**
 * useScrollFade — applies opacity + translateY to an element based on the
 * window scroll position. Used on the Hero content wrapper to create a
 * cinematic "fade-into-the-background" effect as the user scrolls past the
 * first viewport. rAF-throttled, GPU-safe (transform + opacity only).
 *
 * Respects prefers-reduced-motion (no-op). Returns a ref to attach to the
 * element you want to animate.
 *
 * The effect runs from scrollY 0 → scrollY `distance` :
 *   - opacity 1 → 0
 *   - translateY 0 → -maxOffset
 * Beyond `distance`, the element stays at opacity 0 + translateY(-maxOffset).
 */
export function useScrollFade<T extends HTMLElement>({
  distance = 600,
  maxOffset = 40
}: UseScrollFadeOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.style.willChange = 'opacity, transform';

    let pending = false;
    let rafId = 0;

    const update = () => {
      pending = false;
      const y = window.scrollY;
      const t = Math.min(Math.max(y / distance, 0), 1);
      el.style.opacity = String(1 - t);
      el.style.transform = `translate3d(0, ${-maxOffset * t}px, 0)`;
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(rafId);
      el.style.willChange = 'auto';
    };
  }, [distance, maxOffset]);

  return ref;
}
