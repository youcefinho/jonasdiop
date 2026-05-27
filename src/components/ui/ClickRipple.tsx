import { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

/**
 * ClickRipple — listens for clicks anywhere in the document and renders a
 * brief gold ripple at the cursor position. Premium tactile feedback signal.
 *
 * Mounted once at the root layout (next to GrainOverlay / ScrollProgressBar).
 * GPU-safe (transform + opacity only). Auto-cleans completed ripples to
 * avoid DOM growth. Respects prefers-reduced-motion (no-op).
 *
 * The ripple itself is styled via `.click-ripple` in globals.css with a
 * radial gold gradient + 720ms expand keyframe.
 */
export function ClickRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let counter = 0;
    const onClick = (e: MouseEvent) => {
      // Ignore non-primary buttons (right-click context menu, middle-click)
      if (e.button !== 0) return;
      const id = ++counter;
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      // Remove after the animation ends (720ms in CSS + small safety margin).
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 800);
    };

    window.addEventListener('click', onClick, { passive: true });
    return () => window.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          className="click-ripple"
          style={{ left: `${r.x}px`, top: `${r.y}px` }}
        />
      ))}
    </>
  );
}
