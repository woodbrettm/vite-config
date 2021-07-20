export default {
  collectCoverage: false,
  testMatch: ['**/*.test.js'],
  transform: {
    '.js': 'jest-esm-transformer',
  },
};
