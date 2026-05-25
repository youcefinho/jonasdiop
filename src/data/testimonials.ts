export interface TestimonialShell {
  readonly id: string;
  readonly centerElevated?: boolean;
}

/**
 * Initial 3 shells while waiting for real testimonials (H3 pending Jonas).
 * Center one elevated to anchor visual hierarchy.
 * Replace with real TestimonialReal[] when received from client.
 */
export const testimonialShells: readonly TestimonialShell[] = [
  { id: 'shell-1' },
  { id: 'shell-2', centerElevated: true },
  { id: 'shell-3' }
];
