import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
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
    act(() => {
      result.current('#methodologie');
    });

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    document.body.removeChild(target);
  });

  it('does not throw when anchor target missing', () => {
    const { result } = renderHook(() => useSmoothScroll());
    expect(() => result.current('#nonexistent')).not.toThrow();
    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });
});
