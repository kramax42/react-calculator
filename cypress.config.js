const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    video: false,
    baseUrl: 'http://localhost:8090',
    setupNodeEvents(on) {
      const options = {
        webpackOptions: {
          resolve: {
            alias: {
              '@constants': path.resolve(__dirname, './src/constants'),
              '@utils': path.resolve(__dirname, './src/utils'),
              '@styles': path.resolve(__dirname, './src/styles'),
            },
          },
        },
        watchOptions: {},
      };
      on('file:preprocessor', webpack(options));
    },
  },
});
