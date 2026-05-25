import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';
// vitest-axe/matchers.d.ts uses `export type *` (incompatible with Vitest 4).
// Import the dist JS directly at runtime for the actual matcher value.
import * as axeMatchers from 'vitest-axe/dist/matchers.js';

// biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
expect.extend(axeMatchers as any);

afterEach(() => {
  cleanup();
});
