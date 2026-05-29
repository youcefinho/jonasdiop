import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';
import { type KeyboardEvent, type ReactNode, useEffect, useRef, useState } from 'react';
import type { BilingualLax } from '@/lib/i18n/types';
import { useT } from '@/lib/i18n/useT';

export interface DropdownItem {
  readonly to: string;
  readonly label: BilingualLax<string>;
  readonly description?: BilingualLax<string>;
}

interface NavbarDropdownProps {
  readonly label: BilingualLax<string>;
  readonly items: readonly DropdownItem[];
  /** Optional bottom "View all" link displayed under the items. */
  readonly seeAll?: {
    readonly to: string;
    readonly label: BilingualLax<string>;
  };
  /** Optional left node (e.g. an intent group eyebrow displayed at top of panel). */
  readonly eyebrow?: BilingualLax<string>;
}

/**
 * NavbarDropdown — desktop dropdown menu trigger + panel.
 *
 * Trigger : button with label + chevron, opens on hover (mouse) or click
 * (touch/keyboard). Panel appears below trigger, max-w fixed, dark themed.
 *
 * A11y :
 *   - Button aria-expanded + aria-haspopup
 *   - Panel role="menu" + items role="menuitem"
 *   - Escape closes + restores focus to trigger
 *   - Arrow Down opens + focuses first item
 *   - Outside click closes
 *
 * Used in Navbar.tsx for Programmes / Événements / Ressources parents
 * (brief v3 sitemap 8 onglets with sub-items per parent).
 */
export function NavbarDropdown({ label, items, seeAll, eyebrow }: NavbarDropdownProps) {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  // Close on outside click + Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current || !triggerRef.current) return;
      if (
        !panelRef.current.contains(e.target as Node) &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const cancelClose = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => setOpen(false), 120);
  };

  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(true);
      // Focus first item after panel mounts
      window.setTimeout(() => {
        const first = panelRef.current?.querySelector<HTMLAnchorElement>('a[role="menuitem"]');
        first?.focus();
      }, 0);
    }
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Hover area extension wrapper for dropdown — the actual interactive element is the inner <button> (click + keyboard handled there). Mouse handlers here only enhance the desktop hover affordance; touch and keyboard users interact via the button.
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onTriggerKeyDown}
        className={clsx(
          'inline-flex items-center gap-1 text-eyebrow uppercase tracking-wider font-display',
          'text-silver hover:text-primary transition-colors',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-base rounded-sm'
        )}
      >
        <span>{t(label)}</span>
        <ChevronDown
          aria-hidden="true"
          className={clsx(
            'h-3.5 w-3.5 max-w-none shrink-0 transition-transform duration-base opacity-70',
            open && 'rotate-180'
          )}
        />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="menu"
          aria-label={t(label)}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className={clsx(
            'absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50',
            'min-w-[280px] max-w-[360px] p-sm rounded-lg',
            'bg-elevated/95 backdrop-blur-md border border-silver/15 shadow-haptic-card',
            'flex flex-col gap-1'
          )}
        >
          {eyebrow && (
            <span className="text-eyebrow uppercase tracking-widest text-gold opacity-80 font-display text-[10px] px-sm pt-1 pb-2">
              {t(eyebrow)}
            </span>
          )}
          {items.map((item, idx) => (
            <Link
              key={item.to}
              to={item.to}
              role="menuitem"
              tabIndex={idx === 0 ? 0 : -1}
              onClick={() => setOpen(false)}
              className={clsx(
                'block px-sm py-2 rounded-sm',
                'text-body text-silver hover:text-primary hover:bg-base/40',
                'transition-colors duration-base',
                'focus:outline-none focus-visible:bg-base/60 focus-visible:text-primary'
              )}
            >
              <span className="block text-body font-display font-medium">{t(item.label)}</span>
              {item.description && (
                <span className="block text-sm text-silver/70 mt-0.5 text-pretty">
                  {t(item.description)}
                </span>
              )}
            </Link>
          ))}
          {seeAll && (
            <>
              <span aria-hidden="true" className="block h-px bg-silver/15 my-1" />
              <Link
                to={seeAll.to}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={clsx(
                  'block px-sm py-2 rounded-sm',
                  'text-eyebrow uppercase tracking-widest text-gold/80 hover:text-gold font-display text-xs',
                  'transition-colors duration-base',
                  'focus:outline-none focus-visible:text-gold'
                )}
              >
                {t(seeAll.label)} →
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/** Mobile-friendly accordion variant. Trigger toggles expanded state.
 *  Used in MobileNavDrawer when a top-level item has sub-items per brief v3. */
interface MobileNavAccordionProps {
  readonly label: BilingualLax<string>;
  readonly items: readonly DropdownItem[];
  readonly seeAll?: {
    readonly to: string;
    readonly label: BilingualLax<string>;
  };
  readonly onItemClick: () => void;
  readonly className?: string;
  readonly children?: ReactNode;
}

export function MobileNavAccordion({
  label,
  items,
  seeAll,
  onItemClick,
  className
}: MobileNavAccordionProps) {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  return (
    <div className={clsx('flex flex-col', className)}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors w-full text-left"
      >
        <span>{t(label)}</span>
        <ChevronDown
          aria-hidden="true"
          className={clsx(
            'h-4 w-4 max-w-none shrink-0 transition-transform duration-base opacity-70',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <ul className="flex flex-col gap-1 pl-md pt-2 pb-sm border-b border-silver/10">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={onItemClick}
                className="block py-1.5 text-body text-silver/85 hover:text-primary transition-colors"
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
          {seeAll && (
            <li>
              <Link
                to={seeAll.to}
                onClick={onItemClick}
                className="block py-1.5 text-eyebrow uppercase tracking-widest text-gold/80 hover:text-gold font-display text-xs"
              >
                {t(seeAll.label)} →
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
