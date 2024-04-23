export type Constants = {
  defaultCopy: {
    name: string;
    placeHolderName: string;
    email: string;
    telephone: string;
    company: string;
    jobTitle: string;
    message: string;
    getBackToMe: string;
    contactForm: string;
    howDidYouHearAboutUs: string;
    options: string;
  };
};
export const constants: Constants = {
  defaultCopy: {
    name: '[data-fieldname="name"]',
    placeHolderName: '[data-fieldname="name"] input[name="name"]',
    email: '[data-fieldname="email"]',
    telephone: '[data-fieldname="telephone"]',
    company: '[data-fieldname="company"]',
    jobTitle: '[data-fieldname="job_title"]',
    message: '[data-fieldname="message"]',
    getBackToMe: 'button[type="submit"]',
    contactForm: '#homepage_contact_form',
    howDidYouHearAboutUs: '[data-fieldname="acquisition"]',
    options: `select[name="acquisition"]`,
  },
};
