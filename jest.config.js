// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['jest-enzyme'],

  // The test environment that will be used for testing
  testEnvironment: 'enzyme',

  // Options that will be passed to the testEnvironment
  testEnvironmentOptions: { enzymeAdapter: 'react16' }
}
