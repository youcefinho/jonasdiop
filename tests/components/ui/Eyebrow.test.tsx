import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
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
