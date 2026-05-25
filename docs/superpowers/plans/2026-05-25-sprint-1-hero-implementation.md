# Sprint 1 — Hero direction C Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Hero direction C with 5 reusable atomics + 3 hooks + 3 sections (Hero, TrustBand, VslPlaceholderSection) + animation choreography + /dev-components debug page, fully TDD, i18n-ready, accessible.

**Architecture:** Atomic-first decomposition. Each atomic is i18n-ready via `useT()`, owns its responsibility, tested in isolation. Sections compose atomics. Hooks (`useCountUp`, `useMaskReveal`, `useSmoothScroll`) extract animation/scroll logic for testability. Lenis init in `__root.tsx` provides smooth scroll context for the whole app. Reduced-motion respect baked into every animation hook.

**Tech Stack:** React 19 · TanStack Router (file-based) · TypeScript 6 strict · Tailwind v4 (OKLCH tokens) · Motion (motion/react) · Lenis 1.3.23 · Vitest 4.1.6 + @testing-library/react · happy-dom · vitest-axe · Biome 2.4

**Reference:** Design spec `docs/superpowers/specs/2026-05-25-hero-direction-c-design.md`. Stitch board `stitch/sections/2026-05-25-round1/05-hero-platinum-executive.png`.

**Estimated tasks:** 17 bite-sized. ~2-3 days focused.

---

## Pre-flight conventions

- Working directory: `C:/Users/rochdi/.gemini/antigravity-ide/scratch/jonas-diop/`
- All commands assume cwd above
- TDD strict: test fail observed BEFORE impl, test pass observed AFTER impl, commit at end of each task
- Each component / hook = 1 commit minimum (atomic commits per task)
- All atomics use `useT()` from `@/lib/i18n/useT` for any translatable content
- Hard rules auto-applied:
  - clamp() typography from tokens (already in `src/styles/tokens.css`)
  - text-balance/pretty in CSS (already in `src/styles/globals.css`)
  - `prefers-reduced-motion: reduce` respected in all animation hooks
  - No copy-paste from oceanne (inspiration only)
  - ban-magazine (no SectionNumeral/ChapterMarker/Fleuron/Marginalia/drop cap)

---

## Phase 1 — Motion foundation (Tasks 1-2)

### Task 1: Motion presets file

**Files:**
- Create: `src/lib/motion/presets.ts`

- [ ] **Step 1.1: Write failing test**

Create `tests/lib/motion/presets.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { easings, durations, heroEntranceTimings } from '@/lib/motion/presets';

describe('motion presets', () => {
  it('exposes ease-out-expo cubic-bezier string', () => {
    expect(easings.outExpo).toBe('cubic-bezier(0.16, 1, 0.3, 1)');
  });

  it('exposes ease-out-cubic cubic-bezier string', () => {
    expect(easings.outCubic).toBe('cubic-bezier(0.33, 1, 0.68, 1)');
  });

  it('exposes duration values in ms', () => {
    expect(durations.fast).toBe(180);
    expect(durations.base).toBe(280);
    expect(durations.slow).toBe(520);
    expect(durations.maskReveal).toBe(800);
    expect(durations.countUp).toBe(1800);
  });

  it('exposes hero entrance timing sequence', () => {
    expect(heroEntranceTimings.eyebrow).toBe(200);
    expect(heroEntranceTimings.h1MaskReveal).toBe(400);
    expect(heroEntranceTimings.sub).toBe(900);
    expect(heroEntranceTimings.ctaPrimary).toBe(1100);
    expect(heroEntranceTimings.ctaSecondary).toBe(1200);
    expect(heroEntranceTimings.scrollCue).toBe(1400);
  });
});
```

- [ ] **Step 1.2: Run test, expected FAIL**

```bash
bun run test:run tests/lib/motion/presets.test.ts
```

Expected: ERROR `Cannot find module '@/lib/motion/presets'`.

- [ ] **Step 1.3: Write `src/lib/motion/presets.ts`**

```typescript
/**
 * Motion presets — Jonas Diop animation timings and easings.
 * Used by hooks (useCountUp, useMaskReveal) and direct CSS-in-JS in components.
 * Aligned with tokens.css --duration-* and --ease-* values.
 */

export const easings = {
  outExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  outCubic: 'cubic-bezier(0.33, 1, 0.68, 1)'
} as const;

export const durations = {
  fast: 180,
  base: 280,
  slow: 520,
  maskReveal: 800,
  countUp: 1800
} as const;

/**
 * Hero entrance sequence (delays from mount, in ms).
 * See spec : 2026-05-25-hero-direction-c-design.md Animation choreography
 */
export const heroEntranceTimings = {
  eyebrow: 200,
  h1MaskReveal: 400,
  sub: 900,
  ctaPrimary: 1100,
  ctaSecondary: 1200,
  scrollCue: 1400
} as const;
```

- [ ] **Step 1.4: Run test, expected PASS**

```bash
bun run test:run tests/lib/motion/presets.test.ts
```

Expected: 4 tests pass.

- [ ] **Step 1.5: Commit**

```bash
git add src/lib/motion/presets.ts tests/lib/motion/presets.test.ts
git commit -m "feat(motion): presets file with easings + durations + hero entrance timings (TDD)"
```

---

### Task 2: Lenis init in __root.tsx

**Files:**
- Modify: `src/routes/__root.tsx`
- Create: `src/lib/motion/lenis.ts`

- [ ] **Step 2.1: Create `src/lib/motion/lenis.ts`** (singleton + reduced-motion bypass)

```typescript
import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

/**
 * Initialize Lenis smooth-scroll singleton.
 * Respects prefers-reduced-motion: reduce (returns null, no-op).
 * Returns existing instance if already initialized.
 */
export function initLenis(): Lenis | null {
  if (typeof window === 'undefined') return null;
  if (lenisInstance) return lenisInstance;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return null;

  lenisInstance = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    smoothWheel: true
  });

  function raf(time: number) {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenisInstance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function destroyLenis(): void {
  lenisInstance?.destroy();
  lenisInstance = null;
}
```

- [ ] **Step 2.2: Modify `src/routes/__root.tsx`** to init Lenis on mount

Current content (Sprint 0):
```tsx
import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { localeFromPath } from '@/lib/i18n/translations';

function RootLayout() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);

  return (
    <html lang={locale === 'en' ? 'en' : 'fr-CA'}>
      <LanguageProvider locale={locale}>
        <Outlet />
      </LanguageProvider>
    </html>
  );
}

export const Route = createRootRoute({
  component: RootLayout
});
```

Replace with:
```tsx
import { useEffect } from 'react';
import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { localeFromPath } from '@/lib/i18n/translations';
import { initLenis, destroyLenis } from '@/lib/motion/lenis';

function RootLayout() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);

  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <html lang={locale === 'en' ? 'en' : 'fr-CA'}>
      <LanguageProvider locale={locale}>
        <Outlet />
      </LanguageProvider>
    </html>
  );
}

export const Route = createRootRoute({
  component: RootLayout
});
```

