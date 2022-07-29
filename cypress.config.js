const { defineConfig } = require("cypress");

module.exports = defineConfig({
  execTimeout: 60000,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 600000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const cucumber = require('cypress-cucumber-preprocessor').default
      const browserify = require('@cypress/browserify-preprocessor');
      const options = {
        ...browserify.defaultOptions
      };
      on('file:preprocessor', cucumber(options));
    },
    baseUrl: 'https://onboardingreg-cert.pfcti.com',
    chromeWebSecurity: false,
    specPattern: 'cypress/integration/*.{js,jsx,ts,tsx,feature}' ,
    viewportHeight: 926,
    viewportWidth: 428
  },
});
