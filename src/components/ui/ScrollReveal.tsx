import { type ReactNode, type Ref, useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Delay before fade-up triggers (ms). Default 0. Useful for stagger. */
  delay?: number;
  /** Initial Y offset before reveal (px). Default 32. */
  offset?: number;
  /** Intersection threshold 0..1. Default 0.12 (fires when 12% in view). */
  threshold?: number;
  /** Wrapper element. Default `div`. Use `section` for landmark sections. */
  as?: 'div' | 'section' | 'article' | 'span';
  className?: string;
}

/**
 * ScrollReveal — wraps children with a fade-up reveal triggered by
 * IntersectionObserver when the element enters the viewport.
 *
 * Pattern : start opacity 0 + translateY(offset) → fade to opacity 1 +
 * translateY(0) over 700ms cubic-bezier. Reveals once (disconnects observer).
 *
 * Respects prefers-reduced-motion : immediately shows without animation.
 * GPU-safe (only transform + opacity).
 *
 * Inspired by soft-skill skill "Scroll Interpolation (Entry Animations)" :
 * "elements never appear statically on load. As they enter the viewport,
 * they must execute a gentle, heavy fade-up over 800ms+."
 */
export function ScrollReveal({
  children,
  delay = 0,
  offset = 32,
  threshold = 0.12,
  as: Tag = 'div',
  className
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rect = el.getBoundingClientRect();
    // Auto-reveal pour sections TRES loin sous le viewport (>3 viewport-heights).
    // Sans ça, sections au milieu d'une page longue restaient opacity:0 si user
    // arrivait via hash deep-link / Ctrl+End / browser scroll restore — IO ne
    // déclenchait pas avant qu'ils scrollent à travers. Avec ce guard, sections
    // au-delà de la "scroll-through zone" raisonnable sont immédiatement visibles
    // (pas de fade mais pas de blank screen non plus).
    const farBelowScrollRange = rect.top > window.innerHeight * 3;
    if (prefersReduced || farBelowScrollRange) {
      el.style.opacity = '1';
      el.style.transform = 'translate3d(0, 0, 0)';
      return;
    }

    // Initial hidden state
    el.style.opacity = '0';
    el.style.transform = `translate3d(0, ${offset}px, 0)`;
    el.style.transition = 'none';
    el.style.willChange = 'opacity, transform';

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      window.setTimeout(() => {
        el.style.transition =
          'opacity 720ms cubic-bezier(0.22, 1, 0.36, 1), transform 720ms cubic-bezier(0.22, 1, 0.36, 1)';
        el.style.opacity = '1';
        el.style.transform = 'translate3d(0, 0, 0)';
        window.setTimeout(() => {
          el.style.willChange = 'auto';
        }, 800);
      }, delay);
    };

    // Above-the-fold guard : if element is already in viewport on mount,
    // reveal immediately via rAF (avoid IO miss on initial intersection).
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      window.requestAnimationFrame(() => reveal());
    }

    // rootMargin: '2000px 0px 2000px 0px' = IO root virtual size expanded 500px
    // top + bottom. Effet : reveal fires QUAND element est encore 500px AVANT
    // d'entrer dans le viewport. Évite les "blank black sections" si user
    // scrolle vite, utilise Ctrl+End, ou Find/Ctrl+F jump à du texte hidden.
    // Sans ce margin, sections wrappées étaient stuck opacity 0 le temps que
    // IO réagisse (~16-50ms latence) — visible comme bug "site cassé".
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        reveal();
      },
      { threshold, rootMargin: '2000px 0px 2000px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, offset, threshold]);

  // Dynamic Tag union ('div' | 'section' | 'article' | 'span') makes the ref
  // type vary per Tag. Cast through unknown — runtime safe because all four
  // tag types extend HTMLElement which is what the hook treats it as.
  return (
    <Tag ref={ref as unknown as Ref<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}
