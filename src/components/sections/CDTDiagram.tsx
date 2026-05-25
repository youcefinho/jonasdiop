import { useEffect, useRef } from 'react';
import { methodologieCdtCopy } from '@/data/copy/methodologie-cdt';
import { useT } from '@/lib/i18n/useT';

/**
 * CDTDiagram — 3 piliers hexagones SVG avec halo gold radial center.
 * Visual signature de la méthodologie CDT™ (usage gold #1/7 strict).
 *
 * Design : Platinum Executive Authority DA.
 * Layout : 3 hexagones inline, halo gold radial derrière le pilier central.
 * Motion : stagger reveal via IntersectionObserver (opacity + translateY, reduced-motion safe).
 * Décoratif Sprint 3 — sans interactivité. Extensible vers hover/orbit Sprint 7.
 *
 * Soft-skill archetype : Ethereal Glass / Asymmetrical Z-Axis Cascade
 * Emil principles : scale(0.97) → scale(1) entry, stagger 60ms, ease-out cubic-bezier, GPU-only.
 */

/** Hexagone SVG clipPath coords — flat-top, 120×104 viewBox. */
const HEX_POINTS = '60,0 120,30 120,90 60,120 0,90 0,30';

/** Pillar index → stagger delay in ms */
const STAGGER_DELAYS = [0, 60, 120] as const;

interface PillarCardProps {
  pillar: (typeof methodologieCdtCopy.pillars.items)[number];
  index: number;
  isCenter: boolean;
}

function PillarCard({ pillar, index, isCenter }: PillarCardProps) {
  const { t } = useT();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) scale(1)';
      return;
    }

    // Initial hidden state
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px) scale(0.97)';
    el.style.transition = 'none';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const delay = STAGGER_DELAYS[index] ?? 0;
        setTimeout(() => {
          el.style.transition =
            'opacity 520ms cubic-bezier(0.23, 1, 0.32, 1), transform 520ms cubic-bezier(0.23, 1, 0.32, 1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) scale(1)';
        }, delay);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={ref}
      aria-label={t(pillar.title)}
      style={{ willChange: 'transform, opacity' }}
      className={[
        'relative flex flex-col items-center text-center gap-[clamp(0.75rem,0.6rem+0.7vw,1.125rem)]',
        'px-[clamp(1.25rem,0.9rem+1.6vw,2.25rem)] py-[clamp(1.75rem,1.3rem+2.2vw,3rem)]',
        /* Double-bezel outer shell */
        'rounded-[clamp(1rem,0.7rem+1.4vw,1.75rem)]',
        'ring-1',
        isCenter ? 'ring-gold/25 bg-elevated/80' : 'ring-silver/10 bg-elevated/50',
        'backdrop-blur-sm',
        /* Inner highlight — Emil: inset shadow for depth */
        isCenter
          ? 'shadow-[inset_0_1px_1px_oklch(0.74_0.085_75_/_0.12),_0_0_48px_oklch(0.74_0.085_75_/_0.08)]'
          : 'shadow-[inset_0_1px_1px_oklch(1_0_0_/_0.07)]'
      ].join(' ')}
    >
      {/* Hexagone SVG filigrane — gold for center, silver for flanks */}
      <div
        aria-hidden="true"
        className="relative w-[clamp(3.5rem,2.8rem+3.5vw,5.5rem)] h-auto shrink-0"
      >
        <svg
          viewBox="0 -6 120 132"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          role="presentation"
        >
          {/* Outer stroke hexagone */}
          <polygon
            points={HEX_POINTS}
            fill="none"
            stroke={isCenter ? 'oklch(0.74 0.085 75 / 0.55)' : 'oklch(0.79 0.005 270 / 0.25)'}
            strokeWidth="2"
          />
          {/* Inner subtle fill */}
          <polygon
            points={HEX_POINTS}
            fill={isCenter ? 'oklch(0.74 0.085 75 / 0.07)' : 'oklch(0.79 0.005 270 / 0.04)'}
          />
          {/* Number centered */}
          <text
            x="60"
            y="72"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="36"
            fontFamily="'Space Grotesk Variable', system-ui, sans-serif"
            fontWeight="300"
            letterSpacing="-1"
            fill={isCenter ? 'oklch(0.74 0.085 75 / 0.85)' : 'oklch(0.79 0.005 270 / 0.55)'}
          >
            {pillar.number}
          </text>
        </svg>
      </div>

      {/* Title */}
      <h3
        className={[
          'font-display text-balance leading-[1.1] tracking-[-0.025em]',
          'text-[clamp(1.0625rem,0.9rem+0.8vw,1.375rem)]',
          isCenter ? 'text-primary' : 'text-primary opacity-90'
        ].join(' ')}
      >
        {t(pillar.title)}
      </h3>

      {/* Body */}
      <p
        className={[
          'text-pretty hyphens-auto leading-[1.55]',
          'text-[clamp(0.875rem,0.82rem+0.27vw,1rem)]',
          'text-silver',
          isCenter ? 'opacity-80' : 'opacity-65'
        ].join(' ')}
      >
        {t(pillar.body)}
      </p>
    </article>
  );
}

export function CDTDiagram() {
  const { pillars } = methodologieCdtCopy;

  return (
    <div className="relative max-w-[var(--container-default)] mx-auto px-[clamp(1rem,4vw,3rem)]">
      {/*
       * Gold halo — radial gradient centered behind middle pillar.
       * Usage gold #1/7 : CDT™ marker signature.
       * GPU-only (transform/opacity) — no blur on scrolling container per soft-skill perf rules.
       */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        {/* Primary halo — warm gold core */}
        <div
          className="absolute h-[clamp(280px,30vw,480px)] w-[clamp(280px,30vw,480px)] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, oklch(0.74 0.085 75 / 0.18) 0%, oklch(0.74 0.085 75 / 0.07) 45%, transparent 72%)'
          }}
        />
        {/* Secondary outer diffuse ring */}
        <div
          className="absolute h-[clamp(400px,48vw,720px)] w-[clamp(400px,48vw,720px)] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, oklch(0.74 0.085 75 / 0.04) 60%, transparent 80%)'
          }}
        />
      </div>

      {/* 3 pillar grid — asymmetric Z-axis cascade: center slightly elevated */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-[clamp(0.75rem,1.5vw,1.5rem)] items-center">
        {pillars.items.map((pillar, idx) => {
          const isCenter = idx === 1;
          return (
            <div
              key={pillar.id}
              className={[
                'relative',
                /* Center pillar — slightly elevated above flanks (Z-Axis Cascade) */
                isCenter ? 'md:-translate-y-3 md:scale-[1.02]' : 'md:scale-[0.98]',
                'transition-none' // no hover transition — motion only on scroll reveal
              ].join(' ')}
            >
              <PillarCard pillar={pillar} index={idx} isCenter={isCenter} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
