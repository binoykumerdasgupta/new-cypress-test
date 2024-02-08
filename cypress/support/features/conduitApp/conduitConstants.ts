export type Constants = {
    defaultCopy: {
        userName: string;
        email: string;
        password: string;
        signUpButton: string;
        signInButton: string;
    };
};

export const constants: Constants = {
    defaultCopy: {
        userName: 'input[placeholder="Username"]',
        email: 'input[placeholder="Email"]',
        password: 'input[placeholder="Password"]',
        signUpButton: 'button[type="submit"]',
        signInButton: 'button[type="submit"]',
    },
};