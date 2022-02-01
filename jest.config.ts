/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

// import { Config } from "@jest/types";

// Sync object
const config = {
  // The root directory that Jest should scan for tests and modules within
  rootDir: "./",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
};

export default config;
