const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1280,
  chromeWebSecurity: false,
  projectId: 'hvviu4',

  // To remove when Test Replay is available in cypress.io
  video: true,

  e2e: {
    baseUrl: 'http://127.0.0.1:3000',
    excludeSpecPattern: ['*~'],
    specPattern: 'cypress/tests/**/*.{js,jsx,ts,tsx}',
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
