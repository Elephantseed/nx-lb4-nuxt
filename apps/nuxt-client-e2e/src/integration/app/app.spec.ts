/// <reference types="cypress" />
import {When, Then} from "cypress-cucumber-preprocessor/steps"
import {getH1} from '../../support/app.po';

When(/^I fetch home page at (.*)$/, (url) => {
  cy.visit(url)
  // Custom command example, see `../support/commands.ts` file
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  // cy.login(email, password);
});
Then(/^I verify that it renders with correct text (.*) on h1$/, (h1Text) => {
  // Function helper example, see `../support/app.po.ts` file
  getH1().contains(h1Text);
});
