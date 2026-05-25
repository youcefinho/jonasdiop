import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
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
    render(
      <MaskRevealHeading as="h1" className="custom">
        X
      </MaskRevealHeading>
    );
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.className).toContain('custom');
  });
});
