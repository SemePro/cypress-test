// cypress/page_objects/LoginPage.ts

class LoginPage {
    // Static Locators
    static usernameInput = 'input[data-test="username"]';
    static passwordInput = 'input[data-test="password"]';
    static loginButton = 'input[data-test="login-button"]';
    static errorMessageContainer = '.error-message-container';
  
    // Methods
    static visit() {
      cy.visit('/');
    }
  
    static enterUsername(username: string) {
      cy.get(LoginPage.usernameInput).type(username);
    }
  
    static enterPassword(password: string) {
      cy.get(LoginPage.passwordInput).type(password);
    }
  
    static clickLogin() {
      cy.get(LoginPage.loginButton).click();
    }
  
    static getErrorMessage() {
      return cy.get(LoginPage.errorMessageContainer);
    }
  
    static login(username: string, password: string) {
      this.enterUsername(username);
      this.enterPassword(password);
      this.clickLogin();
    }
  }
  
  export const loginPage = LoginPage;
  