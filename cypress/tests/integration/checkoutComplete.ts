

import { checkoutCompletePage } from '../../page_objects/CheckoutCompletePage';

describe('Checkout Complete Page Tests', () => {
  
  beforeEach(() => {
    // Navigate to the checkout complete page before each test
    cy.visit('/checkout-complete.html'); // Assuming this is the URL for the checkout complete page
  });

  it('should verify order completion messages and images', () => {
    checkoutCompletePage.verifyOrderCompletion();
  });

  it('should navigate back to home page when clicking "Back Home"', () => {
    checkoutCompletePage.clickBackHome();
    cy.url().should('include', '/inventory.html'); // Assuming this is the product page URL
  });
});
