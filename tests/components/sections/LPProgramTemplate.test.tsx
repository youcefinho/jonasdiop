import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { gamechangerScalingCopy } from '@/data/copy/services-gamechanger-scaling';
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

// ---------------------------------------------------------------------------
// Hero section
// ---------------------------------------------------------------------------
describe('LPProgramTemplate — hero', () => {
  it('renders H1 from copy.hero.h1', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Gamechanger Scaling');
  });

  it('renders hero eyebrow', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Programme de groupe/i)).toBeInTheDocument();
  });

  it('renders hero badge (cohort size)', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    // Badge is a <p> with text-gold/70 class in the hero section
    const badge = Array.from(container.querySelectorAll('p')).find(
      (el) =>
        el.textContent?.includes('Cohorte restreinte') && el.textContent?.includes('personnes')
    );
    expect(badge).toBeInTheDocument();
  });

  it('renders hero sub copy', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/architecture d'affaires/i)).toBeInTheDocument();
  });

  it('renders hero CTA linking to /contact', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    const contactLinks = container.querySelectorAll('a[href="/contact"]');
    expect(contactLinks.length).toBeGreaterThanOrEqual(1);
  });
});

// ---------------------------------------------------------------------------
// Promise section
// ---------------------------------------------------------------------------
describe('LPProgramTemplate — promise', () => {
  it('renders promise eyebrow', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Ce que tu vas construire/i)).toBeInTheDocument();
  });

  it('renders promise title H2', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    // The promise H2 is a MaskRevealHeading — find it by heading role
    const headings = container.querySelectorAll('h2');
    const promiseH2 = Array.from(headings).find((h) =>
      h.textContent?.includes('une architecture qui génère')
    );
    expect(promiseH2).toBeInTheDocument();
  });

  it('renders promise body paragraph text', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/programme de travail/i)).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Qualification split — signature "Dan Martell" pattern
// ---------------------------------------------------------------------------
describe('LPProgramTemplate — qualification split', () => {
  it('renders forWho eyebrow "Pour toi si..."', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    // Multiple elements may contain this text (eyebrow + aria-label on ul)
    const matches = screen.getAllByText(/Pour toi si/i);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it('renders forWho title', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/programme est fait pour des gens précis/i)).toBeInTheDocument();
  });

  it('renders all 5 qualification items with check icons', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    // 5 qualif items
    expect(screen.getByText(/100K\$ et 1M\$/i)).toBeInTheDocument();
    expect(screen.getByText(/prêt à exécuter/i)).toBeInTheDocument();
    // Check icons (aria-hidden spans)
    const checkIcons = container.querySelectorAll('[data-qualif-check]');
    expect(checkIcons.length).toBe(5);
  });

  it('renders disqualif heading "Pas pour toi si..."', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    // The eyebrow span is the authoritative "Pas pour toi si..." element
    const eyebrowSpan = Array.from(container.querySelectorAll('span')).find((el) =>
      el.textContent?.includes('Pas pour toi si')
    );
    expect(eyebrowSpan).toBeInTheDocument();
  });

  it('renders all 3 disqualification items with X icons', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    expect(screen.getByText(/moins de 50K\$/i)).toBeInTheDocument();
    expect(screen.getByText(/motivation ou de personal development/i)).toBeInTheDocument();
    const xIcons = container.querySelectorAll('[data-disqualif-x]');
    expect(xIcons.length).toBe(3);
  });

  it('renders "Honnêteté radicale" disclaimer', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Honnêteté radicale/i)).toBeInTheDocument();
  });

  it('renders "Radical honesty" in EN locale', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('en') });
    expect(screen.getByText(/Radical honesty/i)).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Modules (piliers) section
// ---------------------------------------------------------------------------
describe('LPProgramTemplate — modules', () => {
  it('renders modules eyebrow', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/12 semaines · 6 piliers/i)).toBeInTheDocument();
  });

  it('renders modules section H2', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Le parcours\./i)).toBeInTheDocument();
  });

  it('renders all 6 module cards', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    // 6 article elements for pillar cards
    const cards = container.querySelectorAll('[data-module-card]');
    expect(cards.length).toBe(6);
  });

  it('renders module weeks label (Semaines 1-2)', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Semaines 1-2/i)).toBeInTheDocument();
  });

  it('renders module title with gold number prefix', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Diagnostic d'architecture/i)).toBeInTheDocument();
  });

  it('renders module body text', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Cartographie complète/i)).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Format section
