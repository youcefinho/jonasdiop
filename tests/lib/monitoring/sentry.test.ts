import { describe, expect, it, vi } from 'vitest';
import { clientConfig } from '@/config/clientConfig';
import { captureError, initSentry } from '@/lib/monitoring/sentry';

describe('Sentry monitoring — no-op when DSN empty', () => {
  it('clientConfig.sentry.dsn defaults to empty string', () => {
    expect(clientConfig.sentry.dsn).toBe('');
  });

  it('initSentry returns false when DSN empty', () => {
    expect(initSentry()).toBe(false);
  });

  it('captureError does not throw when DSN empty', () => {
    expect(() => captureError(new Error('test'), { route: '/test' })).not.toThrow();
  });

  it('captureError accepts any unknown payload type', () => {
    expect(() => captureError('string error')).not.toThrow();
    expect(() => captureError({ code: 'STUB' })).not.toThrow();
    expect(() => captureError(null)).not.toThrow();
  });

  it('captureError logs to console.error', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      captureError(new Error('boom'));
      expect(spy).toHaveBeenCalledOnce();
      const firstCall = spy.mock.calls[0];
      expect(firstCall?.[0]).toBeInstanceOf(Error);
    } finally {
      spy.mockRestore();
    }
  });
});
