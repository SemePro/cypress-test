
import {checkoutStepTwoPage  } from '../../page_objects/CheckoutStepTwoPage';

describe('Checkout Overview Page Tests', () => {
  
  beforeEach(() => {
    // Navigate to the checkout overview page before each test
    cy.visit('/checkout-step-two.html'); // Assuming this is the checkout overview page URL
  });

  it('should verify payment and shipping information', () => {
    checkoutStepTwoPage .verifyPaymentInfo('SauceCard #31337');
    checkoutStepTwoPage .verifyShippingInfo('Free Pony Express Delivery!');
  });

  it('should verify item total, tax, and total amount', () => {
    checkoutStepTwoPage .verifyItemTotal('Item total: $0');
    checkoutStepTwoPage .verifyTax('Tax: $0.00');
    checkoutStepTwoPage .verifyTotalAmount('Total: $0.00');
  });

  it('should allow user to finish checkout', () => {
    checkoutStepTwoPage .clickFinish();
    cy.url().should('include', '/checkout-complete.html'); // Assuming this is the URL after finishing
  });

  it('should allow user to cancel checkout', () => {
    checkoutStepTwoPage .clickCancel();
    cy.url().should('include', '/cart.html');
  });
});
