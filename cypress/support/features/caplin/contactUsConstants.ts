export type Constants = {
  defaultCopy: {
    name: string;
    email: string;
    telephone: string;
    company: string;
    jobTitle: string;
    message: string;
    getBackToMe: string;
  };
};

export const constants: Constants = {
  defaultCopy: {
    name: '[data-fieldname="name"]',
    email: '[data-fieldname="email"]',
    telephone: '[data-fieldname="telephone"]',
    company: '[data-fieldname="company"]',
    jobTitle: '[data-fieldname="job_title"]',
    message: '[data-fieldname="message"]',
    getBackToMe: 'button[type="submit"]',
  },
};
