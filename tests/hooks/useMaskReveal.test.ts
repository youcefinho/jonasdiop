import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useMaskReveal } from '@/hooks/useMaskReveal';

describe('useMaskReveal', () => {
  it('starts hidden (translateY 100%) and reveals on mount after delay', () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useMaskReveal({ delay: 400, duration: 800 }));
    expect(result.current.style.transform).toContain('translateY(100%)');
    act(() => {
      vi.advanceTimersByTime(400);
    });
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
      value: vi
        .fn()
        .mockReturnValue({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() })
    });
    const { result } = renderHook(() => useMaskReveal({ delay: 1000, duration: 800 }));
    expect(result.current.style.transform).toContain('translateY(0');
  });
});
