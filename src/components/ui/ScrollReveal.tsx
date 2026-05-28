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
    if (prefersReduced) {
      el.style.opacity = '1';
      el.style.transform = 'translate3d(0, 0, 0)';
      return;
    }
    const rect = el.getBoundingClientRect();

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

    // ORIGINAL behavior : threshold 0.12 sans rootMargin. Fire quand 12% du
    // section est visible dans le viewport → user VOIT le fade-up animation
    // cinematic 720ms PENDANT qu'il scrolle. Le rootMargin > 0 ferait fire
    // l'animation TROP TÔT (animation finie avant que user voie) = perte de
    // l'effet visuel premium.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        reveal();
      },
      { threshold }
    );

    observer.observe(el);

    // Safety fallback : if the observer never fires (e.g. very tall sections,
    // sections that stay below the threshold for the entire page, anchor jumps
    // that skip the section), force the element to its visible state without
    // animation after 5s so critical content is never permanently hidden.
    const safetyTimer = window.setTimeout(() => {
      if (revealed) return;
      revealed = true;
      observer.disconnect();
      el.style.transition = 'none';
      el.style.opacity = '1';
      el.style.transform = 'translate3d(0, 0, 0)';
      el.style.willChange = 'auto';
    }, 5000);

    return () => {
      observer.disconnect();
      window.clearTimeout(safetyTimer);
    };
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
