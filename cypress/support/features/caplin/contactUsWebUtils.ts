import { constants } from './contactUsConstants';
import { HowDidYouHearAboutUs } from './types';
import { contactUsInfo } from './contactusFormData';

const { defaultCopy } = constants;

export const selectors = {
  getName: () => cy.get(defaultCopy.name),
  getNamePlaceholderValue: () => cy.get(defaultCopy.placeHolderName),
  getEmail: () => cy.get(defaultCopy.email),
  getTelephone: () => cy.get(defaultCopy.telephone),
  getCompnay: () => cy.get(defaultCopy.company),
  getJobTitle: () => cy.get(defaultCopy.jobTitle),
  getMessage: () => cy.get(defaultCopy.message),
  getBackToMeButton: () => cy.get(defaultCopy.getBackToMe),
  getContactForm: () => cy.get(defaultCopy.contactForm),
  getHowDidYouHearAboutUs: () => cy.get(defaultCopy.howDidYouHearAboutUs),
  getOptions: () => cy.get(defaultCopy.options),
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
    selectors.getHowDidYouHearAboutUs().click();
    selectors.getOptions().select(option);
  },

  typeMessage: () => {
    selectors.getMessage().type(contactUsInfo.MESSAGE);
  },
};

export const assertion = {

  assertPlaceholderNameValueShown: (placeholderText: string) => {
    selectors.getNamePlaceholderValue().then(($input) => {
      if ($input.attr('placeholder')) {
        expect($input.attr('placeholder')).to.include(placeholderText);
      } else {
        expect($input.val()).to.include(placeholderText);
      }
    });

  },

  titleShown: () => {
    cy.title().should(
      'include',
      'Financial Trading Technology | Caplin Systems | Contact Us'
    );
  },

  contactUsFormHeaderDescriptionShown: () => {
    selectors
      .getContactForm()
      .should('exist')
      .and('contain', 'Please enter your details and a message below.');
  },

  getBackToMeButtonShown: () => {
    selectors
      .getBackToMeButton()
      .should('be.visible')
      .and('contain', 'GET BACK TO ME');
  },
};
