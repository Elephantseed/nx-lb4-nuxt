/// <reference types="cypress" />
import {When, Then} from "cypress-cucumber-preprocessor/steps"

When(/^I visit the (.*) on storybook$/, (component) => {
  cy.visit(`http://localhost:3003/?path=/story/${component}--nuxt-website`)
});
Then(/^I verify the component exists$/, () => {
  cy.get('a').should('exist');
});

