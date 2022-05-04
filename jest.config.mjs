/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "^@scripts/(.*)$": "<rootDir>/src/scripts/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@images/(.*)$": "<rootDir>/src/images/$1",
  },

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // A map from regular expressions to paths to transformers
  transform: {
    "\\.s?css$": "<rootDir>/fileMock.js",
    "\\.svg$": "<rootDir>/fileMock.js",
  },
};
