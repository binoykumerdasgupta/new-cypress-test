import { constants } from './contactUsConstants';
import { HowDidYouHearAboutUs } from './types';
import { contactUsInfo } from './contactusFormData';

const { defaultCopy } = constants;

export const selectors = {
  getName: () => cy.get(defaultCopy.name),
  getEmail: () => cy.get(defaultCopy.email),
  getTelephone: () => cy.get(defaultCopy.telephone),
  getCompnay: () => cy.get(defaultCopy.company),
  getJobTitle: () => cy.get(defaultCopy.jobTitle),
  getMessage: () => cy.get(defaultCopy.message),
  getBackToMeButton: () => cy.get(defaultCopy.getBackToMe),
};

export const actions = {
  typeName: () => {
    selectors.getName().type(contactUsInfo.NAME);
  },

  typeEmail: () => {
    selectors.getEmail().type(contactUsInfo.EMAIL);
  },

  typeTelephone: () => {
    selectors.getTelephone().type(contactUsInfo.TELEPHONE);
  },

  typeCompnay: () => {
    selectors.getCompnay().type(contactUsInfo.COMPNAY);
  },

  typeJobTitle: () => {
    selectors.getJobTitle().type(contactUsInfo.JOB_TITLE);
  },

  selectHowDidYouHearAboutUsOption: (option: HowDidYouHearAboutUs) => {
    cy.get('[data-fieldname="acquisition"]').click();
    cy.get(`select[name="acquisition"]`).select(option);
  },

  typeMessage: () => {
    selectors.getMessage().type(contactUsInfo.MESSAGE)
  },
};

export const assertion = {
  titleShown: () => {
    cy.title().should('include', 'Financial Trading Technology | Caplin Systems | Contact Us')
  },

  contactUsFormHeaderDescriptionShown: () => {
    cy.get('#homepage_contact_form').should('exist').and('contain', 'Please enter your details and a message below.')
  },

  getBackToMeButtonShown: () => {
    selectors.getBackToMeButton().should('be.visible').and('contain', 'GET BACK TO ME');
  },

};
