/// <reference types="cypress" />
import {When, Then} from "cypress-cucumber-preprocessor/steps"
import {getGreeting} from '../../support/app.po';

When(/^I add (.*) and (.*)$/, (email, password) => {
  cy.visit('/')
  // Custom command example, see `../support/commands.ts` file
  cy.login(email, password);
});
Then(/^I verify that the greeting equals the (.*)$/, (greeting) => {
  // Function helper example, see `../support/app.po.ts` file
  getGreeting().contains(greeting);
});
