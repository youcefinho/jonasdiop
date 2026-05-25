import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SocialIcon } from '@/components/ui/SocialIcon';

describe('SocialIcon', () => {
  it('renders facebook icon with aria-label', () => {
    render(<SocialIcon name="facebook" />);
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('Facebook').tagName).toBe('svg');
  });

  it('renders different SVG path per platform', () => {
    const { container, rerender } = render(<SocialIcon name="facebook" />);
    const fbPath = container.querySelector('path')?.getAttribute('d');
    rerender(<SocialIcon name="instagram" />);
    const igPath = container.querySelector('path')?.getAttribute('d');
    expect(fbPath).not.toBe(igPath);
    expect(fbPath).toBeTruthy();
    expect(igPath).toBeTruthy();
  });

  it('forwards className to svg', () => {
    render(<SocialIcon name="linkedin" className="custom-class h-5 w-5" />);
    const svg = screen.getByLabelText('LinkedIn');
    expect(svg.getAttribute('class')).toContain('custom-class');
  });

  it('supports all 6 platforms (facebook, instagram, linkedin, x, tiktok, youtube)', () => {
    const platforms = ['facebook', 'instagram', 'linkedin', 'x', 'tiktok', 'youtube'] as const;
    const canonicalLabels: Record<(typeof platforms)[number], string> = {
      facebook: 'Facebook',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      x: 'X (Twitter)',
      tiktok: 'TikTok',
      youtube: 'YouTube'
    };
    for (const p of platforms) {
      const { unmount } = render(<SocialIcon name={p} />);
      expect(screen.getByLabelText(canonicalLabels[p])).toBeInTheDocument();
      unmount();
    }
  });
});
