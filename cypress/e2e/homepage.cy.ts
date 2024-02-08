/// <reference types="cypress" />
import { homepage } from "../support/pages/HomePage";

describe('template spec', () => {
  beforeEach(() => {
    homepage.visitHomePage();
  });

  it('About us page', () => {
    // cy.get('.info_links_footer .dropdown').as('footer');
    // cy.get('@footer').should('exist');
    // // Here is the one way to handle it when there are some li's
    // cy.get('@footer').should('contain', 'About Us');
    // // cy.get('@footer').click({multiple:true})
    // // cy.get('#About Us', {timeout: 5000}).invoke('removeAttr', 'target').click( { force:true} ) 
    cy.footer_link('About Us', '.heading4', 'some description');
    // cy.get('.heading4').should('exist').contains('some description');
    cy.title().should('include', 'About Us');
    })

    it('Privacy policy page', () => {
      cy.footer_link('Privacy Policy', '.heading4', 'Privacy Policy');
      cy.title().should('include', 'Privacy Policy');
    });

  })