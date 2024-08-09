const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "1gtaxk",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
