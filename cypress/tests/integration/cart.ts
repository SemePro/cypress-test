import { cartPage } from '../../page_objects/CartPage';
import { loginPage } from '../../page_objects/LoginPage';

describe('Cart Page Tests', () => {

  beforeEach(() => {
    // Log in before each test
    loginPage.visit(); // Navigate to the login page
    loginPage.login('standard_user', 'secret_sauce'); // Log in with credentials

    // Navigate to the cart page after login
    cy.visit('/cart.html'); // Assuming this is the cart page URL after adding items
  });

  it('should verify cart contains items', () => {
    cartPage.verifyCartContainsItems();
  });

  it('should allow user to continue shopping', () => {
    cartPage.continueShopping();
    cy.url().should('include', '/inventory.html');
  });

  it('should allow user to checkout', () => {
    cartPage.checkout();
    cy.url().should('include', '/checkout-step-one.html');
  });

  it('should verify the quantity of items in the cart', () => {
    cartPage.verifyCartItemQuantity('QTY');
  });

  it('should verify the description of items in the cart', () => {
    cartPage.verifyCartItemDescription('Description');
  });
});
