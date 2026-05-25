import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import { useMaskReveal } from '@/hooks/useMaskReveal';

interface MaskRevealHeadingProps {
  as: 'h1' | 'h2' | 'h3';
  children: ReactNode;
  delay?: number;
  className?: string;
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
 */
export function MaskRevealHeading({ as, children, delay = 0, className }: MaskRevealHeadingProps) {
  const Tag = as;
  const { style } = useMaskReveal({ delay });

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
