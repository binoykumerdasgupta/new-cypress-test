/**
 * A list of Firebase test users for usage in consumer-web e2e tests
 * TODO: Store passwords elsewhere e.g Lastpass
 */
 export type TestUser = {
    USER_NAME: string
    PASSWORD: string
};
export const testUser: TestUser = {
    USER_NAME: 'binoy90', 
    PASSWORD: 'Password123!',
};