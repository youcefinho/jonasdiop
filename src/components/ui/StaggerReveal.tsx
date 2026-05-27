import { Children, isValidElement, type ReactNode, useEffect, useRef } from 'react';

interface StaggerRevealProps {
  children: ReactNode;
  /** Delay between sibling reveals (ms). Default 80. */
  staggerMs?: number;
  /** Initial Y offset (px) before reveal. Default 24. */
  offset?: number;
  /** Intersection threshold 0..1. Default 0.10. */
  threshold?: number;
  /** Container element. Default `div`. */
  as?: 'div' | 'section' | 'ul' | 'ol';
  className?: string;
}

/**
 * StaggerReveal — wraps a list of children where each child fades up
 * sequentially with a per-item delay. Triggered once when the container
 * enters the viewport.
 *
 * Use for grids of cards (ProgramsGrid, Methodologie pillars, FAQ items)
 * to create the "cards appear one by one" premium feel.
 *
 * GPU-safe (transform + opacity only). Respects prefers-reduced-motion
 * (immediate show, no stagger). Each child is wrapped in a div with the
 * stagger delay applied via inline style.
 *
 * Inspired by soft-skill skill "Staggered Mask Reveal" pattern.
 */
export function StaggerReveal({
  children,
  staggerMs = 80,
  offset = 24,
  threshold = 0.1,
  as: Tag = 'div',
  className
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const childRefs = useRef<HTMLDivElement[]>([]);
  childRefs.current = [];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = childRefs.current;
    if (items.length === 0) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      items.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'translate3d(0, 0, 0)';
      });
      return;
    }

    // Initial hidden state for all items
    items.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
      el.style.transition = 'none';
      el.style.willChange = 'opacity, transform';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        items.forEach((el, idx) => {
          window.setTimeout(() => {
            el.style.transition =
              'opacity 640ms cubic-bezier(0.22, 1, 0.36, 1), transform 640ms cubic-bezier(0.22, 1, 0.36, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translate3d(0, 0, 0)';
            // Drop will-change after animation completes
            window.setTimeout(() => {
              el.style.willChange = 'auto';
            }, 720);
          }, idx * staggerMs);
        });
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerMs, offset, threshold]);

  const childArray = Children.toArray(children).filter(isValidElement);

  return (
    <Tag
      // biome-ignore lint/suspicious/noExplicitAny: dynamic Tag (div|section|ul|ol) ref union
      ref={containerRef as unknown as React.Ref<any>}
      className={className}
      data-stagger-reveal
    >
      {childArray.map((child, idx) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: stable order children
          key={idx}
          ref={(el) => {
            if (el) childRefs.current[idx] = el;
          }}
          // Wrapper carries the stagger animation. Uses display: contents
          // when possible (children inherit grid/flex position from container),
          // but transforms work since rAF + IO apply to this wrapper directly
          // via JS. NOTE : if you need the wrapper as a real layout element
          // for a grid, omit `display: contents` (current behaviour).
        >
          {child}
        </div>
      ))}
    </Tag>
  );
}
