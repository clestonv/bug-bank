const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportWidth: 412,
  // viewportHeight: 915,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
