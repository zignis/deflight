const NO_COVERAGE = process.env.NO_COVERAGE === 'false';

// noinspection SpellCheckingInspection
module.exports = {
  rootDir: __dirname,
  roots: ['<rootDir>'],
  cache: true,
  verbose: true,
  cacheDirectory: '<rootDir>/tmp/jest',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/__tests__/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/tmp/', '/coverage/'],
  watchPathIgnorePatterns: ['/node_modules/'],
  automock: false,
  unmockedModulePathPatterns: ['/node_modules/'],
  collectCoverage: NO_COVERAGE === false,
  collectCoverageFrom: NO_COVERAGE ? [] : ['**/*.{ts}', '!**/*.d.ts', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['/node_modules/', '\\.json$', '/__tests__/'],
  transform: {
    "^.+\\.(t|j)s$": "@swc/jest",
  },
};
