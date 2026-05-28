import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
  type Ref,
  useEffect,
  useRef
} from 'react';

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
  /** Pass-through aria-label on the container. */
  'aria-label'?: string;
  /** Pass-through data-* hooks (tests / analytics) on the container. */
  [dataAttr: `data-${string}`]: string | undefined;
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
  className,
  ...rest
}: StaggerRevealProps) {
  // Whitelist `aria-*` + `data-*` only — don't forward unknown props that
  // could clash with the ref or `data-stagger-reveal` marker.
  const passthrough: Record<string, string> = {};
  for (const [k, v] of Object.entries(rest)) {
    if (typeof v === 'string' && (k.startsWith('data-') || k.startsWith('aria-'))) {
      passthrough[k] = v;
    }
  }
  const containerRef = useRef<HTMLDivElement>(null);
  const childRefs = useRef<HTMLDivElement[]>([]);
  childRefs.current = [];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = childRefs.current;
    if (items.length === 0) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Auto-reveal pour containers TRES loin sous viewport (>3 viewport-heights).
    // Sinon items restaient opacity:0 si user arrivait via hash deep-link /
    // Ctrl+End / scroll restore. Cf. ScrollReveal pour explication détaillée.
    const containerRect = container.getBoundingClientRect();
    const farBelowScrollRange = containerRect.top > window.innerHeight * 3;
    if (prefersReduced || farBelowScrollRange) {
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

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      items.forEach((el, idx) => {
        window.setTimeout(() => {
          el.style.transition =
            'opacity 640ms cubic-bezier(0.22, 1, 0.36, 1), transform 640ms cubic-bezier(0.22, 1, 0.36, 1)';
          el.style.opacity = '1';
          el.style.transform = 'translate3d(0, 0, 0)';
          window.setTimeout(() => {
            el.style.willChange = 'auto';
          }, 720);
        }, idx * staggerMs);
      });
    };

    // Above-the-fold guard : container already in viewport on mount → reveal immediately
    if (containerRect.top < window.innerHeight && containerRect.bottom > 0) {
      window.requestAnimationFrame(() => reveal());
    }

    // rootMargin 500px : preload reveal AVANT que container entre dans
    // viewport. Évite stuck opacity 0 si user scrolle vite (cf. ScrollReveal
    // pour explication détaillée).
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        reveal();
      },
      { threshold, rootMargin: '500px 0px 500px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerMs, offset, threshold]);

  const childArray = Children.toArray(children).filter(isValidElement) as ReactElement<{
    ref?: Ref<HTMLElement>;
  }>[];

  // When the container is a list (`ul`/`ol`), wrapping children in a `<div>`
  // produces invalid HTML (`<ul><div><li/></div></ul>`) and triggers axe
  // `listitem` violations. In that case, clone each child and attach the
  // animation ref directly to the `<li>` itself — no wrapper.
  const skipWrapper = Tag === 'ul' || Tag === 'ol';

  return (
    <Tag
      // biome-ignore lint/suspicious/noExplicitAny: dynamic Tag (div|section|ul|ol) ref union
      ref={containerRef as unknown as React.Ref<any>}
      className={className}
      data-stagger-reveal
      {...passthrough}
    >
      {skipWrapper
        ? childArray.map((child, idx) => {
            // React 19 : ref is a prop on the element itself, not stripped.
            // Access it via `props.ref` (typed) — fall back to the deprecated
            // `child.ref` shape via cast for older React versions.
            const existingRef = (child.props as { ref?: Ref<HTMLElement> }).ref as
              | Ref<HTMLElement>
              | undefined;
            return cloneElement(child, {
              // biome-ignore lint/suspicious/noArrayIndexKey: stable order children
              key: idx,
              ref: (el: HTMLElement | null) => {
                if (el) childRefs.current[idx] = el as unknown as HTMLDivElement;
                // Forward to any existing ref the caller attached to the child
                if (typeof existingRef === 'function') existingRef(el);
                else if (existingRef && 'current' in existingRef) {
                  (existingRef as { current: HTMLElement | null }).current = el;
                }
              }
            });
          })
        : childArray.map((child, idx) => (
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
