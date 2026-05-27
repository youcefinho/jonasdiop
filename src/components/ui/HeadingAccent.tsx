import { useEffect, useRef, useState } from 'react';

interface HeadingAccentProps {
  /** Visual variant — gold (default) or silver. */
  variant?: 'gold' | 'silver';
  /** Underline width when drawn. Default 60px. */
  width?: number;
  /** Alignment relative to parent heading. Default 'left'. */
  align?: 'left' | 'center';
  /** Extra className for the wrapper span. */
  className?: string;
}

/**
 * HeadingAccent — thin horizontal line that draws from left to right when
 * the element enters the viewport. Drop directly below an h2/h3 to add a
 * premium "section signature" accent. Above-the-fold guard via
 * getBoundingClientRect ; respects prefers-reduced-motion.
 *
 * Use sparingly : 1× per major section header at most, to keep the gold
 * usage strict (per Platinum Executive Authority DA — 7 gold usages).
 *
 * Renders as `<span aria-hidden>` so it inherits inline flow under headings
 * without affecting tab order or screen readers.
 */
export function HeadingAccent({
  variant = 'gold',
  width = 60,
  align = 'left',
  className = ''
}: HeadingAccentProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDrawn(true);
      return;
    }
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      window.requestAnimationFrame(() => setDrawn(true));
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        obs.disconnect();
        setDrawn(true);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const color = variant === 'gold' ? 'oklch(0.74 0.085 75)' : 'oklch(0.82 0.005 270)';
  const justify = align === 'center' ? 'justify-center' : 'justify-start';

  return (
    <span
      ref={wrapperRef}
      aria-hidden="true"
      className={`flex items-center ${justify} mt-3 ${className}`}
    >
      <span
        className="block h-px will-change-transform"
        style={{
          width: `${width}px`,
          background: `linear-gradient(to right, ${color}, transparent)`,
          transformOrigin: 'left',
          transform: drawn ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      />
    </span>
  );
}
