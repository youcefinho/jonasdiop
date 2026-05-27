import { useEffect } from 'react';

/**
 * PageTransition — Native View Transitions API wrapper for route changes.
 *
 * On supported browsers (Chromium 111+, Safari 18+), wraps each route change
 * with `document.startViewTransition(...)` which produces a smooth cross-fade
 * + slight scale on the root, free of any JS animation library cost (0 kB
 * runtime). On unsupported browsers (Firefox stable as of writing) it is a
 * no-op : the route swap happens instantly as before, no regression.
 *
 * Mount once at the root, near <Outlet />.
 */
export function PageTransition({ pathname }: { pathname: string }) {
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger — effect must re-run on route change even though body doesn't read it
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Native View Transitions API — only Chromium 111+ / Safari 18+. Older
    // browsers : silently skip (no regression). Type sidestepped via cast
    // because the DOM lib's official return type clashes with our wrapper.
    interface ViewTransitionLike {
      finished?: Promise<unknown>;
      ready?: Promise<unknown>;
      updateCallbackDone?: Promise<unknown>;
    }
    const startVT = (
      document as unknown as {
        startViewTransition?: (cb: () => void) => ViewTransitionLike;
      }
    ).startViewTransition;
    if (typeof startVT !== 'function') return;
    const transition = startVT.call(document, () => {
      // No-op : the DOM is already swapped by TanStack Router by the time
      // useEffect runs ; we just trigger the browser snapshot for cross-fade.
    });
    // Silence "Transition was skipped" rejections that fire when a new
    // transition supersedes this one (HMR in dev, rapid navigation in prod).
    // Non-blocking, expected per the View Transitions spec.
    const swallow = () => {};
    transition?.finished?.catch(swallow);
    transition?.ready?.catch(swallow);
    transition?.updateCallbackDone?.catch(swallow);
  }, [pathname]);

  return null;
}
