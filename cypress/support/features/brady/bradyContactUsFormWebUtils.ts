/// <reference types="cypress" />

import { shuffleArray } from '../../../../utils/utils';
import { bradyContactUsInfo } from '../../user_credentials';
import { constants } from './bradyContactUsConstants';
import { AreaOfInterest } from './types';

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

  selectCheckboxAreaOfInterest: () => {
    selectors.getAreaOfInterestCheckBox().then(($checkboxes) => {
      const randomIndex = Math.floor(Math.random() * $checkboxes.length);
      cy.wrap($checkboxes[randomIndex]).check();
    });
  },

  SSselectMultipleCheckboxesAreaOfInterest: (count: number) => {
    if (count < 1 || count > 5) {
      throw new Error('Please specify a number of checkboxes between 1 and 5.');
    }
    selectors.getAreaOfInterestCheckBox().then(($checkboxes) => {
      const totalCheckboxes = $checkboxes.length;
      const checkboxesToCheckCount = Math.min(count, totalCheckboxes);
      const shuffledCheckboxes = shuffleArray($checkboxes.toArray());
      const checkboxesToCheck = shuffledCheckboxes.slice(
        0,
        checkboxesToCheckCount
      );
      checkboxesToCheck.forEach((checkbox) => {
        cy.wrap(checkbox).check();
      });
    });
  },

  SSSSselectMultipleCheckboxesAreaOfInterest: (areas: AreaOfInterest) => {
    cy.contains('label', areas)
      .find('input[type="checkbox"]')
      .check({ force: true });
  },

  selectMultipleCheckboxesAreaOfInterest: (count: number) => {
    if (count < 1 || count > 5) {
      throw new Error('Please specify a number of checkboxes between 1 and 5.');
    }
    selectors.getAreaOfInterestCheckBox().then(($checkboxes) => {
      const totalCheckboxes = $checkboxes.length;
      const allAreas = Object.values(AreaOfInterest);
      const shuffledAreas = shuffleArray(allAreas);

      let selectedCount = 0;
      $checkboxes.each((index, el) => {
        const area = shuffledAreas[selectedCount];
        if (area) {
          const checkbox = el as HTMLInputElement;
          if (checkbox.value === area) {
            cy.wrap(checkbox).check();
            selectedCount++;
          }
          if (selectedCount >= count) {
            return false;
          }
        }
      });
    });
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
};
