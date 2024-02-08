import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    specPattern: "cypress/e2e/**/*.ts"
  },
  env: {
    homePage: "https://automationteststore.com",
    conduitHomePage: "https://angularjs.realworld.io/#/",
    contactUs: "https://automationteststore.com/index.php?rt=content/contact",
    loginPage: "https://automationteststore.com/index.php?rt=account/login",
  }
});
