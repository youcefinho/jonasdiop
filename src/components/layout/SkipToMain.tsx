import { useT } from '@/lib/i18n/useT';

/**
 * SkipToMain — accessibility skip link. Invisible by default ; appears at the
 * top-left of the viewport ONLY when keyboard-focused (Tab from page top).
 *
 * Lets keyboard + screen-reader users bypass the navigation chrome and jump
 * directly to the main content. Standard WCAG 2.1 SC 2.4.1 (Bypass Blocks)
 * compliance pattern.
 *
 * Pure anchor → `#main-content`. Browser handles scroll + focus natively.
 * The target `<div id="main-content" tabIndex={-1}>` lives in __root.tsx
 * wrapping the `<Outlet />`, so works for every route without per-route wiring.
 *
 * Mounted once at the root layout (RootLayout + NotFoundLayout). Hidden via
 * `-translate-y-[200%]`, slides into view on `:focus-visible`.
 */
export function SkipToMain() {
  const { t } = useT();

  return (
    <a
      href="#main-content"
      className={[
        'fixed top-3 left-3 z-[100]',
        'inline-flex items-center gap-2 px-md py-sm rounded-md',
        'bg-base text-primary border border-gold/40 shadow-haptic-card',
        'text-eyebrow uppercase tracking-widest font-display text-xs',
        '-translate-y-[200%] focus:translate-y-0',
        'transition-transform duration-200 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-gold/50'
      ].join(' ')}
    >
      {t({ fr: 'Aller au contenu', en: 'Skip to content' })}
    </a>
  );
}
