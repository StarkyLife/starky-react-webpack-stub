import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    video: false,
    screenshotsFolder: false,
    baseUrl: 'http://localhost:8080'
  },
});