// ---------------------------------------------------------------------------
describe('LPProgramTemplate — format', () => {
  it('renders format eyebrow', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Format & logistique/i)).toBeInTheDocument();
  });

  it('renders format title H2', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Comment ça fonctionne concrètement/i)).toBeInTheDocument();
  });

  it('renders format details as dl/dt/dd', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    const dl = container.querySelector('dl');
    expect(dl).toBeInTheDocument();
    const dts = container.querySelectorAll('dt');
    expect(dts.length).toBe(6); // 6 format details
  });

  it('renders format detail label "Sessions live" as <dt> element', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    // Verify the <dt> element specifically (distinct from qualif list item body)
    const dts = Array.from(container.querySelectorAll('dt'));
    const sessionsLiveDt = dts.find((dt) => dt.textContent?.trim() === 'Sessions live');
    expect(sessionsLiveDt).toBeInTheDocument();
  });

  it('renders format detail value with "12 sessions"', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/12 sessions hebdomadaires/i)).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Results section
// ---------------------------------------------------------------------------
describe('LPProgramTemplate — results', () => {
  it('renders results eyebrow', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Résultats attendus/i)).toBeInTheDocument();
  });

  it('renders results milestones timeline', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Semaine 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Diagnostic complet/i)).toBeInTheDocument();
    expect(screen.getByText(/Semaine 12/i)).toBeInTheDocument();
  });

  it('renders results disclaimer text', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Résultats variables/i)).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// FAQ section
// ---------------------------------------------------------------------------
describe('LPProgramTemplate — FAQ', () => {
  it('renders FAQ title H2', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Questions sur Gamechanger Scaling/i)).toBeInTheDocument();
  });

  it('renders FAQ as <details> elements (native accordion)', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    const details = container.querySelectorAll('details');
    expect(details.length).toBe(3); // 3 FAQ items for gamechanger-scaling
  });

  it('renders FAQ question in <summary>', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    const summary = container.querySelector('summary');
    expect(summary?.textContent).toContain('prochaine cohorte');
  });

  it('renders FAQ answer text', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/cohortes ont une disponibilité limitée/i)).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Final CTA section
// ---------------------------------------------------------------------------
describe('LPProgramTemplate — finalCta', () => {
  it('renders finalCta eyebrow "Places limitées"', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Places limitées/i)).toBeInTheDocument();
  });

  it('renders finalCta H2 title', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Postuler à la prochaine cohorte\./i)).toBeInTheDocument();
  });

  it('renders finalCta sub copy', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/appel de qualification est requis/i)).toBeInTheDocument();
  });

  it('renders finalCta CTA label', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('fr') });
    // ctaLabel appears in hero AND finalCta — at least 2 occurrences
    const ctaButtons = screen.getAllByText(/Postuler à la prochaine cohorte/i);
    expect(ctaButtons.length).toBeGreaterThanOrEqual(2);
  });
});

// ---------------------------------------------------------------------------
// EN locale rendering
// ---------------------------------------------------------------------------
describe('LPProgramTemplate — EN locale', () => {
  it('renders EN hero H1', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Gamechanger Scaling');
  });

  it('renders EN format eyebrow', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('en') });
    expect(screen.getByText(/Format & logistics/i)).toBeInTheDocument();
  });

  it('renders EN modules title "The journey"', () => {
    render(<LPProgramTemplate copy={gamechangerScalingCopy} />, { wrapper: wrapper('en') });
    expect(screen.getByText(/The journey\./i)).toBeInTheDocument();
  });

  it('EN CTA links to /en/contact', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('en')
    });
    const contactLinks = container.querySelectorAll('a[href="/en/contact"]');
    expect(contactLinks.length).toBeGreaterThanOrEqual(1);
  });
});

// ---------------------------------------------------------------------------
// Structural / accessibility
// ---------------------------------------------------------------------------
describe('LPProgramTemplate — structure', () => {
  it('has exactly one H1', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    expect(container.querySelectorAll('h1').length).toBe(1);
  });

  it('module cards render as <article> elements', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    const articles = container.querySelectorAll('article[data-module-card]');
    expect(articles.length).toBe(6);
  });

  it('has <main> element wrapping content', () => {
    const { container } = render(<LPProgramTemplate copy={gamechangerScalingCopy} />, {
      wrapper: wrapper('fr')
    });
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
