import { useEffect, useRef } from 'react';

interface MouseFollowSpotlightProps {
  /** Spotlight color (oklch string or hex). Default warm cream silver. */
  color?: string;
  /** Spotlight radius (px). Default 280. */
  size?: number;
  /** Opacity at center. Default 0.10. */
  intensity?: number;
}

/**
 * MouseFollowSpotlight — radial gradient light that follows the cursor inside
 * the parent element.
 *
 * Pattern : the spotlight tracks mouseX/Y position via CSS custom properties
 * updated on mousemove (rAF throttled). The gradient is positioned at those
 * coords. Outside of the parent, the spotlight stays at last position +
 * fades to opacity 0.
 *
 * Drop inside a `position: relative; overflow: hidden` parent. The spotlight
 * fills inset-0, pointer-events-none, -z-10.
 *
 * Disabled on touch + reduced-motion (falls back to centered static
 * gradient).
 */
export function MouseFollowSpotlight({
  color = 'oklch(0.88 0.012 80)',
  size = 280,
  intensity = 0.1
}: MouseFollowSpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || prefersReduced) {
      el.style.setProperty('--spotlight-x', '50%');
      el.style.setProperty('--spotlight-y', '50%');
      el.style.setProperty('--spotlight-opacity', String(intensity));
      return;
    }

    const parent = el.parentElement;
    if (!parent) return;

    let rafId = 0;
    let pending = false;
    let lastX = 50;
    let lastY = 50;

    const update = () => {
      pending = false;
      el.style.setProperty('--spotlight-x', `${lastX}%`);
      el.style.setProperty('--spotlight-y', `${lastY}%`);
    };

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      lastX = ((e.clientX - rect.left) / rect.width) * 100;
      lastY = ((e.clientY - rect.top) / rect.height) * 100;
      if (pending) return;
      pending = true;
      rafId = window.requestAnimationFrame(update);
    };

    const onEnter = () => {
      el.style.setProperty('--spotlight-opacity', String(intensity));
    };
    const onLeave = () => {
      el.style.setProperty('--spotlight-opacity', '0');
    };

    parent.addEventListener('mousemove', onMove, { passive: true });
    parent.addEventListener('mouseenter', onEnter);
    parent.addEventListener('mouseleave', onLeave);

    // Initial state — visible centered
    el.style.setProperty('--spotlight-opacity', String(intensity));

    return () => {
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseenter', onEnter);
      parent.removeEventListener('mouseleave', onLeave);
      window.cancelAnimationFrame(rafId);
    };
  }, [intensity]);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500"
      style={{
        background: `radial-gradient(${size}px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), ${color} 0%, transparent 60%)`,
        opacity: 'var(--spotlight-opacity, 0)'
      }}
    />
  );
}
