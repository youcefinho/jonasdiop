import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useCountUp } from '@/hooks/useCountUp';

// Mock IntersectionObserver
class IOMock {
  callback: IntersectionObserverCallback;
  constructor(cb: IntersectionObserverCallback) {
    this.callback = cb;
  }
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
  global.IntersectionObserver = class MockIO extends IOMock {
    constructor(cb: IntersectionObserverCallback) {
      super(cb);
      ioInstance = this as unknown as IOMock;
    }
  };
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

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBeGreaterThan(0);
    expect(result.current).toBeLessThanOrEqual(100);

    act(() => {
      vi.advanceTimersByTime(600);
    });
    expect(result.current).toBe(100);
  });

  it('runs once — re-entering viewport does not restart', () => {
    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useCountUp(50, { duration: 500, threshold: 0.4, ref }));

    act(() => {
      ioInstance?.trigger(true, 0.5);
    });
    act(() => {
      vi.advanceTimersByTime(600);
    });
    expect(result.current).toBe(50);

    act(() => {
      ioInstance?.trigger(false, 0);
    });
    act(() => {
      ioInstance?.trigger(true, 0.5);
    });
    act(() => {
      vi.advanceTimersByTime(600);
    });
    expect(result.current).toBe(50);
  });

  it('returns final value immediately when prefers-reduced-motion', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi
        .fn()
        .mockReturnValue({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() })
    });
    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useCountUp(857, { duration: 1800, threshold: 0.4, ref }));
    expect(result.current).toBe(857);
  });
});
