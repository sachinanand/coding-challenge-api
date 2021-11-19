// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  setupFiles: ['./test/setup.ts'],
  testEnvironment: 'node',
  verbose: true,
}
