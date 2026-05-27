import { useEffect, useRef } from 'react';

interface UseTilt3DOptions {
  /** Max tilt in degrees. 6 = subtle (default), 12 = strong, 20 = dramatic. */
  maxTilt?: number;
  /** Perspective in px. Higher = less dramatic. Default 1000. */
  perspective?: number;
  /** Glow follow scale (gradient highlight intensity). 0 = no glow. Default 0.4. */
  glowIntensity?: number;
}

/**
 * useTilt3D — attaches mousemove listener so the ref'd element tilts in 3D
 * toward the cursor on hover. Combines rotateX + rotateY based on cursor
 * position relative to element center.
 *
 * Effect : the card appears to physically tilt under the cursor, simulating a
 * tactile premium surface. GPU-safe (transform 3D only). Resets smoothly on
 * leave via CSS transition.
 *
 * Disabled on touch devices + prefers-reduced-motion. Use sparingly — 1-3
 * focal elements max per page.
 *
 * Inspired by Awwwards-tier sites where focal cards tilt subtly under cursor.
 */
export function useTilt3D<T extends HTMLElement = HTMLDivElement>({
  maxTilt = 6,
  perspective = 1000,
  glowIntensity = 0.4
}: UseTilt3DOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || prefersReduced) return;

    el.style.transition = 'transform 280ms cubic-bezier(0.22, 1, 0.36, 1)';
    el.style.transformStyle = 'preserve-3d';
    el.style.willChange = 'transform';

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Normalize -1 to +1
      const nx = (x - centerX) / centerX;
      const ny = (y - centerY) / centerY;

      const rotateY = nx * maxTilt;
      const rotateX = -ny * maxTilt;

      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // Update CSS custom properties for glow tracking (optional consumer use)
      if (glowIntensity > 0) {
        el.style.setProperty('--tilt-glow-x', `${(x / rect.width) * 100}%`);
        el.style.setProperty('--tilt-glow-y', `${(y / rect.height) * 100}%`);
        el.style.setProperty('--tilt-glow-opacity', String(glowIntensity));
      }
    };

    const onLeave = () => {
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
      if (glowIntensity > 0) {
        el.style.setProperty('--tilt-glow-opacity', '0');
      }
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [maxTilt, perspective, glowIntensity]);

  return ref;
}
