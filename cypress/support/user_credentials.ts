/**
 * A list of Firebase test users for usage in consumer-web e2e tests
 * TODO: Store passwords elsewhere e.g Lastpass
 */
export type TestUser = {
    USER_NAME: string;
    PASSWORD: string;
};
export const testUser: TestUser = {
    USER_NAME: 'binoy90',
    PASSWORD: 'Password123!',
};

export type ConduitUserInfo = {
    USER_NAME: string;
    EMAIL: string;
    PASSWORD: string;
};

let randomData = Math.random().toString(36).substring(2);
const USER_NAME = "Auto" + randomData;
const EMAIL = "auto_email" + randomData + randomData + "@test.com";
const PASSWORD = 'password1234!';

export const userInfo: ConduitUserInfo = {
    USER_NAME: USER_NAME,
    EMAIL: EMAIL,
    PASSWORD: PASSWORD
};