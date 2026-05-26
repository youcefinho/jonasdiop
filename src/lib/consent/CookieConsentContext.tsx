import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { readConsent, writeConsent } from '@/lib/consent/storage';
import {
  ACCEPT_ALL,
  type ConsentCategories,
  type ConsentDecision,
  REJECT_ALL
} from '@/lib/consent/types';

interface CookieConsentContextValue {
  readonly decision: ConsentDecision | null;
  readonly hasDecided: boolean;
  readonly isBannerOpen: boolean;
  readonly isSettingsOpen: boolean;
  /** Accept every non-necessary category. */
  readonly acceptAll: () => void;
  /** Reject every non-necessary category. */
  readonly rejectAll: () => void;
  /** Persist a custom decision (used by the settings modal). */
  readonly save: (categories: ConsentCategories) => void;
  /** Re-open the settings modal (footer link). */
  readonly openSettings: () => void;
  /** Close the settings modal without saving. */
  readonly closeSettings: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

/**
 * Internal-use: returns null if no provider above (rather than throwing).
 * Used by optional consumers like `<CookieSettingsLink>` that may render
 * outside the provider in isolated test contexts.
 */
export function useCookieConsentOptional(): CookieConsentContextValue | null {
  return useContext(CookieConsentContext);
}

interface CookieConsentProviderProps {
  children: ReactNode;
}

/**
 * Loi 25 (Québec) consent provider.
 *
 * Behavior :
 *   - On mount, reads stored decision. If absent or expired, banner shows.
 *   - acceptAll / rejectAll / save persist decision and hide banner.
 *   - openSettings opens the granular modal (footer link or banner button).
 *   - decision survives reload via localStorage (13-month expiry).
 *
 * Consumers can call `useCookieConsent()` to gate analytics / marketing scripts.
 */
export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [decision, setDecision] = useState<ConsentDecision | null>(null);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const state = readConsent();
    if (state.status === 'decided') {
      setDecision(state.decision);
    }
    setHasHydrated(true);
  }, []);

  const acceptAll = useCallback(() => {
    const next = writeConsent(ACCEPT_ALL);
    setDecision(next);
    setIsSettingsOpen(false);
  }, []);

  const rejectAll = useCallback(() => {
    const next = writeConsent(REJECT_ALL);
    setDecision(next);
    setIsSettingsOpen(false);
  }, []);

  const save = useCallback((categories: ConsentCategories) => {
    const next = writeConsent(categories);
    setDecision(next);
    setIsSettingsOpen(false);
  }, []);

  const openSettings = useCallback(() => setIsSettingsOpen(true), []);
  const closeSettings = useCallback(() => setIsSettingsOpen(false), []);

  const hasDecided = decision !== null;
  const isBannerOpen = hasHydrated && !hasDecided && !isSettingsOpen;

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      decision,
      hasDecided,
      isBannerOpen,
      isSettingsOpen,
      acceptAll,
      rejectAll,
      save,
      openSettings,
      closeSettings
    }),
    [
      decision,
      hasDecided,
      isBannerOpen,
      isSettingsOpen,
      acceptAll,
      rejectAll,
      save,
      openSettings,
      closeSettings
    ]
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (ctx === null) {
    throw new Error('useCookieConsent must be used inside <CookieConsentProvider>');
  }
  return ctx;
}
