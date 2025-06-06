const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  videoUploadOnPasses: true,
  //retries: 2,
  defaultCommandTimeout: 8000,
  e2e: {
    baseUrl: "https://www.amazon.com",
  },
});
