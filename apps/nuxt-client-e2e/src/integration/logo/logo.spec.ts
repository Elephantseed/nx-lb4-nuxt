/// <reference types="cypress" />
import {When, Then} from 'cypress-cucumber-preprocessor/steps'
// https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
const getIframeDocument = () =>
  cy.get("#storybook-preview-iframe").its("0.contentDocument").should("exist");

const getIframeBody = () =>
  getIframeDocument().its("body").should("not.be.undefined").then(cy.wrap);

When(/^I visit the component (.*) on storybook$/, (component) => {
  cy.visit(`http://localhost:3003/?path=/story/${component}--default`)
});
Then(/^I verify the component exists with id (.*)$/, (id) => {
  getIframeBody().get(id).should('exist');
});

