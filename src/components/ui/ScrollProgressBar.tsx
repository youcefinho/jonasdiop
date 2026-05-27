import { useEffect, useState } from 'react';

/**
 * ScrollProgressBar — fixed top of viewport, fills based on scroll depth.
 *
 * Premium polish signature : 2px gold bar that grows left → right as the user
 * scrolls. Used by editorial / agency-tier sites for orientation feedback.
 *
 * rAF-throttled for 60fps. GPU-safe (transform scaleX only). Skip rendering
 * if scroll height ≤ viewport (no scroll possible).
 */
export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let pending = false;

    const update = () => {
      pending = false;
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }
      const pct = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
      setProgress(pct);
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 right-0 z-[60] h-[2px]"
    >
      <div
        className="h-full bg-gradient-to-r from-gold via-gold/80 to-gold origin-left will-change-transform"
        style={{
          transform: `scaleX(${progress})`,
          transition: 'transform 80ms linear'
        }}
      />
    </div>
  );
}
