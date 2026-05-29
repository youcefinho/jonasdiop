import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { EdgeApplicationFormShell } from '@/components/sections/bootcamps/EdgeApplicationFormShell';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({ style: { transform: 'translateY(0%)', transition: '', willChange: '' } })
}));

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider locale="fr">{children}</LanguageProvider>
);

const baseProps = {
  eyebrow: 'Processus application',
  headline: 'Soumets ton application',
  subtitle: 'Examen sous 48h après activation',
  banner: 'Application examinée sous 48h après activation Stripe.',
  revenueBuckets: [
    { value: 'lt5k', label: '< 5K$/mois' },
    { value: '5to10k', label: '5-10K$/mois' },
    { value: '10to20k', label: '10-20K$/mois' },
    { value: '20to50k', label: '20-50K$/mois' },
    { value: 'gt50k', label: '> 50K$/mois' }
  ],
  labels: {
    activity: 'Activité',
    activityPlaceholder: 'Décris ton activité',
    revenue: 'Revenu mensuel',
    revenuePlaceholder: 'Sélectionne',
    change: 'Ce que tu veux changer',
    changePlaceholder: 'Décris',
    why: 'Pourquoi maintenant',
    whyPlaceholder: 'Décris',
    name: 'Nom complet',
    namePlaceholder: 'Prénom Nom',
    email: 'Email',
    emailPlaceholder: 'toi@email.com',
    phone: 'Téléphone',
    phonePlaceholder: '+1...',
    submit: 'Soumettre',
    notifyEmail: 'Sois notifié de l’activation',
    notifyEmailPlaceholder: 'toi@email.com',
    notifySubmit: 'Notifier',
    notifySuccess: 'Inscrit — on te contacte dès activation.',
    required: 'Champs requis'
  }
} as const;

describe('EdgeApplicationFormShell — smoke', () => {
  it('renders without throwing', () => {
    expect(() => render(<EdgeApplicationFormShell {...baseProps} />, { wrapper })).not.toThrow();
  });

  it('renders headline as H2', () => {
    const { container } = render(<EdgeApplicationFormShell {...baseProps} />, { wrapper });
    expect(container.querySelector('h2')?.textContent).toContain('Soumets ton application');
  });

  it('renders banner with role="note"', () => {
    const { container } = render(<EdgeApplicationFormShell {...baseProps} />, { wrapper });
    const note = container.querySelector('[role="note"]');
    expect(note?.textContent).toContain('Application examinée');
  });

  it('renders 5 revenue bucket options', () => {
    const { container } = render(<EdgeApplicationFormShell {...baseProps} />, { wrapper });
    const select = container.querySelector('select');
    // 5 buckets + 1 disabled placeholder
    expect(select?.querySelectorAll('option').length).toBe(6);
  });
});

describe('EdgeApplicationFormShell — fieldset disabled state (pré-lancement)', () => {
  it('main fieldset is disabled (Stripe non câblé)', () => {
    const { container } = render(<EdgeApplicationFormShell {...baseProps} />, { wrapper });
    const fieldset = container.querySelector('fieldset');
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeDisabled();
  });

  it('submit button is disabled and type="button" (cannot submit)', () => {
    const { container } = render(<EdgeApplicationFormShell {...baseProps} />, { wrapper });
    // Submit button has Lock icon + labels.submit text + disabled attr
    const buttons = Array.from(container.querySelectorAll('button'));
    const submitBtn = buttons.find((b) => b.textContent?.includes('Soumettre'));
    expect(submitBtn).toBeDefined();
    expect(submitBtn).toBeDisabled();
    expect(submitBtn?.getAttribute('type')).toBe('button');
    expect(submitBtn?.getAttribute('aria-disabled')).toBe('true');
  });

  it('main article wraps a disabled <fieldset> (conveys pre-launch state semantically)', () => {
    const { container } = render(<EdgeApplicationFormShell {...baseProps} />, { wrapper });
    // aria-disabled removed from <article> per WCAG (article is non-interactive);
    // disabled state is conveyed by the inner <fieldset disabled> which is the correct semantic.
    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
    const fieldset = article?.querySelector('fieldset[disabled]');
    expect(fieldset).toBeInTheDocument();
  });
});

describe('EdgeApplicationFormShell — mini-notify form FUNCTIONAL', () => {
  it('renders separate notify form (the only active action pre-launch)', () => {
    const { container } = render(<EdgeApplicationFormShell {...baseProps} />, { wrapper });
    // Forms: main disabled form + mini notify form (2 forms total)
    const forms = container.querySelectorAll('form');
    expect(forms.length).toBe(2);
  });

  it('notify submit button is initially disabled (empty email)', () => {
    render(<EdgeApplicationFormShell {...baseProps} />, { wrapper });
    const notifyBtn = screen.getByRole('button', { name: /Notifier/i });
    expect(notifyBtn).toBeDisabled();
  });

  it('notify form shows success state after submit', async () => {
    const onSubmit = vi.fn();
    const { container } = render(
      <EdgeApplicationFormShell {...baseProps} onNotifySubmit={onSubmit} />,
      { wrapper }
    );
    // Fill the notify email (the input in the mini-form)
    const inputs = container.querySelectorAll('input[type="email"]');
    const notifyInput = inputs[inputs.length - 1] as HTMLInputElement; // last email input = notify
    fireEvent.change(notifyInput, { target: { value: 'jonas@test.com' } });

    const notifyBtn = screen.getByRole('button', { name: /Notifier/i });
    expect(notifyBtn).not.toBeDisabled();
    fireEvent.click(notifyBtn);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith('jonas@test.com');
    });
  });

  it('renders notify success message after submission completes', async () => {
    const { container } = render(<EdgeApplicationFormShell {...baseProps} />, { wrapper });
    const inputs = container.querySelectorAll('input[type="email"]');
    const notifyInput = inputs[inputs.length - 1] as HTMLInputElement;
    fireEvent.change(notifyInput, { target: { value: 'jonas@test.com' } });

    const notifyBtn = screen.getByRole('button', { name: /Notifier/i });
    fireEvent.click(notifyBtn);

    await waitFor(() => {
      const status = container.querySelector('[role="status"]');
      expect(status?.textContent).toContain('Inscrit');
    });
  });
});
