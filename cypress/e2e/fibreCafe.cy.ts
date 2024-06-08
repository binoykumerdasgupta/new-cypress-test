import { homepage } from '../support/pages/HomePage';

describe('Contact us form feature:', () => {
  beforeEach(() => {
    homepage.visitFibreCafeHomePage();
    cy.get('[data-cky-tag="accept-button"]').should('exist');
    cy.get('[data-cky-tag="accept-button"]').click();
    cy.title().should('include', 'The Fibre Cafe');
  });

  const links = [
    {
      name: 'Home',
      url: 'https://www.thefibrecafe.net/',
      title: 'The Fibre Cafe',
    },
    {
      name: 'The Gateway',
      url: 'https://www.thefibrecafe.net/the-gateway/',
      title: 'The Gateway - The Fibre Cafe',
    },
    {
      name: 'About',
      url: 'https://www.thefibrecafe.net/about/',
      title: 'About - The Fibre Cafe',
    },
    {
      name: 'News',
      url: 'https://www.thefibrecafe.net/news/',
      title: 'News - The Fibre Cafe',
    },
    {
      name: 'Contact',
      url: 'https://www.thefibrecafe.net/contact/',
      title: 'Contact - The Fibre Cafe',
    },
  ];

  it('User should be able to verify all links name', () => {
    links.forEach((link) => {
      cy.checkLinkExists(link.name);
    });
  });

});
