/** @type {import('jest').Config} */
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx}',
    '!./src/**/*.stories.{js,jsx}',
    '!src/**/index.js'
  ],
  coverageThreshold: {
    global: {
      lines: 90
    }
  },
  detectOpenHandles: true,
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/test/setup-tests.js'
  ],
  verbose: true
};
