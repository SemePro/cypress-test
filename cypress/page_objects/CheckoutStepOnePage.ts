
class CheckoutStepOnePage {
    // Static Locators
    static firstNameInput = 'input[data-test="firstName"]';
    static lastNameInput = 'input[data-test="lastName"]';
    static postalCodeInput = 'input[data-test="postalCode"]';
    static continueButton = 'input[data-test="continue"]';
    static cancelButton = 'button[data-test="cancel"]';
    static errorMessageContainer = '.error-message-container';
  
    // Methods
  
    static enterFirstName(firstName: string) {
      cy.get(CheckoutStepOnePage.firstNameInput).type(firstName);
    }
  
    static enterLastName(lastName: string) {
      cy.get(CheckoutStepOnePage.lastNameInput).type(lastName);
    }
  
    static enterPostalCode(postalCode: string) {
      cy.get(CheckoutStepOnePage.postalCodeInput).type(postalCode);
    }
  
    static clickContinue() {
      cy.get(CheckoutStepOnePage.continueButton).click();
    }
  
    static clickCancel() {
      cy.get(CheckoutStepOnePage.cancelButton).click();
    }
  
    static getErrorMessage() {
      return cy.get(CheckoutStepOnePage.errorMessageContainer);
    }
  
    static fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
      this.enterFirstName(firstName);
      this.enterLastName(lastName);
      this.enterPostalCode(postalCode);
      this.clickContinue();
    }
  }
  
  export const checkoutStepOnePage = CheckoutStepOnePage;
  