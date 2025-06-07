const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1480,
  videoUploadOnPasses: true,
  //retries: 2,
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: "https://www.amazon.com",
  },
});
