import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { TrilogieFooterCrossLink } from '@/components/sections/bootcamps/TrilogieFooterCrossLink';
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

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider locale="fr">{children}</LanguageProvider>
);

describe('TrilogieFooterCrossLink — smoke', () => {
  it('renders without throwing', () => {
    expect(() => render(<TrilogieFooterCrossLink />, { wrapper })).not.toThrow();
  });

  it('renders default headline and 3 cards', () => {
    const { container } = render(<TrilogieFooterCrossLink />, { wrapper });
    const list = container.querySelector('[data-card-group="trilogie-crosslink"]');
    expect(list?.querySelectorAll('li').length).toBe(3);
    expect(container.querySelector('h2')?.textContent).toContain('3 bootcamps');
  });

  it('renders each trilogie name (FR verbatim)', () => {
    const { container } = render(<TrilogieFooterCrossLink />, { wrapper });
    expect(container.textContent).toContain('An Army of One');
    expect(container.textContent).toContain('The Edge');
    expect(container.textContent).toContain('The Activation');
  });
});

describe('TrilogieFooterCrossLink — aria-current="page"', () => {
  it('marks the current slug card with aria-current="page"', () => {
    const { container } = render(<TrilogieFooterCrossLink currentSlug="an-army-of-one" />, {
      wrapper
    });
    const current = container.querySelector('[aria-current="page"]');
    expect(current?.textContent).toContain('An Army of One');
  });

  it('marks the-edge card when currentSlug=the-edge', () => {
    const { container } = render(<TrilogieFooterCrossLink currentSlug="the-edge" />, { wrapper });
    expect(container.querySelector('[aria-current="page"]')?.textContent).toContain('The Edge');
  });

  it('marks the-activation card when currentSlug=the-activation', () => {
    const { container } = render(<TrilogieFooterCrossLink currentSlug="the-activation" />, {
      wrapper
    });
    expect(container.querySelector('[aria-current="page"]')?.textContent).toContain(
      'The Activation'
    );
  });

  it('current card is not an <a> link (non-clickable)', () => {
    const { container } = render(<TrilogieFooterCrossLink currentSlug="an-army-of-one" />, {
      wrapper
    });
    const current = container.querySelector('[aria-current="page"]');
    expect(current?.tagName.toLowerCase()).not.toBe('a');
  });

  it('non-current cards are <a> with proper hrefs', () => {
    const { container } = render(<TrilogieFooterCrossLink currentSlug="an-army-of-one" />, {
      wrapper
    });
    const links = container.querySelectorAll('[data-card-group="trilogie-crosslink"] a');
    expect(links.length).toBe(2);
    const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(
      expect.arrayContaining([
        '/evenements/bootcamps/the-edge',
        '/evenements/bootcamps/the-activation'
      ])
    );
  });
});

describe('TrilogieFooterCrossLink — EN labels override', () => {
  it('renders EN labels when passed via labels prop', () => {
    const { container } = render(
      <TrilogieFooterCrossLink
        currentSlug="an-army-of-one"
        eyebrow="The trilogy"
        headline="The 3 bootcamps"
        subtitle="Pick yours"
        labels={{
          blocage: 'Blocker',
          audience: 'Audience',
          priceLaunch: 'Launch',
          priceRegular: 'Regular',
          places: 'Spots',
          format: 'Format',
          current: 'You are here',
          cta: 'Discover'
        }}
      />,
      { wrapper }
    );
    expect(container.textContent).toContain('The 3 bootcamps');
    expect(container.textContent).toContain('You are here');
    expect(container.textContent).toContain('Discover');
  });
});

describe('TrilogieFooterCrossLink — cards override', () => {
  it('renders cards override when provided', () => {
    const { container } = render(
      <TrilogieFooterCrossLink
        cards={[
          {
            slug: 'an-army-of-one',
            name: 'An Army of One EN',
            blocage: 'b',
            audience: 'a',
            priceLaunch: '$997',
            priceRegular: '$1,497',
            places: 20,
            format: 'Direct',
            href: '/en/events/bootcamps/an-army-of-one'
          },
          {
            slug: 'the-edge',
            name: 'The Edge EN',
            blocage: 'b',
            audience: 'a',
            priceLaunch: '$1,497',
            priceRegular: '$1,997',
            places: 15,
            format: 'Apply',
            href: '/en/events/bootcamps/the-edge'
          },
          {
            slug: 'the-activation',
            name: 'The Activation EN',
            blocage: 'b',
            audience: 'a',
            priceLaunch: '$1,497',
            priceRegular: '$1,997',
            places: 20,
            format: 'Direct',
            href: '/en/events/bootcamps/the-activation'
          }
        ]}
      />,
      { wrapper }
    );
    expect(container.textContent).toContain('An Army of One EN');
    const links = container.querySelectorAll('[data-card-group="trilogie-crosslink"] a');
    const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(
      expect.arrayContaining([
        '/en/events/bootcamps/an-army-of-one',
        '/en/events/bootcamps/the-edge',
        '/en/events/bootcamps/the-activation'
      ])
    );
  });
});
