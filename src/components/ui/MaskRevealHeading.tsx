import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import { useMaskReveal } from '@/hooks/useMaskReveal';

interface MaskRevealHeadingProps {
  as: 'h1' | 'h2' | 'h3';
  children: ReactNode;
  delay?: number;
  className?: string;
  /** When 'lcp', render heading without mask animation so it paints
   * immediately and is eligible as the Largest Contentful Paint element.
   * Use for above-the-fold hero headings — animation reveal can defer LCP
   * by 800-1500ms on mobile networks (Lighthouse render delay catches it). */
  priority?: 'default' | 'lcp';
}

const headingSizeClasses: Record<'h1' | 'h2' | 'h3', string> = {
  h1: 'text-hero',
  h2: 'text-h2',
  h3: 'text-h3'
};

/**
 * Heading with vertical mask reveal animation.
 * Text translateY 100%→0 inside overflow:hidden wrapper.
 * Used for hero H1, section H2, signature moments.
 *
 * priority='lcp' bypasses the mask reveal entirely — required for the
 * above-the-fold H1 to be eligible as Largest Contentful Paint.
 */
export function MaskRevealHeading({
  as,
  children,
  delay = 0,
  className,
  priority = 'default'
}: MaskRevealHeadingProps) {
  const Tag = as;
  const { style } = useMaskReveal({ delay });

  if (priority === 'lcp') {
    return (
      <Tag
        className={clsx(
          headingSizeClasses[as],
          'text-primary text-balance font-display',
          className
        )}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={clsx(headingSizeClasses[as], 'text-primary text-balance font-display', className)}
    >
      <span data-mask-wrapper className="block overflow-hidden">
        <span style={style} className="block">
          {children}
        </span>
      </span>
    </Tag>
  );
}
