import { AreaOfInterest } from './types';
import { constants } from './unifyConstants';
import { ContactUsInfo } from './contactUsFormData';

const { defaultCopy } = constants;

// selectors strategy

export const selectors = {
  getAcceptCookie: () => cy.get(defaultCopy.acceptCookies),
  getOpenMenu: () => cy.get(defaultCopy.openMenu),
  getAboutUs: () => cy.get(defaultCopy.aboutUs),
  getContactUs: () => cy.contains(defaultCopy.contactUslink),
  getContactUsHeader: () => cy.get(defaultCopy.contactUsHeader),
  getFirstName: () => cy.get(defaultCopy.firstName),
  getLastName: () => cy.get(defaultCopy.lastName),
  getEmail: () => cy.get(defaultCopy.email),
  getPhone: () => cy.get(defaultCopy.phone),
  getCompany: () => cy.get(defaultCopy.company),
  getLiveIn: () => cy.get(defaultCopy.iLiveIn),
  getCountrySelectOption: () => cy.get(defaultCopy.countrySelectOption),
  getAreaOfInterest: () => cy.get(defaultCopy.areaOfInterest),
  getComment: () => cy.get(defaultCopy.comment),
  getCheckInfo: () => cy.get(defaultCopy.checkInfo),
  getLabelText: () => cy.get(defaultCopy.checkInfoLabelText),
};

// Actions

export const action = {
  clickAcceptTheCookies: () => {
    selectors.getAcceptCookie().click({ force: true });
  },

  clickOpenMenu: () => {
    selectors.getOpenMenu().click();
  },

  clickAboutUs: () => {
    selectors.getOpenMenu().click();
    cy.wait(2000);
  },

  clickContactUsLink: () => {
    selectors.getContactUs().click({ force: true });
  },

  typeBasicInfo: () => {
    selectors.getFirstName().type(ContactUsInfo.FIRSTNAME);
    selectors.getLastName().type(ContactUsInfo.LASTNAME);
    selectors.getEmail().type(ContactUsInfo.EMAIL);
    selectors.getPhone().type(ContactUsInfo.PHONE);
    selectors.getCompany().type(ContactUsInfo.COMPANY_NAME);
  },

  selectLiveIn: () => {
    selectors.getLiveIn().as('selectLiveIn');
    cy.get('@selectLiveIn').click();

    selectors.getCountrySelectOption().then(($options) => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      const randomOption = $options[randomIndex];
      cy.wrap(randomOption).click();

      const optionText = Cypress.$(randomOption).text().trim();
      cy.get('@selectLiveIn').should('contain', optionText);
    });
  },

  selectAreaOfInterestOption: (areas: AreaOfInterest) => {
    selectors.getAreaOfInterest().click();
    cy.contains(
      '#formContactUsAreaofInterestmktoSelectBoxItOptions li',
      areas
    ).click();
  },

  typeComment: () => {
    selectors.getComment().type('Something nice!!');
  },

  checkCheckboxAndVerifyLabel: () => {
    selectors.getCheckInfo().as('checkbox');
    cy.get('@checkbox').check({ force: true });
  },
};

// Assertion

export const assert = {
  ContactUsHeaderShown: () =>
    selectors.getContactUsHeader().should('be.visible'),

  VerifyLabelTextShown: () =>
    selectors.getLabelText().should('be.visible').and('contain',
      'Yes, I am interested in receiving WTW information on other topics'
    ),

};
