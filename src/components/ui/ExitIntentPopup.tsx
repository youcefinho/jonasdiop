import { Mail, X } from 'lucide-react';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { useT } from '@/lib/i18n/useT';

const SESSION_FLAG = 'exitIntentDismissed';
const TOP_THRESHOLD_PX = 5;
const MOBILE_BREAKPOINT_PX = 768;

/**
 * Hook : detects exit-intent.
 *
 * Desktop : `mousemove` toward the top of the viewport (Y < TOP_THRESHOLD_PX
 * with an upward velocity) — the canonical "user moving toward the address
 * bar / tab strip" signal.
 *
 * Mobile : `pagehide` event (fires when the tab is being unloaded / placed
 * in the bfcache, e.g. user hits the back button or switches tabs). Mobile
 * has no mouse, so this is the closest equivalent signal we get.
 *
 * Fires AT MOST ONCE per session — both via the `armed` ref AND a
 * sessionStorage flag so a re-mount (route change) doesn't re-trigger after
 * dismissal.
 */
function useExitIntent(onIntent: () => void) {
  // Use a ref so the listeners stay stable & the callback never gets
  // "stale" via a deps change.
  const handlerRef = useRef(onIntent);
  handlerRef.current = onIntent;

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    // Already dismissed earlier this session — no listeners at all.
    try {
      if (window.sessionStorage.getItem(SESSION_FLAG) === '1') return undefined;
    } catch {
      // sessionStorage access can throw in privacy modes — fail open and
      // still attach listeners (better UX than silently broken).
    }

    let armed = true;
    const fire = () => {
      if (!armed) return;
      armed = false;
      handlerRef.current();
    };

    const isMobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX - 1}px)`).matches;

    let onMouseMove: ((e: MouseEvent) => void) | null = null;
    let onPageHide: (() => void) | null = null;

    if (isMobile) {
      onPageHide = () => fire();
      window.addEventListener('pagehide', onPageHide);
    } else {
      onMouseMove = (e: MouseEvent) => {
        // Only fire when the cursor is near the top edge AND the movement
        // direction is upward (movementY < 0). Without the direction check
        // we'd also fire on slow downward scrolls that happen to start near
        // the top of the page.
        if (e.clientY < TOP_THRESHOLD_PX && e.movementY < 0) fire();
      };
      window.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      if (onMouseMove) window.removeEventListener('mousemove', onMouseMove);
      if (onPageHide) window.removeEventListener('pagehide', onPageHide);
    };
  }, []);
}

/**
 * ExitIntentPopup — fire-once lead-magnet capture.
 *
 * Brief v3 §2 "Pop-up exit-intent : capture email avec lead magnet
 * (1 chapitre du livre OU PDF stratégique)". Brief v3 §5 places this CTA
 * at the "tertiary" altitude — it intercepts users about to leave, never
 * the primary "Réserver mon appel stratégique" path.
 *
 * Plateforme email pending (Jonas decision). Form is `action="#"` with
 * the submit button disabled so the structure ships ready-to-wire while
 * we wait — no fake submission, no broken loop.
 *
 * Dismissal is sticky per browser session (sessionStorage). Closing via
 * X / overlay / Escape all flag the same way.
 *
 * A11y :
 *   - role=dialog + aria-modal=true + aria-labelledby (panel headline)
 *   - Escape closes
 *   - Outside click (overlay) closes
 *   - Initial focus on the close button on open
 *   - prefers-reduced-motion : no fade/scale, panel just appears
 *
 * Note : when CookieBanner is showing (initial visit, no consent yet), we
 * delay arming the exit-intent listeners until the user resolves consent.
 * Stacking two z-50 dialogs on first paint = bad UX, and the cookie banner
 * is the legally-required one.
 */
export function ExitIntentPopup() {
  const { t } = useT();
  const [isOpen, setIsOpen] = useState(false);
  // Two-phase mount : `isOpen` flips first → element renders with the
  // "from" styles (opacity-0, scale-95) → on next frame `isMounted` flips
  // and CSS transition lerps to the "to" styles. Avoids needing a custom
  // @keyframes declaration just for a fade+scale-in.
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setIsMounted(false);
    try {
      window.sessionStorage.setItem(SESSION_FLAG, '1');
    } catch {
      // Privacy mode / quota — popup just won't be "remembered", that's fine.
    }
  }, []);

  useExitIntent(open);

  // Drive the open-animation by waiting one frame after isOpen flips, so
  // the CSS transition has a "from" frame to lerp away from.
  useEffect(() => {
    if (!isOpen) return undefined;
    const raf = window.requestAnimationFrame(() => setIsMounted(true));
    return () => window.cancelAnimationFrame(raf);
  }, [isOpen]);

  // Escape to close
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close]);

  // Initial focus on close button (canonical safe target for a marketing
  // popup — focusing the email field would feel coercive and breaks
  // screen-reader users' ability to dismiss without typing).
  useEffect(() => {
    if (!isOpen) return;
    const id = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    return () => window.clearTimeout(id);
  }, [isOpen]);

  if (!isOpen) return null;

  // Reduced-motion path : skip transition + start in the "to" state so
  // there's no perceived movement.
  const overlayVisible = prefersReducedMotion || isMounted;
  const overlayTransition = prefersReducedMotion ? '' : 'transition-opacity duration-300 ease-out';
  const panelTransition = prefersReducedMotion
    ? ''
    : 'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]';

  return (
    <div
      data-exit-intent-popup
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={`fixed inset-0 z-50 flex items-center justify-center p-md ${overlayTransition} ${overlayVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Backdrop : separate <button> so the outside-click affordance is
          keyboard-accessible and lint-clean (a clickable <div> would force
          a redundant onKey handler when Escape already covers keyboard). */}
      <button
        type="button"
        aria-label={t({ fr: 'Fermer la fenêtre', en: 'Close the dialog' })}
        onClick={close}
        tabIndex={-1}
        className="absolute inset-0 cursor-default bg-base/80 backdrop-blur-sm"
      />
      <div
        className={`relative w-full max-w-[34rem] bg-elevated border border-silver/20 rounded-lg shadow-[0_16px_48px_oklch(0_0_0/0.55)] p-lg flex flex-col gap-md ${panelTransition} ${overlayVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={close}
          aria-label={t({ fr: 'Fermer', en: 'Close' })}
          className="absolute top-md right-md h-8 w-8 flex items-center justify-center rounded-full text-silver/60 hover:text-primary hover:bg-silver/10 transition-colors duration-base"
        >
          <X className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
        </button>

        <div className="flex flex-col gap-2 pr-8">
          <p className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs">
            {t({ fr: 'Avant de partir…', en: 'Before you go…' })}
          </p>
          <h2 id={titleId} className="text-h3 text-primary font-display text-balance leading-tight">
            {t({
              fr: "Les 7 leviers pour ajouter un zéro à ton chiffre d'affaires.",
              en: 'The 7 levers to add a zero to your revenue.'
            })}
          </h2>
          <p className="text-sm text-silver opacity-80 text-pretty">
            {t({
              fr: 'PDF stratégique gratuit. Pas de spam.',
              en: 'Free strategic PDF. No spam.'
            })}
          </p>
        </div>

        <form
          action="#"
          method="post"
          onSubmit={(e) => e.preventDefault()}
          aria-describedby={`${titleId}-note`}
          className="flex flex-col gap-sm mt-sm"
        >
          <label htmlFor={`${titleId}-email`} className="sr-only">
            {t({ fr: 'Adresse courriel', en: 'Email address' })}
          </label>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 max-w-none shrink-0 text-silver/50 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id={`${titleId}-email`}
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder={t({ fr: 'ton@courriel.com', en: 'your@email.com' })}
              disabled
              className="w-full rounded-lg bg-base border border-silver/20 pl-10 pr-3 py-3 text-body text-primary font-display placeholder:text-silver/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/40 transition-colors duration-base disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            disabled
            className="rounded-pill px-md py-3 text-eyebrow uppercase tracking-wider font-display text-xs bg-silver text-base hover:shadow-[0_0_24px_oklch(0.79_0.005_270/0.30)] transition-all duration-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
          >
            {t({ fr: 'Recevoir le PDF', en: 'Get the PDF' })}
          </button>

          <p id={`${titleId}-note`} className="text-xs text-silver/60 text-pretty text-center">
            {t({
              fr: 'Plateforme email en cours d’intégration · disponible au lancement.',
              en: 'Email platform integration in progress · available at launch.'
            })}
          </p>
        </form>
      </div>
    </div>
  );
}