- [ ] **Step 2.3: Verify typecheck + dev server**

```bash
bun run typecheck
bun run dev
```

Expected: typecheck clean. Dev server up, no Lenis import errors. (Visual smooth-scroll won't be testable until there's content to scroll — that's OK Sprint 1.)

- [ ] **Step 2.4: Commit**

```bash
git add src/lib/motion/lenis.ts src/routes/__root.tsx
git commit -m "feat(motion): Lenis singleton init in __root.tsx with reduced-motion bypass"
```

---

## Phase 2 — Animation hooks TDD (Tasks 3-5)

### Task 3: useCountUp hook

**Files:**
- Create: `src/hooks/useCountUp.ts`
- Create: `tests/hooks/useCountUp.test.ts`

- [ ] **Step 3.1: Write failing tests**

```typescript
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCountUp } from '@/hooks/useCountUp';

// Mock IntersectionObserver
class IOMock {
  callback: IntersectionObserverCallback;
  constructor(cb: IntersectionObserverCallback) { this.callback = cb; }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  trigger(isIntersecting: boolean, ratio: number) {
    this.callback(
      [{ isIntersecting, intersectionRatio: ratio } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver
    );
  }
}

let ioInstance: IOMock | null = null;

beforeEach(() => {
  vi.useFakeTimers();
  ioInstance = null;
  // @ts-expect-error mock
  global.IntersectionObserver = vi.fn((cb) => {
    ioInstance = new IOMock(cb);
    return ioInstance;
  });
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('useCountUp', () => {
  it('starts at 0 when not yet in view', () => {
    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useCountUp(857, { duration: 1800, threshold: 0.4, ref }));
    expect(result.current).toBe(0);
  });

  it('animates to target value when threshold reached', () => {
    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useCountUp(100, { duration: 1000, threshold: 0.4, ref }));

    act(() => {
      ioInstance?.trigger(true, 0.5);
    });

    act(() => { vi.advanceTimersByTime(500); });
    expect(result.current).toBeGreaterThan(0);
    expect(result.current).toBeLessThanOrEqual(100);

    act(() => { vi.advanceTimersByTime(600); });
    expect(result.current).toBe(100);
  });

  it('runs once — re-entering viewport does not restart', () => {
    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useCountUp(50, { duration: 500, threshold: 0.4, ref }));

    act(() => { ioInstance?.trigger(true, 0.5); });
    act(() => { vi.advanceTimersByTime(600); });
    expect(result.current).toBe(50);

    act(() => { ioInstance?.trigger(false, 0); });
    act(() => { ioInstance?.trigger(true, 0.5); });
    act(() => { vi.advanceTimersByTime(600); });
    expect(result.current).toBe(50);
  });

  it('returns final value immediately when prefers-reduced-motion', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockReturnValue({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() })
    });
    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useCountUp(857, { duration: 1800, threshold: 0.4, ref }));
    expect(result.current).toBe(857);
  });
});
```

- [ ] **Step 3.2: Run test, expected FAIL**

```bash
bun run test:run tests/hooks/useCountUp.test.ts
```

Expected: module not found.

- [ ] **Step 3.3: Write `src/hooks/useCountUp.ts`**

```typescript
import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseCountUpOptions {
  duration: number;
  threshold: number;
  ref: RefObject<HTMLElement | null>;
}

/**
 * Animate a number from 0 to `value` when the ref element enters viewport
 * at `threshold` ratio. Runs ONCE per page-load (no reset on re-entry).
 * Respects prefers-reduced-motion: returns final value immediately.
 *
 * Easing: ease-out-expo (matches motion presets).
 */
export function useCountUp(value: number, options: UseCountUpOptions): number {
  const { duration, threshold, ref } = options;
  const [current, setCurrent] = useState(0);
  const hasRunRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCurrent(value);
      hasRunRef.current = true;
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold && !hasRunRef.current) {
            hasRunRef.current = true;
            const startTime = performance.now();
            const animate = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(2, -10 * progress);
              const next = Math.round(value * eased);
              setCurrent(next);
              if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
              } else {
                setCurrent(value);
              }
            };
            rafRef.current = requestAnimationFrame(animate);
            observer.disconnect();
          }
        }
      },
      { threshold: [threshold] }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration, threshold, ref]);

  return current;
}
```

- [ ] **Step 3.4: Run test, expected PASS**

```bash
bun run test:run tests/hooks/useCountUp.test.ts
```

Expected: 4 tests pass.

- [ ] **Step 3.5: Commit**

```bash
git add src/hooks/useCountUp.ts tests/hooks/useCountUp.test.ts
git commit -m "feat(hooks): useCountUp with IntersectionObserver + run-once + reduced-motion bypass (TDD)"
```

---

### Task 4: useMaskReveal hook

**Files:**
- Create: `src/hooks/useMaskReveal.ts`
- Create: `tests/hooks/useMaskReveal.test.ts`

- [ ] **Step 4.1: Write failing tests**

```typescript
import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useMaskReveal } from '@/hooks/useMaskReveal';

describe('useMaskReveal', () => {
  it('starts hidden (translateY 100%) and reveals on mount after delay', () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useMaskReveal({ delay: 400, duration: 800 }));
    expect(result.current.style.transform).toContain('translateY(100%)');
    act(() => { vi.advanceTimersByTime(400); });
    expect(result.current.style.transform).toContain('translateY(0');
    vi.useRealTimers();
  });

  it('exposes transition string with duration + easing', () => {
    const { result } = renderHook(() => useMaskReveal({ delay: 0, duration: 800 }));
    expect(result.current.style.transition).toContain('800ms');
    expect(result.current.style.transition).toContain('cubic-bezier(0.16, 1, 0.3, 1)');
  });

  it('reveals immediately when prefers-reduced-motion', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockReturnValue({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() })
    });
    const { result } = renderHook(() => useMaskReveal({ delay: 1000, duration: 800 }));
    expect(result.current.style.transform).toContain('translateY(0');
  });
});
```

- [ ] **Step 4.2: Run test, expected FAIL**

```bash
bun run test:run tests/hooks/useMaskReveal.test.ts
```

Expected: module not found.

- [ ] **Step 4.3: Write `src/hooks/useMaskReveal.ts`**

```typescript
import { useEffect, useState } from 'react';
import { easings, durations } from '@/lib/motion/presets';

interface UseMaskRevealOptions {
  delay?: number;
  duration?: number;
}

interface MaskRevealStyle {
  style: {
    transform: string;
    transition: string;
    willChange: string;
  };
}

/**
 * Returns inline style props for a mask reveal element (inside overflow-hidden parent).
 * Starts translateY(100%), reveals to translateY(0) after delay.
 * Uses ease-out-expo from motion presets.
 * Respects prefers-reduced-motion: reveals immediately.
 */
export function useMaskReveal(options: UseMaskRevealOptions = {}): MaskRevealStyle {
  const { delay = 0, duration = durations.maskReveal } = options;
  const [revealed, setRevealed] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (revealed) return;
    const timer = setTimeout(() => setRevealed(true), delay);
    return () => clearTimeout(timer);
  }, [delay, revealed]);

  return {
    style: {
      transform: revealed ? 'translateY(0%)' : 'translateY(100%)',
      transition: `transform ${duration}ms ${easings.outExpo}`,
      willChange: 'transform'
    }
  };
}
```

- [ ] **Step 4.4: Run test, expected PASS**

```bash
bun run test:run tests/hooks/useMaskReveal.test.ts
```

Expected: 3 tests pass.

- [ ] **Step 4.5: Commit**

```bash
git add src/hooks/useMaskReveal.ts tests/hooks/useMaskReveal.test.ts
git commit -m "feat(hooks): useMaskReveal returns inline style with translateY transition + reduced-motion bypass (TDD)"
```

---

### Task 5: useSmoothScroll hook

**Files:**
- Create: `src/hooks/useSmoothScroll.ts`
- Create: `tests/hooks/useSmoothScroll.test.ts`

- [ ] **Step 5.1: Write failing tests**

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const scrollIntoViewMock = vi.fn();

beforeEach(() => {
  scrollIntoViewMock.mockClear();
  Element.prototype.scrollIntoView = scrollIntoViewMock;
});

describe('useSmoothScroll', () => {
  it('returns a callable scrollTo function', () => {
    const { result } = renderHook(() => useSmoothScroll());
    expect(typeof result.current).toBe('function');
  });

  it('scrolls to element matching anchor selector', () => {
    const target = document.createElement('section');
    target.id = 'methodologie';
    document.body.appendChild(target);

    const { result } = renderHook(() => useSmoothScroll());
    act(() => { result.current('#methodologie'); });

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    document.body.removeChild(target);
  });

  it('does not throw when anchor target missing', () => {
    const { result } = renderHook(() => useSmoothScroll());
    expect(() => result.current('#nonexistent')).not.toThrow();
    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });
});
```

- [ ] **Step 5.2: Run test, expected FAIL**

```bash
bun run test:run tests/hooks/useSmoothScroll.test.ts
```

Expected: module not found.

- [ ] **Step 5.3: Write `src/hooks/useSmoothScroll.ts`**

```typescript
import { useCallback } from 'react';
import { getLenis } from '@/lib/motion/lenis';

type SmoothScrollFn = (anchor: string) => void;

/**
 * Returns a smooth-scroll function that targets an anchor (e.g., '#methodologie').
 * Prefers Lenis if available (smooth animation), falls back to native scrollIntoView.
 * No-op if target element not found.
 */
export function useSmoothScroll(): SmoothScrollFn {
  return useCallback((anchor: string) => {
    const target = document.querySelector(anchor);
    if (!target) return;

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { duration: 1.2 });
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
}
```

- [ ] **Step 5.4: Run test, expected PASS**

```bash
bun run test:run tests/hooks/useSmoothScroll.test.ts
```

Expected: 3 tests pass.

- [ ] **Step 5.5: Commit**

```bash
git add src/hooks/useSmoothScroll.ts tests/hooks/useSmoothScroll.test.ts
git commit -m "feat(hooks): useSmoothScroll with Lenis-first + scrollIntoView fallback (TDD)"
```

---

## Phase 3 — Atomic UI components TDD (Tasks 6-10)

### Task 6: Eyebrow atomic

**Files:**
- Create: `src/components/ui/Eyebrow.tsx`
- Create: `tests/components/ui/Eyebrow.test.tsx`

- [ ] **Step 6.1: Write failing tests**

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Eyebrow } from '@/components/ui/Eyebrow';

describe('Eyebrow', () => {
  it('renders children inside an uppercase span with tracking-widest', () => {
    render(<Eyebrow>Architecte d'affaires</Eyebrow>);
    const el = screen.getByText("Architecte d'affaires");
    expect(el).toBeInTheDocument();
    expect(el.className).toContain('uppercase');
    expect(el.className).toContain('tracking-widest');
    expect(el.className).toContain('text-silver');
  });

  it('renders gold dot by default (goldDot=true implicit)', () => {
    const { container } = render(<Eyebrow>Test</Eyebrow>);
    const dot = container.querySelector('[data-eyebrow-dot]');
    expect(dot).toBeInTheDocument();
    expect(dot?.className).toContain('bg-gold');
  });

  it('omits gold dot when goldDot=false', () => {
    const { container } = render(<Eyebrow goldDot={false}>Test</Eyebrow>);
    const dot = container.querySelector('[data-eyebrow-dot]');
    expect(dot).not.toBeInTheDocument();
  });

  it('forwards className', () => {
    render(<Eyebrow className="custom-class">Test</Eyebrow>);
    const el = screen.getByText('Test').parentElement;
    expect(el?.className).toContain('custom-class');
  });
});
```

- [ ] **Step 6.2: Run test, expected FAIL**

```bash
bun run test:run tests/components/ui/Eyebrow.test.tsx
```

- [ ] **Step 6.3: Write `src/components/ui/Eyebrow.tsx`**

```tsx
import type { ReactNode } from 'react';
import { clsx } from 'clsx';

interface EyebrowProps {
  children: ReactNode;
  goldDot?: boolean;
  className?: string;
}

/**
 * Eyebrow label — uppercase tracking-widest with optional gold dot signature.
 * Used cross-Jonas (Hero, About, CDT, LPs, sections signature).
 * Default goldDot=true (the signature pattern).
 */
export function Eyebrow({ children, goldDot = true, className }: EyebrowProps) {
  return (
    <p className={clsx('inline-flex items-center gap-2', className)}>
      {goldDot && (
        <span
          data-eyebrow-dot
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full bg-gold"
        />
      )}
      <span className="text-eyebrow uppercase tracking-widest text-silver font-display">
        {children}
      </span>
    </p>
  );
}
```

- [ ] **Step 6.4: Run test, expected PASS**

```bash
bun run test:run tests/components/ui/Eyebrow.test.tsx
```

Expected: 4 tests pass.

- [ ] **Step 6.5: Commit**

```bash
git add src/components/ui/Eyebrow.tsx tests/components/ui/Eyebrow.test.tsx
git commit -m "feat(ui): Eyebrow atomic with optional gold dot signature (TDD)"
```

---

### Task 7: CTAPill atomic

**Files:**
- Create: `src/components/ui/CTAPill.tsx`
- Create: `tests/components/ui/CTAPill.test.tsx`

- [ ] **Step 7.1: Write failing tests**

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CTAPill } from '@/components/ui/CTAPill';

describe('CTAPill', () => {
  it('renders gold-primary variant with bg-gold + text-base', () => {
    render(<CTAPill variant="gold-primary">Prendre RDV</CTAPill>);
    const btn = screen.getByText('Prendre RDV');
    expect(btn.className).toContain('bg-gold');
    expect(btn.className).toContain('text-base');
    expect(btn.className).toContain('rounded-pill');
  });

  it('renders silver-secondary variant with border + transparent bg', () => {
    render(<CTAPill variant="silver-secondary">Découvrir</CTAPill>);
    const btn = screen.getByText('Découvrir');
    expect(btn.className).toContain('border');
    expect(btn.className).toContain('text-silver');
    expect(btn.className).toContain('bg-transparent');
  });

  it('renders as button when onClick provided', () => {
    const onClick = vi.fn();
    render(<CTAPill variant="gold-primary" onClick={onClick}>Click</CTAPill>);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('renders as anchor when href provided', () => {
    render(<CTAPill variant="gold-primary" href="/contact">To contact</CTAPill>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/contact');
  });

  it('forwards aria-label', () => {
    render(<CTAPill variant="gold-primary" ariaLabel="custom label">X</CTAPill>);
    expect(screen.getByLabelText('custom label')).toBeInTheDocument();
  });
});
```

- [ ] **Step 7.2: Run test, expected FAIL**

```bash
bun run test:run tests/components/ui/CTAPill.test.tsx
```

- [ ] **Step 7.3: Write `src/components/ui/CTAPill.tsx`**

```tsx
import type { ReactNode } from 'react';
import { clsx } from 'clsx';

type CTAVariant = 'gold-primary' | 'silver-secondary' | 'silver-outline';

interface CTAPillBaseProps {
  variant: CTAVariant;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

interface CTAPillLinkProps extends CTAPillBaseProps {
  href: string;
  onClick?: never;
}

interface CTAPillButtonProps extends CTAPillBaseProps {
  href?: never;
  onClick: () => void;
}

type CTAPillProps = CTAPillLinkProps | CTAPillButtonProps;

const baseClasses = 'inline-flex items-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display transition-all duration-base';

const variantClasses: Record<CTAVariant, string> = {
  'gold-primary': 'bg-gold text-base hover:shadow-[0_0_32px_oklch(0.74_0.085_75/0.35)] hover:scale-[1.02]',
  'silver-secondary': 'bg-transparent border border-silver/40 text-silver hover:border-silver hover:bg-silver/5',
  'silver-outline': 'bg-transparent border border-silver/60 text-silver hover:bg-silver/10'
};

/**
 * CTA pill button — used for hero CTAs, final CTAs, nav CTA.
 * Three variants: gold-primary (1 of 7 gold usages strict), silver-secondary, silver-outline.
 * Auto-renders as <a> if href, <button> if onClick.
 */
export function CTAPill(props: CTAPillProps) {
  const { variant, children, className, ariaLabel } = props;
  const allClasses = clsx(baseClasses, variantClasses[variant], className);

  if ('href' in props && props.href !== undefined) {
    return (
      <a href={props.href} className={allClasses} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={props.onClick} className={allClasses} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
```

- [ ] **Step 7.4: Run test, expected PASS**

```bash
bun run test:run tests/components/ui/CTAPill.test.tsx
```

Expected: 5 tests pass.

- [ ] **Step 7.5: Commit**

```bash
git add src/components/ui/CTAPill.tsx tests/components/ui/CTAPill.test.tsx
git commit -m "feat(ui): CTAPill atomic with 3 variants (gold-primary halo-on-hover, silver-secondary, silver-outline) (TDD)"
```

---

### Task 8: ScrollCue atomic

**Files:**
- Create: `src/components/ui/ScrollCue.tsx`
- Create: `tests/components/ui/ScrollCue.test.tsx`

- [ ] **Step 8.1: Write failing tests**

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ScrollCue } from '@/components/ui/ScrollCue';

const scrollMock = vi.fn();

vi.mock('@/hooks/useSmoothScroll', () => ({
  useSmoothScroll: () => scrollMock
}));

describe('ScrollCue', () => {
  it('renders a button with aria-label', () => {
    render(<ScrollCue href="#methodologie" ariaLabel="Faire défiler" />);
    const btn = screen.getByLabelText('Faire défiler');
    expect(btn).toBeInTheDocument();
    expect(btn.tagName).toBe('BUTTON');
  });

  it('triggers smooth scroll on click', () => {
    scrollMock.mockClear();
    render(<ScrollCue href="#methodologie" ariaLabel="Faire défiler" />);
    fireEvent.click(screen.getByLabelText('Faire défiler'));
    expect(scrollMock).toHaveBeenCalledWith('#methodologie');
  });

  it('positions absolute bottom-center via class', () => {
    render(<ScrollCue href="#x" ariaLabel="X" />);
    const btn = screen.getByLabelText('X');
    expect(btn.className).toContain('absolute');
    expect(btn.className).toContain('bottom');
  });
});
```

- [ ] **Step 8.2: Run test, expected FAIL**

```bash
bun run test:run tests/components/ui/ScrollCue.test.tsx
```

- [ ] **Step 8.3: Write `src/components/ui/ScrollCue.tsx`**

```tsx
import { ChevronDown } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface ScrollCueProps {
  href: string;
  ariaLabel: string;
}

/**
 * Mini chevron scroll cue, bottom-center of section.
 * Animation : breathe loop (scale 1↔1.05) via Tailwind animate utility.
 * Click : smooth-scrolls to href anchor (uses Lenis if available).
 */
export function ScrollCue({ href, ariaLabel }: ScrollCueProps) {
  const scrollTo = useSmoothScroll();

  return (
    <button
      type="button"
      onClick={() => scrollTo(href)}
      aria-label={ariaLabel}
      className="absolute bottom-md left-1/2 -translate-x-1/2 text-silver opacity-60 hover:opacity-100 transition-opacity duration-base animate-breathe"
    >
      <ChevronDown className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
```

- [ ] **Step 8.4: Add breathe keyframe to globals.css**

Append to `src/styles/globals.css` (after the `@layer base` block):

```css
@layer utilities {
  @keyframes breathe {
    0%, 100% { transform: translateX(-50%) scale(1); }
    50% { transform: translateX(-50%) scale(1.05); }
  }
  .animate-breathe {
    animation: breathe 2s ease-in-out infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-breathe {
      animation: none;
    }
  }
}
```

- [ ] **Step 8.5: Run test, expected PASS**

```bash
bun run test:run tests/components/ui/ScrollCue.test.tsx
```

Expected: 3 tests pass.

- [ ] **Step 8.6: Commit**

```bash
git add src/components/ui/ScrollCue.tsx tests/components/ui/ScrollCue.test.tsx src/styles/globals.css
git commit -m "feat(ui): ScrollCue atomic with breathe animation + smooth scroll (TDD) + breathe keyframe in globals"
```

---

### Task 9: StatNumber atomic

**Files:**
- Create: `src/components/ui/StatNumber.tsx`
- Create: `tests/components/ui/StatNumber.test.tsx`

- [ ] **Step 9.1: Write failing tests**

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatNumber } from '@/components/ui/StatNumber';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import type { ReactNode } from 'react';

vi.mock('@/hooks/useCountUp', () => ({
  useCountUp: (value: number) => value
}));

const wrapper = (locale: 'fr' | 'en') => ({ children }: { children: ReactNode }) => (
  <LanguageProvider locale={locale}>{children}</LanguageProvider>
);

describe('StatNumber', () => {
  it('renders value + suffix in gold giant', () => {
    render(<StatNumber value={857} suffix="+" label={{ fr: 'Entrepreneurs', en: 'Entrepreneurs' }} />, {
      wrapper: wrapper('fr')
    });
    expect(screen.getByText('857+')).toBeInTheDocument();
    expect(screen.getByText('857+').className).toContain('text-gold');
  });

  it('renders FR label when locale is fr', () => {
    render(<StatNumber value={31} suffix="M$+" label={{ fr: 'Généré', en: 'Generated' }} />, {
      wrapper: wrapper('fr')
    });
    expect(screen.getByText('Généré')).toBeInTheDocument();
  });

  it('renders EN label when locale is en', () => {
    render(<StatNumber value={15} suffix=" ANS" label={{ fr: 'Expérience', en: 'Experience' }} />, {
      wrapper: wrapper('en')
    });
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('applies label styles (uppercase tracking-widest silver)', () => {
    render(<StatNumber value={1} suffix="" label={{ fr: 'X', en: 'X' }} />, {
      wrapper: wrapper('fr')
    });
    const labelEl = screen.getByText('X');
    expect(labelEl.className).toContain('uppercase');
    expect(labelEl.className).toContain('tracking-widest');
  });
});
```

- [ ] **Step 9.2: Run test, expected FAIL**

```bash
bun run test:run tests/components/ui/StatNumber.test.tsx
```

- [ ] **Step 9.3: Write `src/components/ui/StatNumber.tsx`**

```tsx
import { useRef } from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import { useT } from '@/lib/i18n/useT';
import type { BilingualLax } from '@/lib/i18n/types';

interface StatNumberProps {
  value: number;
  suffix?: string;
  label: BilingualLax<string>;
}

/**
 * Big number with animated CountUp + label below.
 * Number in gold (one of the 7 strict gold usages: trust band stats).
 * Label in silver uppercase tracking-widest.
 */
export function StatNumber({ value, suffix = '', label }: StatNumberProps) {
  const { t } = useT();
  const ref = useRef<HTMLDivElement>(null);
  const animated = useCountUp(value, { duration: 1800, threshold: 0.4, ref });

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-xs">
      <span className="text-gold font-display text-[clamp(2.25rem,1.7rem+2.5vw,3.5rem)] tracking-tight leading-none">
        {animated}
        {suffix}
      </span>
      <span className="text-eyebrow uppercase tracking-widest text-silver opacity-70 font-display">
        {t(label)}
      </span>
    </div>
  );
}
```

- [ ] **Step 9.4: Run test, expected PASS**

```bash
bun run test:run tests/components/ui/StatNumber.test.tsx
```

Expected: 4 tests pass.

- [ ] **Step 9.5: Commit**

```bash
git add src/components/ui/StatNumber.tsx tests/components/ui/StatNumber.test.tsx
git commit -m "feat(ui): StatNumber atomic with CountUp + bilingual label + gold giant (TDD)"
```

---

### Task 10: MaskRevealHeading atomic

**Files:**
- Create: `src/components/ui/MaskRevealHeading.tsx`
- Create: `tests/components/ui/MaskRevealHeading.test.tsx`

- [ ] **Step 10.1: Write failing tests**

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({
    style: { transform: 'translateY(0%)', transition: 'transform 800ms', willChange: 'transform' }
  })
}));

describe('MaskRevealHeading', () => {
  it('renders as h1 when as="h1"', () => {
    render(<MaskRevealHeading as="h1">Title</MaskRevealHeading>);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Title');
  });

  it('renders as h2 when as="h2"', () => {
    render(<MaskRevealHeading as="h2">Sub</MaskRevealHeading>);
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Sub');
  });

  it('wraps text in overflow-hidden span', () => {
    const { container } = render(<MaskRevealHeading as="h1">X</MaskRevealHeading>);
    const wrapper = container.querySelector('[data-mask-wrapper]');
    expect(wrapper?.className).toContain('overflow-hidden');
  });

  it('applies hero text class on h1', () => {
    render(<MaskRevealHeading as="h1">Hero</MaskRevealHeading>);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.className).toContain('text-hero');
  });

  it('forwards className', () => {
    render(<MaskRevealHeading as="h1" className="custom">X</MaskRevealHeading>);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.className).toContain('custom');
  });
});
```

- [ ] **Step 10.2: Run test, expected FAIL**

```bash
bun run test:run tests/components/ui/MaskRevealHeading.test.tsx
```

- [ ] **Step 10.3: Write `src/components/ui/MaskRevealHeading.tsx`**

```tsx
import type { ReactNode } from 'react';
import { clsx } from 'clsx';
import { useMaskReveal } from '@/hooks/useMaskReveal';

interface MaskRevealHeadingProps {
  as: 'h1' | 'h2' | 'h3';
  children: ReactNode;
  delay?: number;
  className?: string;
}

const headingSizeClasses: Record<'h1' | 'h2' | 'h3', string> = {
  h1: 'text-hero',
  h2: 'text-h2',
  h3: 'text-h3'
};

/**
 * Heading with vertical mask reveal animation.
 * Text translateY 100%→0 inside overflow:hidden wrapper.
 * Used for hero H1, section H2, signature moments.
 */
export function MaskRevealHeading({ as, children, delay = 0, className }: MaskRevealHeadingProps) {
  const Tag = as;
  const { style } = useMaskReveal({ delay });

  return (
    <Tag
      className={clsx(
        headingSizeClasses[as],
        'text-primary text-balance font-display',
        className
      )}
    >
      <span data-mask-wrapper className="block overflow-hidden">
        <span style={style} className="block">
          {children}
        </span>
      </span>
    </Tag>
  );
}
```

- [ ] **Step 10.4: Run test, expected PASS**

```bash
bun run test:run tests/components/ui/MaskRevealHeading.test.tsx
```

Expected: 5 tests pass.

- [ ] **Step 10.5: Commit**

```bash
git add src/components/ui/MaskRevealHeading.tsx tests/components/ui/MaskRevealHeading.test.tsx
git commit -m "feat(ui): MaskRevealHeading atomic with vertical mask reveal animation (TDD)"
```

---

## Phase 4 — Sections (Tasks 11-13)

### Task 11: VslPlaceholderSection

**Files:**
- Create: `src/components/sections/VslPlaceholderSection.tsx`

- [ ] **Step 11.1: Write VslPlaceholderSection**

```tsx
import { PlayCircle } from 'lucide-react';
import { useT } from '@/lib/i18n/useT';

interface VslPlaceholderSectionProps {
  id: string;
}

/**
 * Placeholder section for VSL embed (real embed Sprint 2).
 * Serves as anchor target for ScrollCue and CTA secondary smooth-scroll.
 * 16:9 dark card, border silver-subtle, play icon center.
 */
export function VslPlaceholderSection({ id }: VslPlaceholderSectionProps) {
  const { t } = useT();
  return (
    <section
      id={id}
      className="min-h-[60vh] flex items-center justify-center px-md py-2xl bg-base"
      aria-label={t({ fr: 'Vidéo méthodologie', en: 'Methodology video' })}
    >
      <div className="aspect-video w-full max-w-content bg-elevated border border-silver/15 rounded-lg flex flex-col items-center justify-center gap-md text-silver/60">
        <PlayCircle className="h-12 w-12" aria-hidden="true" />
        <p className="text-eyebrow uppercase tracking-widest font-display">
          {t({ fr: 'VSL bientôt disponible', en: 'VSL coming soon' })}
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 11.2: Commit**

```bash
git add src/components/sections/VslPlaceholderSection.tsx
git commit -m "feat(sections): VslPlaceholderSection placeholder for VSL embed (Sprint 2 will add real embed)"
```

---

### Task 12: TrustBand section

**Files:**
- Create: `src/components/sections/TrustBand.tsx`
- Create: `tests/components/sections/TrustBand.test.tsx`

- [ ] **Step 12.1: Write failing test**

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TrustBand } from '@/components/sections/TrustBand';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import type { ReactNode } from 'react';

vi.mock('@/hooks/useCountUp', () => ({
  useCountUp: (value: number) => value
}));

const wrapper = (locale: 'fr' | 'en') => ({ children }: { children: ReactNode }) => (
  <LanguageProvider locale={locale}>{children}</LanguageProvider>
);

describe('TrustBand', () => {
  it('renders three StatNumber values', () => {
    render(<TrustBand />, { wrapper: wrapper('fr') });
    expect(screen.getByText('857+')).toBeInTheDocument();
    expect(screen.getByText('31M$+')).toBeInTheDocument();
    expect(screen.getByText('15 ANS')).toBeInTheDocument();
  });

  it('renders FR labels by default', () => {
    render(<TrustBand />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Entrepreneurs accompagnés/i)).toBeInTheDocument();
    expect(screen.getByText(/Généré pour nos clients/i)).toBeInTheDocument();
    expect(screen.getByText(/D'expertise stratégique/i)).toBeInTheDocument();
  });

  it('renders EN labels when locale is en', () => {
    render(<TrustBand />, { wrapper: wrapper('en') });
    expect(screen.getByText(/Entrepreneurs guided/i)).toBeInTheDocument();
    expect(screen.getByText(/Generated for our clients/i)).toBeInTheDocument();
    expect(screen.getByText(/Of strategic expertise/i)).toBeInTheDocument();
  });

  it('has region role with aria-label', () => {
    render(<TrustBand />, { wrapper: wrapper('fr') });
    const region = screen.getByRole('region');
    expect(region).toHaveAttribute('aria-label', 'Chiffres clés');
  });
});
```

- [ ] **Step 12.2: Run test, expected FAIL**

```bash
bun run test:run tests/components/sections/TrustBand.test.tsx
```

- [ ] **Step 12.3: Write `src/components/sections/TrustBand.tsx`**

```tsx
import { useT } from '@/lib/i18n/useT';
import { StatNumber } from '@/components/ui/StatNumber';

/**
 * Trust band section — 3 stats (857+ entrepreneurs, 31M$+ generated, 15 ANS expertise).
 * Stats animated via CountUp on scroll-into-view (40% threshold, run once).
 * Numbers in gold (1 of 7 strict gold usages: trust band stats).
 */
export function TrustBand() {
  const { t } = useT();
  return (
    <section
      role="region"
      aria-label={t({ fr: 'Chiffres clés', en: 'Key figures' })}
      className="py-xl border-y border-silver/10 bg-base"
    >
      <div className="container mx-auto max-w-default px-md grid grid-cols-1 md:grid-cols-3 gap-lg">
        <StatNumber
          value={857}
          suffix="+"
          label={{ fr: 'Entrepreneurs accompagnés', en: 'Entrepreneurs guided' }}
        />
        <StatNumber
          value={31}
          suffix="M$+"
          label={{ fr: 'Généré pour nos clients', en: 'Generated for our clients' }}
        />
        <StatNumber
          value={15}
          suffix=" ANS"
          label={{ fr: "D'expertise stratégique", en: 'Of strategic expertise' }}
        />
      </div>
    </section>
  );
}
```

- [ ] **Step 12.4: Run test, expected PASS**

```bash
bun run test:run tests/components/sections/TrustBand.test.tsx
```

Expected: 4 tests pass.

- [ ] **Step 12.5: Commit**

```bash
git add src/components/sections/TrustBand.tsx tests/components/sections/TrustBand.test.tsx
git commit -m "feat(sections): TrustBand with 3 StatNumber (857+/31M\$+/15 ANS) bilingual + role region (TDD)"
```

---

### Task 13: Hero section

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `tests/components/sections/Hero.test.tsx`

- [ ] **Step 13.1: Write failing test**

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import type { ReactNode } from 'react';

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({ style: { transform: 'translateY(0%)', transition: '', willChange: '' } })
}));
vi.mock('@/hooks/useSmoothScroll', () => ({
  useSmoothScroll: () => vi.fn()
}));

const wrapper = (locale: 'fr' | 'en') => ({ children }: { children: ReactNode }) => (
  <LanguageProvider locale={locale}>{children}</LanguageProvider>
);

describe('Hero', () => {
  it('renders eyebrow with FR text', () => {
    render(<Hero />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Architecte d'affaires/i)).toBeInTheDocument();
  });

  it('renders FR H1 promise', () => {
    render(<Hero />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Ajouter un zéro');
  });

  it('renders EN H1 when locale is en', () => {
    render(<Hero />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Add a zero');
  });

  it('renders two CTAs (primary gold + secondary silver)', () => {
    render(<Hero />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Prendre rendez-vous/i)).toBeInTheDocument();
    expect(screen.getByText(/Découvrir la méthode CDT/i)).toBeInTheDocument();
  });

  it('renders scroll cue', () => {
    render(<Hero />, { wrapper: wrapper('fr') });
    expect(screen.getByLabelText(/défiler/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 13.2: Run test, expected FAIL**

```bash
bun run test:run tests/components/sections/Hero.test.tsx
```

- [ ] **Step 13.3: Write `src/components/sections/Hero.tsx`**

```tsx
import { ArrowRight } from 'lucide-react';
import { useT } from '@/lib/i18n/useT';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { CTAPill } from '@/components/ui/CTAPill';
import { ScrollCue } from '@/components/ui/ScrollCue';
import { heroEntranceTimings } from '@/lib/motion/presets';

/**
 * Hero direction C — typo-led centered.
 * Layout : Eyebrow + MaskRevealHeading H1 + sub + 2 CTAs + ScrollCue.
 * Animations choreographed via heroEntranceTimings (200/400/900/1100/1200/1400ms).
 * VSL section 2 anchor = #methodologie (set by VslPlaceholderSection).
 */
export function Hero() {
  const { t, locale } = useT();
  const scrollTo = useSmoothScroll();

  return (
    <section
      aria-label={t({ fr: 'Section principale', en: 'Hero section' })}
      className="relative min-h-svh flex flex-col items-center justify-center text-center px-md py-xl"
    >
      <div className="flex flex-col items-center gap-md max-w-content">
        <Eyebrow>{t({ fr: "Architecte d'affaires", en: 'Business Architect' })}</Eyebrow>

        <MaskRevealHeading as="h1" delay={heroEntranceTimings.h1MaskReveal}>
          {t({
            fr: "Ajouter un zéro à votre chiffre d'affaires.",
            en: 'Add a zero to your revenue.'
          })}
        </MaskRevealHeading>

        <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
          {t({
            fr: "Architecture d'affaires & scaling stratégique pour entrepreneurs ambitieux.",
            en: 'Business architecture & strategic scaling for ambitious entrepreneurs.'
          })}
        </p>

        <div className="flex flex-col sm:flex-row gap-sm mt-md">
          <CTAPill variant="gold-primary" href={locale === 'fr' ? '/contact' : '/en/contact'}>
            {t({ fr: 'Prendre rendez-vous', en: 'Book a call' })}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </CTAPill>
          <CTAPill variant="silver-secondary" onClick={() => scrollTo('#methodologie')}>
            {t({ fr: 'Découvrir la méthode CDT™', en: 'Discover the CDT™ method' })}
          </CTAPill>
        </div>
      </div>

      <ScrollCue
        href="#methodologie"
        ariaLabel={t({ fr: 'Faire défiler vers la méthodologie', en: 'Scroll to methodology' })}
      />
    </section>
  );
}
```

- [ ] **Step 13.4: Run test, expected PASS**

```bash
bun run test:run tests/components/sections/Hero.test.tsx
```

Expected: 5 tests pass.

- [ ] **Step 13.5: Commit**

```bash
git add src/components/sections/Hero.tsx tests/components/sections/Hero.test.tsx
git commit -m "feat(sections): Hero direction C with Eyebrow + MaskReveal H1 + sub + 2 CTAs + ScrollCue (TDD)"
```

---

## Phase 5 — Home composition (Task 14)

### Task 14: Compose Home page (FR + EN)

**Files:**
- Modify: `src/routes/index.tsx`
- Modify: `src/routes/en/index.tsx`

- [ ] **Step 14.1: Replace `src/routes/index.tsx` placeholder with full composition**

```tsx
import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/sections/Hero';
import { VslPlaceholderSection } from '@/components/sections/VslPlaceholderSection';
import { TrustBand } from '@/components/sections/TrustBand';

function HomeFR() {
  return (
    <main>
      <Hero />
      <VslPlaceholderSection id="methodologie" />
      <TrustBand />
    </main>
  );
}

export const Route = createFileRoute('/')({
  component: HomeFR
});
```

- [ ] **Step 14.2: Replace `src/routes/en/index.tsx` placeholder with full composition**

```tsx
import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/sections/Hero';
import { VslPlaceholderSection } from '@/components/sections/VslPlaceholderSection';
import { TrustBand } from '@/components/sections/TrustBand';

function HomeEN() {
  return (
    <main>
      <Hero />
      <VslPlaceholderSection id="methodologie" />
      <TrustBand />
    </main>
  );
}

export const Route = createFileRoute('/en/')({
  component: HomeEN
});
```

- [ ] **Step 14.3: Verify build + dev**

```bash
bun run typecheck
bun run build
bun run dev
```

Stop dev after Vite ready. Expected: typecheck clean, build OK, dev server reports Hero rendered (no console errors).

- [ ] **Step 14.4: Commit**

```bash
git add src/routes/index.tsx src/routes/en/index.tsx
git commit -m "feat(routes): compose Home with Hero + VslPlaceholderSection + TrustBand (FR + EN)"
```

---

## Phase 6 — Dev components debug page (Task 15)

### Task 15: /dev-components route

**Files:**
- Create: `src/routes/dev-components.tsx`

- [ ] **Step 15.1: Write `src/routes/dev-components.tsx`**

```tsx
import { createFileRoute } from '@tanstack/react-router';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { CTAPill } from '@/components/ui/CTAPill';
import { ScrollCue } from '@/components/ui/ScrollCue';
import { StatNumber } from '@/components/ui/StatNumber';
import { Hero } from '@/components/sections/Hero';
import { TrustBand } from '@/components/sections/TrustBand';

function DevComponents() {
  return (
    <main className="min-h-screen py-xl px-md flex flex-col gap-2xl">
      <header className="border-b border-silver/15 pb-md">
        <h1 className="text-h2 text-primary font-display">Dev components — isolation gallery</h1>
        <p className="text-body text-silver opacity-70 mt-sm">
          Non-public debug route. Each atomic + section rendered in isolation for visual + a11y testing.
        </p>
      </header>

      <section>
        <h2 className="text-h3 text-primary mb-md">Eyebrow</h2>
        <div className="flex flex-col gap-sm">
          <Eyebrow>With gold dot (default)</Eyebrow>
          <Eyebrow goldDot={false}>Without gold dot</Eyebrow>
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">MaskRevealHeading</h2>
        <MaskRevealHeading as="h1">H1 mask reveal example</MaskRevealHeading>
        <MaskRevealHeading as="h2">H2 mask reveal example</MaskRevealHeading>
        <MaskRevealHeading as="h3">H3 mask reveal example</MaskRevealHeading>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">CTAPill</h2>
        <div className="flex flex-col sm:flex-row gap-sm">
          <CTAPill variant="gold-primary" href="#none">Gold primary →</CTAPill>
          <CTAPill variant="silver-secondary" onClick={() => {}}>Silver secondary</CTAPill>
          <CTAPill variant="silver-outline" href="#none">Silver outline</CTAPill>
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">StatNumber (no countup visible until scroll-into-view)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <StatNumber value={857} suffix="+" label={{ fr: 'Entrepreneurs', en: 'Entrepreneurs' }} />
          <StatNumber value={31} suffix="M$+" label={{ fr: 'Généré', en: 'Generated' }} />
          <StatNumber value={15} suffix=" ANS" label={{ fr: 'Expérience', en: 'Experience' }} />
        </div>
      </section>

      <section className="relative min-h-[300px] border border-silver/15 rounded-lg">
        <h2 className="text-h3 text-primary mb-md p-md">ScrollCue (positioned absolute bottom-center)</h2>
        <ScrollCue href="#bottom" ariaLabel="Scroll cue example" />
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">Hero (composed)</h2>
        <div className="border border-silver/15 rounded-lg">
          <Hero />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">TrustBand (composed)</h2>
        <TrustBand />
      </section>

      <div id="bottom" className="h-32" />
    </main>
  );
}

export const Route = createFileRoute('/dev-components')({
  component: DevComponents
});
```

- [ ] **Step 15.2: Verify build**

```bash
bun run typecheck
bun run build
```

Expected: typecheck clean, build OK.

- [ ] **Step 15.3: Commit**

```bash
git add src/routes/dev-components.tsx
git commit -m "feat(dev): /dev-components route — isolation gallery for atomics + sections (debug/a11y testing)"
```

---

## Phase 7 — A11y + DoD + tag (Tasks 16-17)

### Task 16: a11y axe-core tests for Hero + TrustBand

**Files:**
- Create: `tests/a11y/hero.test.ts`

- [ ] **Step 16.1: Write a11y test**

```typescript
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'vitest-axe';
import { Hero } from '@/components/sections/Hero';
import { TrustBand } from '@/components/sections/TrustBand';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

expect.extend({ toHaveNoViolations });

describe('a11y — Hero + TrustBand', () => {
  it('Hero has no axe violations (FR)', async () => {
    const { container } = render(
      <LanguageProvider locale="fr">
        <Hero />
      </LanguageProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Hero has no axe violations (EN)', async () => {
    const { container } = render(
      <LanguageProvider locale="en">
        <Hero />
      </LanguageProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('TrustBand has no axe violations (FR)', async () => {
    const { container } = render(
      <LanguageProvider locale="fr">
        <TrustBand />
      </LanguageProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

- [ ] **Step 16.2: Run a11y tests**

```bash
bun run test:run tests/a11y/hero.test.ts
```

Expected: 3 tests pass with 0 axe violations.

If violations found: fix them in atomics/sections (add aria-labels, ensure unique h1, contrast, etc.) and re-run.

- [ ] **Step 16.3: Commit**

```bash
git add tests/a11y/hero.test.ts
git commit -m "test(a11y): axe-core scans for Hero + TrustBand (FR + EN)"
```

---

### Task 17: Final DoD + tag sprint-1-done

**Files:**
- Modify: `C:/Users/rochdi/jonas-diop-scan/HANDOFF.md` (update Status)

- [ ] **Step 17.1: Run full verify chain**

```bash
bun install
bun run typecheck
bun run lint
bun run test:run
bun run build
```

Expected: all green. Total tests should be ~30+ (Sprint 0 = 8 + Sprint 1 hooks = 10 + atomics = 21 + sections = 9 + a11y = 3 ≈ 51).

- [ ] **Step 17.2: Dev smoke test**

```bash
bun run dev
```

Capture Vite ready time. Stop after a few seconds. Expected: Vite ready < 500ms.

- [ ] **Step 17.3: Update HANDOFF.md Status**

Edit `C:/Users/rochdi/jonas-diop-scan/HANDOFF.md` line containing `**Status** : Sprint 0 (Setup) ✅ DONE...` and replace with:

```
**Status** : Sprint 1 (UI core + Hero) ✅ DONE 2026-05-25 — Hero direction C + 5 atomics (Eyebrow, MaskRevealHeading, CTAPill, ScrollCue, StatNumber) + 3 hooks (useCountUp, useMaskReveal, useSmoothScroll) + Hero + TrustBand + VslPlaceholderSection + Home composition FR/EN + /dev-components debug page + a11y axe-core 0 violations + 51+ tests TDD pass. Tag `sprint-1-done`. Prêt **Sprint 1.5 (Prototype HTML cohérence visuelle)** ou directement **Sprint 2 (Home complète + Footer rich)**.
```

(Use Edit tool, find/replace the Status line.)

- [ ] **Step 17.4: Commit final + tag**

```bash
git add docs/  # if any docs touched
git commit -m "chore: Sprint 1 complete — Hero + atomics + hooks + sections + dev-components + a11y, 51+ tests" --allow-empty
git tag -a sprint-1-done -m "Sprint 1 (UI core + Hero direction C) complete 2026-05-25 — 5 atomics + 3 hooks + 3 sections + /dev-components + a11y 0 violations. DoD validated."
git push origin main
git push origin sprint-1-done
```

- [ ] **Step 17.5: Final verify**

```bash
git log --oneline | head -30
git tag --list
git status
```

Expected: ~40 commits (22 Sprint 0 + ~17 Sprint 1), tags `sprint-0-done` and `sprint-1-done`, status clean.

---

## Self-review checklist

### 1. Spec coverage

| Spec section | Task covering it |
|---|---|
| Decisions table (5 questions) | Tasks 6-13 implement all 5 decisions |
| Component breakdown — Eyebrow | Task 6 |
| Component breakdown — MaskRevealHeading | Task 10 |
| Component breakdown — CTAPill | Task 7 |
| Component breakdown — ScrollCue | Task 8 |
| Component breakdown — StatNumber | Task 9 |
| Hook — useCountUp | Task 3 |
| Hook — useMaskReveal | Task 4 |
| Hook — useSmoothScroll | Task 5 |
| Section — Hero | Task 13 |
| Section — TrustBand | Task 12 |
| Section — VslPlaceholderSection | Task 11 |
| Home composition | Task 14 |
| Animation choreography | Task 1 (presets) + Tasks 3-4 (hooks) + Task 13 (Hero wires it together) |
| Lenis init | Task 2 |
| Motion presets | Task 1 |
| Mobile behavior | Baked into clamp() tokens + flex-col/sm:flex-row in Task 13 |
| Accessibility | Task 16 (axe scans) + aria-labels in atomics |
| Interactions (CTAs, scroll) | Task 7 (CTAPill) + Task 5 (smooth scroll) + Task 13 (wire) |
| Testing strategy — Vitest unit | Tasks 6-10 (atomics) + Tasks 3-5 (hooks) |
| Testing strategy — Vitest integration | Tasks 12-13 (sections) |
| Testing strategy — axe-core | Task 16 |
| Testing strategy — /dev-components manual | Task 15 |
| Out of scope (Sprint 2+) | Explicitly deferred, not in plan ✓ |
| Acceptance criteria DoD | Task 17 |

All spec sections covered.

### 2. Placeholder scan

Scanned: no "TBD", no "TODO", no "implement later", no "similar to Task N", no vague "add error handling". Every step has complete code or exact command.

### 3. Type consistency

- `useCountUp(value, options)` signature same in Task 3 impl and Task 9 (StatNumber) usage
- `useMaskReveal(options)` returns `{ style }` — Task 4 + Task 10 (MaskRevealHeading) match
- `useSmoothScroll()` returns `(anchor: string) => void` — Task 5 + Task 8 (ScrollCue) + Task 13 (Hero) match
- `Eyebrow` props `{ children, goldDot?, className? }` — Task 6 + Task 15 (dev page) + Task 13 (Hero) match
- `CTAPill` discriminated union `{ href; onClick? never }` vs `{ onClick; href? never }` — Task 7 + Task 13 + Task 15 match
- `StatNumber` props `{ value, suffix?, label: BilingualLax<string> }` — Task 9 + Task 12 + Task 15 match
- `BilingualLax<T>` from Sprint 0 already established; Tasks 9, 12 use it consistently
- `useT()` returns `{ t, locale }` — used in Tasks 9, 11, 12, 13, dev page

All consistent.

---

## Execution Handoff

**Plan complete and saved to `docs/superpowers/plans/2026-05-25-sprint-1-hero-implementation.md`.**

Two execution options:

**1. Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration. Same pattern as Sprint 0 which validated 22 commits without rework.

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints for review.

Which approach?
