import {defaults} from 'jest-config';

/**
 * @type {import('jest').Config}
 */
export default {
  clearMocks: true,
  collectCoverage: true,
  extensionsToTreatAsEsm: [`.ts`, `.tsx`],
  moduleFileExtensions: [...defaults.moduleFileExtensions, `cts`],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.c?js$': `$1`,
  },
  restoreMocks: true,
  testMatch: [`**/src/**/*.test.{ts,tsx}`],
  transform: {
    '^.+\\.tsx?$': `@swc/jest`,
    '^.+\\.cts$': `@swc/jest`,
  },
};
