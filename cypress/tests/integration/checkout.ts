
import { checkoutStepOnePage } from '../../page_objects/CheckoutStepOnePage';

describe('Checkout Page Tests', () => {
  
  beforeEach(() => {
    // Navigate to the checkout page before each test
    cy.visit('/checkout-step-one.html'); // Assuming this is the checkout page URL
  });

  it('should successfully fill out the checkout form and continue', () => {
    checkoutStepOnePage.fillCheckoutForm('John', 'Doe', '12345');
    cy.url().should('include', '/checkout-step-two.html');
  });

  it('should show an error message when form is submitted with missing fields', () => {
    checkoutStepOnePage.clickContinue();
    checkoutStepOnePage.getErrorMessage().should('be.visible');
  });

  it('should allow user to cancel the checkout process', () => {
    checkoutStepOnePage.clickCancel();
    cy.url().should('include', '/cart.html');
  });
});
