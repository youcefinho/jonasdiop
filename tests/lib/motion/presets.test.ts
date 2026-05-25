import { describe, expect, it } from 'vitest';
import { durations, easings, heroEntranceTimings } from '@/lib/motion/presets';

describe('motion presets', () => {
  it('exposes ease-out-expo cubic-bezier string', () => {
    expect(easings.outExpo).toBe('cubic-bezier(0.16, 1, 0.3, 1)');
  });

  it('exposes ease-out-cubic cubic-bezier string', () => {
    expect(easings.outCubic).toBe('cubic-bezier(0.33, 1, 0.68, 1)');
  });

  it('exposes duration values in ms', () => {
    expect(durations.fast).toBe(180);
    expect(durations.base).toBe(280);
    expect(durations.slow).toBe(520);
    expect(durations.maskReveal).toBe(800);
    expect(durations.countUp).toBe(1800);
  });

  it('exposes hero entrance timing sequence', () => {
    expect(heroEntranceTimings.eyebrow).toBe(200);
    expect(heroEntranceTimings.h1MaskReveal).toBe(400);
    expect(heroEntranceTimings.sub).toBe(900);
    expect(heroEntranceTimings.ctaPrimary).toBe(1100);
    expect(heroEntranceTimings.ctaSecondary).toBe(1200);
    expect(heroEntranceTimings.scrollCue).toBe(1400);
  });
});
