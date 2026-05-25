import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
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
