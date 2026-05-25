import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LogoWordmark } from '@/components/ui/LogoWordmark';

describe('LogoWordmark', () => {
  it('renders "JONAS DIOP" text', () => {
    render(<LogoWordmark />);
    expect(screen.getByText(/JONAS DIOP/i)).toBeInTheDocument();
  });

  it('renders gold dot signature', () => {
    const { container } = render(<LogoWordmark />);
    const dot = container.querySelector('[data-logo-dot]');
    expect(dot).toBeInTheDocument();
    expect(dot?.className).toContain('bg-gold');
  });

  it('forwards className', () => {
    render(<LogoWordmark className="custom-class" />);
    expect(screen.getByText(/JONAS DIOP/i).parentElement?.className).toContain('custom-class');
  });
});
