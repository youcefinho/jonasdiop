/**
 * GrainOverlay — fixed pointer-events-none film grain texture across the page.
 *
 * Texture SVG fractalNoise inline (no HTTP request). Opacity tunable mais
 * default 3% pour rester subtil. GPU-safe (pas d'animation, position fixed).
 *
 * Mounted once in __root.tsx — overlays everything except modals (z-index 1).
 * Skill : soft-skill section "Grain/Noise Overlays" — applied to fixed
 * pointer-events-none pseudo, never on scrolling containers.
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
      }}
    />
  );
}
