/// <reference types="Cypress" />
import { homepage } from '../support/pages/HomePage';

describe('Contact Us form feature', () => {
  beforeEach(() => {
    homepage.visitPactio();
  });

  it('test', () => {
    cy.title().should('include', 'Pactio - Elevated private equity');
    cy.get('.sub-header')
      .should('exist')
      .and(
        'contain',
        'Unlock private capital flows and empower your team with Pactio'
      );
  });

  it('user should be able to submit contact us form', () => {
    cy.contains('Find out more')
      .click()
      .then(() => {
        // needs to modify
        cy.get('.modal-background').should('exist');
        cy.get('#Your-name').type('binoy');
        cy.get('#Last-name').type('dasgupta');
        cy.get('#your-company').type('Hello Testing Ltd');
        cy.get('#email').type('testing@io.com');
        cy.get('#Phone').type('468268268');
        // cy.get('#How-did-you-hear-about-us')
        cy.get('#Why-do-you-want-to-try-Pactio').type('Private equity');
        cy.get('input[type="submit"]').should('exist');
      });
  });
});
