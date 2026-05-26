import { useEffect, useRef } from 'react';

interface UseMagneticOptions {
  /** Pull strength multiplier — how strongly the element follows the cursor.
   * 0.15 = subtle (default), 0.3 = strong, 0.5 = aggressive. */
  strength?: number;
  /** Activation radius in px — the cursor must be within this distance to
   * trigger the magnetic effect. Default 80. */
  radius?: number;
}

/**
 * useMagnetic — attaches mousemove listener to a ref'd element so it
 * translates subtly toward the cursor when within `radius` px.
 *
 * Effect : on hover-near, the element pulls toward the cursor. On leave,
 * resets smoothly to origin via CSS transition (set in globals.css .magnetic).
 *
 * GPU-safe (transform translate3d only). Disabled on touch devices + when
 * prefers-reduced-motion is set.
 *
 * Inspired by soft-skill skill "Magnetic Button Hover Physics" : "Scale down
 * slightly + nested icon translates diagonally + internal kinetic tension".
 */
export function useMagnetic({ strength = 0.15, radius = 80 }: UseMagneticOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch devices + reduced-motion
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || prefersReduced) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < radius) {
        el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
      } else {
        el.style.transform = 'translate3d(0, 0, 0)';
      }
    };

    const onLeave = () => {
      el.style.transform = 'translate3d(0, 0, 0)';
    };

    // Listen at document level so the effect works in the wider radius
    document.addEventListener('mousemove', onMove, { passive: true });
    el.addEventListener('mouseleave', onLeave);

    return () => {
      document.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength, radius]);

  return ref;
}
