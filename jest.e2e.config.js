process.env.JEST_PLAYWRIGHT_CONFIG = './jest.playwright.cjs';

export default {
  preset: 'jest-playwright-preset',
  collectCoverage: false,
  testMatch: ['**/e2e/*.js'],
  testTimeout: 50000,
  transform: {
    '.js': 'jest-esm-transformer',
  },
};
