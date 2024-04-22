import { bradyContactUsInfo } from '../../user_credentials';
import { constants } from './bradyContactUsConstants';
import { AreaOfInterest, HowDidYouHearUs } from './types';

const { defaultCopy } = constants;

// selectors strategy

export const selectors = {
  getName: () => cy.get(defaultCopy.name),
  getEmail: () => cy.get(defaultCopy.email),
  getCompanyName: () => cy.get(defaultCopy.companyName),
  getMessage: () => cy.get(defaultCopy.message),
  getHowDidYouHearAboutUs: () => cy.get(defaultCopy.howHearAboutDropdown),
  getContactUs: () => cy.contains(defaultCopy.contactUsPage),
  getAreaOfInterestCheckBox: () => cy.get(defaultCopy.areaOfInterestCheckBox),
  getAgreeTandCs: () => cy.get(defaultCopy.agreeTandCs),
  getSubmitForm: () => cy.get(defaultCopy.submitForm),
};

// Assertion

export const assert = {
  NameInputShown: () => selectors.getName().should('be.visible'),
  EmailInputShown: () => selectors.getEmail().should('be.visible'),
  CompanyNameShown: () => selectors.getCompanyName().should('be.visible'),
  AgreeTandCsShown: () => selectors.getAgreeTandCs().should('be.visible'),
  SubmitFormShown: () => selectors.getSubmitForm().should('be.visible'),
};

// Actions

export const action = {
  goToContactUsPage: () => {
    selectors.getContactUs().click();
  },

  typeName: () => {
    selectors.getName().type(bradyContactUsInfo.NAME);
  },

  typeEmail: () => {
    selectors.getEmail().type(bradyContactUsInfo.EMAIL);
  },
  typeCompanyName: () => {
    selectors.getCompanyName().type(bradyContactUsInfo.COMPANY_NAME);
  },
  typeMessage: () => {
    selectors.getMessage().type(bradyContactUsInfo.MESSAGE);
  },

  selectFromHowDidYouHearAboutUs: () => {
    selectors.getHowDidYouHearAboutUs().as('selectDropdown');
    cy.get('@selectDropdown').then(($value) => {
      const options = $value.find('option:not([value=""])');
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomOption = options[randomIndex].innerText.trim();

      cy.get('@selectDropdown').select(randomOption);
    });
  },

  selectCheckboxesAreaOfInterest: (areas: AreaOfInterest) => {
    cy.contains('label', areas)
      .find('input[type="checkbox"]')
      .check({ force: true });
  },

  checkAgreeTandCs: () => {
    selectors.getAgreeTandCs().check();
  },

  verifyWithCaptcha: () => {
    cy.get('iframe[name="a-8t4ck5v4x93y"]').then(($iframe) => {
      const iframe = $iframe.contents().find('body');
      cy.wrap(iframe).find('input[type="checkbox"]').should('be.visible');
      cy.wrap(iframe).find('input[type="checkbox"]').check();
    });
  },

  acceptTheCookies: () => {
    cy.get('#declineButton').click();
    cy.wait(2000);
  },

};
