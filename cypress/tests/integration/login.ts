// cypress/integration/login.ts
import { loginPage } from '../../page_objects/LoginPage';

describe('SauceDemo Login Tests with POM', () => {

  beforeEach(() => {
    // Visit the SauceDemo login page before each test
    loginPage.visit();
  });

  it('should successfully log in with valid credentials', () => {
    // Use the loginPage methods to perform actions
    loginPage.login('standard_user', 'secret_sauce');

    // Verify that the login was successful by checking the URL
    cy.url().should('include', '/inventory.html');
  });

  it('should display an error for a locked out user', () => {
    // Attempt to log in with a locked out user
    loginPage.login('locked_out_user', 'secret_sauce');

    // Verify that the error message is displayed
    loginPage.getErrorMessage().should('contain.text', 'Sorry, this user has been locked out.');
  });

  it('should display an error for an incorrect username', () => {
    // Attempt to log in with an invalid username
    loginPage.login('invalid_user', 'secret_sauce');

    // Verify that the error message is displayed
    loginPage.getErrorMessage().should('contain.text', 'Username and password do not match any user in this service');
  });

  it('should display an error for an incorrect password', () => {
    // Attempt to log in with a valid username and wrong password
    loginPage.login('standard_user', 'wrong_password');

    // Verify that the error message is displayed
    loginPage.getErrorMessage().should('contain.text', 'Username and password do not match any user in this service');
  });
});
