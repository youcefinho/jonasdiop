import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { CTAPill } from '@/components/ui/CTAPill';

describe('CTAPill', () => {
  it('renders gold-primary variant with bg-gold + text-base', () => {
    render(
      <CTAPill variant="gold-primary" onClick={() => {}}>
        Prendre RDV
      </CTAPill>
    );
    const btn = screen.getByText('Prendre RDV');
    expect(btn.className).toContain('bg-gold');
    expect(btn.className).toContain('text-base');
    expect(btn.className).toContain('rounded-pill');
  });

  it('renders silver-secondary variant with border + transparent bg', () => {
    render(
      <CTAPill variant="silver-secondary" onClick={() => {}}>
        Découvrir
      </CTAPill>
    );
    const btn = screen.getByText('Découvrir');
    expect(btn.className).toContain('border');
    expect(btn.className).toContain('text-silver');
    expect(btn.className).toContain('bg-transparent');
  });

  it('renders as button when onClick provided', () => {
    const onClick = vi.fn();
    render(
      <CTAPill variant="gold-primary" onClick={onClick}>
        Click
      </CTAPill>
    );
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('renders as anchor when href provided', () => {
    render(
      <CTAPill variant="gold-primary" href="/contact">
        To contact
      </CTAPill>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/contact');
  });

  it('forwards aria-label', () => {
    render(
      <CTAPill variant="gold-primary" ariaLabel="custom label" onClick={() => {}}>
        X
      </CTAPill>
    );
    expect(screen.getByLabelText('custom label')).toBeInTheDocument();
  });
});
