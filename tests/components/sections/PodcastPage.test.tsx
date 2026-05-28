import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { PodcastPageLive, PodcastPageWaitlist } from '@/components/sections/PodcastPage';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@tanstack/react-router', () => ({
  Link: ({ to, children, ...rest }: { to: string; children: ReactNode; [k: string]: unknown }) => (
    <a href={to} {...rest}>
      {children}
    </a>
  )
}));

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({ style: { transform: 'translateY(0%)', transition: '', willChange: '' } })
}));

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

// =============================================================================
// SCENARIO A — Podcast Live
// =============================================================================
describe('PodcastPageLive (Scenario A)', () => {
  it('renders H1 The Game Changer Podcast', () => {
    render(<PodcastPageLive />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Game Changer');
  });

  it('renders about section with 3 specs (Format / Fréquence / Sujets)', () => {
    const { container } = render(<PodcastPageLive />, { wrapper: wrapper('fr') });
    const specs = container.querySelector('dl[data-podcast-specs]');
    expect(specs?.querySelectorAll('dt').length).toBe(3);
    expect(screen.getByText('Format')).toBeInTheDocument();
    expect(screen.getByText('Fréquence')).toBeInTheDocument();
    expect(screen.getByText('Sujets')).toBeInTheDocument();
  });

  it('renders 3 platform cards (Spotify / Apple Podcasts / YouTube)', () => {
    const { container } = render(<PodcastPageLive />, { wrapper: wrapper('fr') });
    const list = container.querySelector('ul[data-platforms-list]');
    expect(list?.querySelectorAll('li').length).toBe(3);
    expect(screen.getByText('Spotify')).toBeInTheDocument();
    expect(screen.getByText('Apple Podcasts')).toBeInTheDocument();
    expect(screen.getByText('YouTube')).toBeInTheDocument();
  });

  it('renders episodes placeholder', () => {
    render(<PodcastPageLive />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/derniers épisodes en cours/i)).toBeInTheDocument();
  });

  it('renders final CTA Scenario A label', () => {
    render(<PodcastPageLive />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Écouter le dernier épisode/i)).toBeInTheDocument();
  });

  it('renders H1 (EN)', () => {
    render(<PodcastPageLive />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Game Changer');
  });
});

// =============================================================================
// SCENARIO B — Podcast Waitlist (coming soon)
// =============================================================================
describe('PodcastPageWaitlist (Scenario B)', () => {
  it('renders H1 The Game Changer Podcast', () => {
    render(<PodcastPageWaitlist />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Game Changer');
  });

  it('renders comingSoon section', () => {
    render(<PodcastPageWaitlist />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Le podcast arrive/i)).toBeInTheDocument();
  });

  it('renders 4 formatPrevu list items', () => {
    const { container } = render(<PodcastPageWaitlist />, { wrapper: wrapper('fr') });
    const list = container.querySelector('ul[data-format-list]');
    expect(list?.querySelectorAll('li').length).toBe(4);
  });

  it('renders waitlist disabled email input', () => {
    const { container } = render(<PodcastPageWaitlist />, { wrapper: wrapper('fr') });
    const input = container.querySelector('input[name="email"]');
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });

  it('renders waitlist submit button disabled', () => {
    const { container } = render(<PodcastPageWaitlist />, { wrapper: wrapper('fr') });
    expect(container.querySelector('button[type="submit"]')).toBeDisabled();
  });

  it('renders submit label "M\'avertir au lancement" (FR)', () => {
    render(<PodcastPageWaitlist />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/M.avertir au lancement/i)).toBeInTheDocument();
  });

  it('renders final CTA Scenario B label', () => {
    render(<PodcastPageWaitlist />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/M.inscrire aux notifications/i)).toBeInTheDocument();
  });

  it('renders H1 (EN) with "coming"', () => {
    render(<PodcastPageWaitlist />, { wrapper: wrapper('en') });
    expect(screen.getAllByText(/coming/i).length).toBeGreaterThanOrEqual(1);
  });
});
