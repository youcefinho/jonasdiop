import { useEffect, useRef, useState } from 'react';

interface SectionDividerProps {
  /** Visual variant — controls gradient stops on the line. */
  variant?: 'gold' | 'silver';
  /** Extra className on the wrapper (e.g. margin). */
  className?: string;
}

/**
 * SectionDivider — thin horizontal SVG line that draws in via
 * stroke-dashoffset when entering viewport. Gradient transparent → gold/silver
 * → transparent for a refined fade-in-and-out edge. Drop between major
 * sections to mark transitions without breaking the visual rhythm.
 *
 * Reduced-motion : instantly drawn. Above-the-fold guard via getBoundingClientRect.
 */
export function SectionDivider({ variant = 'gold', className = '' }: SectionDividerProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = svgRef.current;
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
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const gradId = `section-divider-${variant}`;
  const accent = variant === 'gold' ? 'oklch(0.74 0.085 75)' : 'oklch(0.82 0.005 270)';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none mx-auto w-full max-w-[var(--container-default)] px-[clamp(1rem,4vw,3rem)] ${className}`}
    >
      <svg
        ref={svgRef}
        role="presentation"
        preserveAspectRatio="none"
        viewBox="0 0 1000 2"
        className="block h-px w-full"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor={accent} stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M 0 1 L 1000 1"
          stroke={`url(#${gradId})`}
          strokeWidth="1"
          fill="none"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: drawn ? 0 : 1000,
            transition: 'stroke-dashoffset 1600ms cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        />
      </svg>
    </div>
  );
}
