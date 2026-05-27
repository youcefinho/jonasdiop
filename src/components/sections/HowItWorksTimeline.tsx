import { useEffect, useRef, useState } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { methodologieCdtCopy } from '@/data/copy/methodologie-cdt';
import { useT } from '@/lib/i18n/useT';

/**
 * TimelineLine — SVG vertical line gold → silver → transparent with
 * stroke-dashoffset draw-in animation when entering viewport. Replaces the
 * static gradient `<div>`. Falls back to instantly drawn for reduced-motion.
 */
function TimelineLine() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDrawn(true);
      return;
    }
    let cancelled = false;
    let rafId = 0;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      rafId = window.requestAnimationFrame(() => {
        if (!cancelled) setDrawn(true);
      });
      return () => {
        cancelled = true;
        window.cancelAnimationFrame(rafId);
      };
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || cancelled) return;
        obs.disconnect();
        setDrawn(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => {
      cancelled = true;
      obs.disconnect();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      preserveAspectRatio="none"
      viewBox="0 0 2 1000"
      className="pointer-events-none absolute top-2 bottom-2 left-[15px] sm:left-[19px] w-[2px] h-[calc(100%-1rem)]"
    >
      <defs>
        <linearGradient id="timeline-stroke" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.74 0.085 75)" />
          <stop offset="60%" stopColor="oklch(0.79 0.005 270 / 0.3)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M 1 0 L 1 1000"
        stroke="url(#timeline-stroke)"
        strokeWidth="1.5"
        fill="none"
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: drawn ? 0 : 1000,
          transition: 'stroke-dashoffset 2400ms cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      />
    </svg>
  );
}

/**
 * TimelinePhase — single phase row with IntersectionObserver-driven dot
 * lighting : when the phase enters the viewport, the dot ring brightens and
 * scales up smoothly. Provides the "sequential illumination" effect as the
 * user scrolls through the 4 phases.
 */
function TimelinePhase({
  number,
  phase,
  title,
  body,
  index
}: {
  number: string;
  phase: { fr: string; en: string };
  title: { fr: string; en: string };
  body: { fr: string; en: string };
  index: number;
}) {
  const { t } = useT();
  const liRef = useRef<HTMLLIElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = liRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(true);
      return;
    }
    let cancelled = false;
    let rafId = 0;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      rafId = window.requestAnimationFrame(() => {
        if (!cancelled) setActive(true);
      });
      return () => {
        cancelled = true;
        window.cancelAnimationFrame(rafId);
      };
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || cancelled) return;
        obs.disconnect();
        setActive(true);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => {
      cancelled = true;
      obs.disconnect();
    };
  }, []);

  return (
    <li ref={liRef} className="relative flex gap-md sm:gap-lg group">
      <div className="relative shrink-0 flex flex-col items-center">
        <div
          aria-hidden="true"
          data-active={active}
          className={[
            'relative h-8 w-8 sm:h-10 sm:w-10 rounded-full',
            'bg-elevated ring-2',
            'shadow-inner-circle',
            'flex items-center justify-center',
            'transition-all duration-slow ease-out',
            'data-[active=false]:ring-silver/20 data-[active=false]:scale-90 data-[active=false]:opacity-60',
            'data-[active=true]:ring-gold data-[active=true]:scale-100 data-[active=true]:opacity-100',
            'group-hover:ring-gold group-hover:scale-110'
          ].join(' ')}
        >
          <span
            aria-hidden="true"
            data-active={active}
            className={[
              'inline-block h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-gold transition-all duration-slow ease-out',
              'data-[active=false]:opacity-40 data-[active=false]:scale-75',
              'data-[active=true]:opacity-100 data-[active=true]:scale-100',
              index === 0 && 'data-[active=true]:animate-pulse'
            ]
              .filter(Boolean)
              .join(' ')}
          />
        </div>
      </div>

      <article className="flex flex-col gap-sm pb-md flex-1 min-w-0">
        <div className="flex items-baseline gap-sm">
          <span
            aria-hidden="true"
            className="text-gold font-display font-normal text-[clamp(1.25rem,1rem+1vw,1.75rem)] tracking-tight leading-none"
          >
            {number}
          </span>
          <span className="text-eyebrow uppercase tracking-widest text-gold opacity-90 font-display">
            {t(phase)}
          </span>
        </div>
        <h3 className="text-h3 text-primary font-display text-balance leading-[1.2]">{t(title)}</h3>
        <p className="text-body text-silver opacity-80 text-pretty max-w-[60ch]">{t(body)}</p>
      </article>
    </li>
  );
}

/**
 * HowItWorksTimeline — vertical timeline "Comment ça marche" pour la Home.
 *
 * Réutilise les 4 phases CDT™ déjà écrites dans methodologie-cdt.ts :
 *   01 Diagnostic → 02 Architecture → 03 Compression → 04 Scaling
 *
 * Pattern inspiration : jonasdiop.com Framer "How It Works" timeline pattern
 * (vertical line + dots + 4 steps). Re-créé ici en pure CSS + IntersectionObserver
 * pour active dot que se colore gold quand le step entre dans viewport.
 *
 * Layout : ligne verticale gold à gauche desktop / mobile, dots à chaque step,
 * content cards à droite. Stagger reveal via opacity entry.
 */
export function HowItWorksTimeline() {
  const { t } = useT();
  const phases = methodologieCdtCopy.phases.items;

  return (
    <section
      aria-label={t({ fr: 'Comment ça marche', en: 'How it works' })}
      className="relative py-2xl bg-section-base overflow-hidden"
    >
      <FiligraneNumber number="04" position="left" />

      <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
          <Eyebrow>{t({ fr: 'Comment ça marche', en: 'How it works' })}</Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance leading-[1.1] max-w-[24ch]">
            {t({
              fr: 'Les 4 phases CDT™ : du diagnostic au scaling.',
              en: 'The 4 CDT™ phases : from diagnostic to scaling.'
            })}
          </h2>
          <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
            {t({
              fr: 'Une méthodologie séquentielle. Pas de raccourci. Chaque phase pose les fondations de la suivante.',
              en: 'A sequential methodology. No shortcuts. Each phase lays the foundation for the next.'
            })}
          </p>
        </div>

        {/* Timeline — SVG line draw-in + dots that light up sequentially. */}
        <ol className="relative flex flex-col gap-xl max-w-[var(--container-content)] mx-auto w-full">
          <TimelineLine />

          {phases.map((phase, idx) => (
            <TimelinePhase
              key={phase.id}
              number={phase.number}
              phase={phase.phase}
              title={phase.title}
              body={phase.body}
              index={idx}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
