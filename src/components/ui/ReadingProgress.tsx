import { useEffect, useState } from 'react';

interface ReadingProgressProps {
  /** CSS selector for the article container being tracked. Default `[data-article-body]`. */
  target?: string;
}

/**
 * ReadingProgress — thin gold bar that fills as the user reads through the
 * target element (article body). Different from `ScrollProgressBar` which
 * tracks the whole page : this one tracks ONE element's visible scroll range
 * (top entering viewport → bottom leaving viewport).
 *
 * Mounted under the navbar (top: 80px), so the global ScrollProgressBar (top: 0)
 * stays visible on top. Renders nothing if target not found. rAF-throttled.
 */
export function ReadingProgress({ target = '[data-article-body]' }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = document.querySelector<HTMLElement>(target);
    if (!el) {
      setReady(false);
      return;
    }
    setReady(true);

    let pending = false;
    let rafId = 0;

    const update = () => {
      pending = false;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height + viewportH;
      const scrolled = viewportH - rect.top;
      const pct = Math.min(Math.max(scrolled / total, 0), 1);
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
  }, [target]);

  if (!ready) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-[80px] left-0 right-0 z-[55] h-[1.5px] bg-silver/5"
    >
      <div
        className="h-full bg-gradient-to-r from-gold/80 via-gold to-gold/80 origin-left will-change-transform"
        style={{
          transform: `scaleX(${progress})`,
          transition: 'transform 100ms linear'
        }}
      />
    </div>
  );
}
