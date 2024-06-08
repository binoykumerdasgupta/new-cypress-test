/// <reference types="Cypress" />
import { homepage } from '../support/pages/HomePage';
import * as Unify from '../support/features/unify/unifyCommandsWebUtils';
import { AreaOfInterest } from '../support/features/unify/types';

describe('Contact Us form feature', () => {
  // beforeEach(() => {
  //   homepage.visitBlazedemo();
  //   cy.get('h1').should('contain', 'Welcome to the Simple Travel Agency!')
  // });

  it('user should be able to visit Home', () => {
    homepage.visitBlazedemo();
    cy.get('h1').should('contain', 'Welcome to the Simple Travel Agency!')
    cy.get('input[type="submit"]').should('exist')

    // cy.contains('Register').click();
    // cy.get('#name').type('Binoy Tech')
    // cy.get('#company').type("Binoy Tech Ltd")
    // cy.get('#email').type('binoytech@gmail.com')
    // cy.get('#password').type('password123')
    // cy.get('#password-confirm').type('password123')
    // cy.get('button[type="submit"]').click()

    // cy.get('#email')
    // cy.get('#password')
    // cy.get('.btn-primary')


  });

});