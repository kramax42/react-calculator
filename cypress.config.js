/* eslint-disable import/no-extraneous-dependencies */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    video: false,
    baseUrl: 'http://localhost:8090',
  },
});
