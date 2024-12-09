export default {
  moduleNameMapper: {
    '^\\.\\/\\.internal\\/(.*)$': '<rootDir>/src/__mocks__/$1',
  },
  transform: {}, // Disable transformations since ES modules are native
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: 'coverage', // Directory where coverage reports will be saved
  coverageReporters: ['lcov', 'text'], // Generate lcov and text reports
  testEnvironment: 'node', // Explicitly set the test environment to Node.js
};
