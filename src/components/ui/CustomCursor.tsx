import { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor — Desktop-only premium cursor.
 *
 * Two layers : a small gold dot that tracks the cursor precisely, and a larger
 * silver outline ring that follows with subtle inertia (~14% lerp per frame).
 * On hover over interactive elements (`a`, `button`, `[role="button"]`,
 * `[data-cursor="hover"]`) the ring expands and the dot fades to a halo.
 *
 * Disabled when : (touch device) || (reduced-motion) || (coarse pointer).
 * GPU-only animation (translate3d + scale). Native cursor stays as fallback
 * for accessibility tools and is hidden via document.documentElement.classList.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fineMQ = window.matchMedia('(pointer: fine)');
    const reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
    const recheck = () => setEnabled(fineMQ.matches && !reducedMQ.matches);
    recheck();
    fineMQ.addEventListener('change', recheck);
    reducedMQ.addEventListener('change', recheck);
    return () => {
      fineMQ.removeEventListener('change', recheck);
      reducedMQ.removeEventListener('change', recheck);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add('has-custom-cursor');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let hovering = false;
    let rafId = 0;

    const INTERACTIVE_SELECTOR =
      'a, button, [role="button"], [data-cursor="hover"], input, textarea, select, label';

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const isInteractive = target?.closest(INTERACTIVE_SELECTOR);
      if (Boolean(isInteractive) !== hovering) {
        hovering = Boolean(isInteractive);
        ring.dataset.hover = hovering ? 'true' : 'false';
        dot.dataset.hover = hovering ? 'true' : 'false';
      }
    };

    const onLeave = () => {
      ring.style.opacity = '0';
      dot.style.opacity = '0';
    };

    const onEnter = () => {
      ring.style.opacity = '1';
      dot.style.opacity = '1';
    };

    const tick = () => {
      // Lerp ring towards mouse (inertia)
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0) scale(${hovering ? 1.65 : 1})`;
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      rafId = window.requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    tick();

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      window.cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] h-9 w-9 rounded-full border border-silver/45 mix-blend-difference will-change-transform transition-[border-color,background-color,opacity] duration-200 ease-out data-[hover=true]:border-gold/80 data-[hover=true]:bg-gold/5"
        style={{ transitionProperty: 'border-color, background-color, opacity, scale' }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[71] h-1.5 w-1.5 rounded-full bg-gold mix-blend-difference will-change-transform transition-opacity duration-200 ease-out data-[hover=true]:opacity-0"
      />
    </>
  );
}
