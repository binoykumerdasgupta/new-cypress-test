export type Constants = {
    defaultCopy: {
        loginName: string;
        password: string;
        loginButton: string;
    };
};

export const constants: Constants = {
    defaultCopy: {
        loginName: '#loginFrm_loginname',
        password: '#loginFrm_password',
        loginButton: 'button[title="Login"]',
    },
};