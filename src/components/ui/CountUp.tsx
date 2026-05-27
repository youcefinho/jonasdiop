import { useEffect, useMemo, useRef, useState } from 'react';

interface CountUpProps {
  /** Target number to count up to. */
  to: number;
  /** Optional prefix (e.g. "$"). */
  prefix?: string;
  /** Optional suffix (e.g. "+", "M$+", " ANS"). */
  suffix?: string;
  /** Animation duration in ms. Default 1600. */
  duration?: number;
  /** Decimal places to render. Default 0. */
  decimals?: number;
  /** Locale for number formatting. Default 'fr-CA'. */
  locale?: string;
  /** Extra className for the rendered span. */
  className?: string;
}

/**
 * CountUp — animates a number from 0 to `to` when the element enters the
 * viewport. Uses requestAnimationFrame + ease-out cubic for a premium feel.
 * Respects prefers-reduced-motion (jumps directly to final value, no anim).
 * Above-the-fold guard via getBoundingClientRect to avoid IO miss on initial
 * intersection. Idempotent : only animates once per mount.
 *
 * Renders : `{prefix}{formatted-number}{suffix}` inside a single <span>.
 */
export function CountUp({
  to,
  prefix = '',
  suffix = '',
  duration = 1600,
  decimals = 0,
  locale = 'fr-CA',
  className
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setValue(to);
      return;
    }

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - (1 - t) ** 3;
        setValue(to * eased);
        if (t < 1) window.requestAnimationFrame(tick);
        else setValue(to);
      };
      window.requestAnimationFrame(tick);
    };

    // Above-the-fold guard
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      window.requestAnimationFrame(run);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        obs.disconnect();
        run();
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  // Memoize formatter to avoid recreating ~60 Intl.NumberFormat instances per
  // second during the animation tick (3 CountUps × 60fps = ~180/sec waste).
  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals
      }),
    [locale, decimals]
  );

  return (
    <span ref={spanRef} className={className}>
      {prefix}
      {formatter.format(value)}
      {suffix}
    </span>
  );
}
