/// <reference types="cypress" />

describe('conduit spec', () => {
  let randomData = Math.random().toString(36).substring(2);
  const username = 'Auto' + randomData;
  const email = 'auto_email' + randomData + randomData + '@test.com';
  const password = 'password123';

  beforeEach(() => {
    cy.visit('https://angularjs.realworld.io/#/');
  });
  
  it('Mocking popular tags', () => {
    cy.mock_tags(email, password);
    cy.get('.tag-list').should('contain', 'Binoy')
      .and('contain', 'Cypress')
      .and('contain', 'implementations');
  });

  it('Mocking feed data', () => {
    cy.mock_articles(email, password);
    cy.wait('@articles').then(({ request, response }) => {
      expect(response?.body.articles[1].title).to.eq('Welcome BT fab');
    })
  });

});