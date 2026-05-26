import { Component, type ErrorInfo, type ReactNode } from 'react';
import { captureError } from '@/lib/monitoring/sentry';

interface RootErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface RootErrorBoundaryState {
  hasError: boolean;
}

/**
 * Top-level React error boundary.
 *
 * Captures errors via captureError() (which forwards to Sentry when DSN is set,
 * otherwise console.error). Renders a minimal DA-consistent fallback so the
 * app never shows a white screen even when Sentry is offline.
 *
 * Wrapped around the app router in __root.tsx so route-level errors surface
 * here rather than triggering React's default unhandled-error behavior.
 */
export class RootErrorBoundary extends Component<RootErrorBoundaryProps, RootErrorBoundaryState> {
  override state: RootErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): RootErrorBoundaryState {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, info: ErrorInfo): void {
    captureError(error, { componentStack: info.componentStack });
  }

  override render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    if (this.props.fallback !== undefined) {
      return this.props.fallback;
    }

    return (
      <section
        data-root-error-boundary
        aria-label="Application error"
        className="min-h-screen flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
      >
        <div className="flex flex-col items-center gap-md max-w-content mx-auto">
          <span
            aria-hidden="true"
            className="text-[clamp(6rem,16vw,12rem)] font-display font-bold text-gold/10 leading-none select-none tracking-tighter"
          >
            !
          </span>
          <h1 className="text-h2 text-primary font-display text-balance">
            Une erreur inattendue s&apos;est produite.
          </h1>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
            L&apos;équipe a été notifiée automatiquement. Rafraîchir la page rétablit généralement
            la situation. Si le problème persiste, contactez-nous à contact@jonasdiop.com.
          </p>
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.reload();
              }
            }}
            className="mt-md inline-flex items-center justify-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display bg-gold text-base hover:shadow-[0_0_24px_oklch(0.74_0.085_75/0.35)] transition-all duration-base"
          >
            Rafraîchir la page
          </button>
        </div>
      </section>
    );
  }
}
