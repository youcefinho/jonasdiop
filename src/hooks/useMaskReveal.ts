import { useEffect, useState } from 'react';
import { durations, easings } from '@/lib/motion/presets';

interface UseMaskRevealOptions {
  delay?: number;
  duration?: number;
}

interface MaskRevealStyle {
  style: {
    transform: string;
    transition: string;
    willChange: string;
  };
}

/**
 * Returns inline style props for a mask reveal element (inside overflow-hidden parent).
 * Starts translateY(100%), reveals to translateY(0) after delay.
 * Uses ease-out-expo from motion presets.
 * Respects prefers-reduced-motion: reveals immediately.
 */
export function useMaskReveal(options: UseMaskRevealOptions = {}): MaskRevealStyle {
  const { delay = 0, duration = durations.maskReveal } = options;
  const [revealed, setRevealed] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (revealed) return;
    const timer = setTimeout(() => setRevealed(true), delay);
    return () => clearTimeout(timer);
  }, [delay, revealed]);

  return {
    style: {
      transform: revealed ? 'translateY(0%)' : 'translateY(100%)',
      transition: `transform ${duration}ms ${easings.outExpo}`,
      willChange: 'transform'
    }
  };
}
