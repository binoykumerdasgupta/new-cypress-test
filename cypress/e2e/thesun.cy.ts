/// <reference types="Cypress" />
import 'cypress-iframe';

describe('corelator feature', () => {
  it('Finding the corelator', () => {
    // cy.intercept('GET', '**gampad/ads?*').as('ads');

    cy.intercept('POST', '**/ads', (req) => {
      req.continue((res) => {
        cy.log(`Request Body: ${JSON.stringify(req.body)}`);
      });
    }).as('ads');


    cy.visit(
      'https://www.thesun.co.uk/sport/26213764/ten-hag-jamie-carragher-man-utd-sky-sports/'
    );

    cy.iframe('#sp_message_iframe_1015323')
      .find('button[title="Accept Cookies"]')
      .click();
  });
});
