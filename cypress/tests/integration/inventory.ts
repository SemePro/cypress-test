
import { loginPage } from '../../page_objects/LoginPage';
import { inventoryPage } from '../../page_objects/InventoryPage';


describe('SauceDemo Inventory Tests with POM', () => {

  beforeEach(() => {
    // Log in before each test
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');
  });

  it('should display the product list on the inventory page', () => {
    // Verify that a specific product is in the list
    inventoryPage.verifyProductInList('4', 'Sauce Labs Backpack');
  });

  it('should add a product to the cart', () => {
    // Add a product to the cart
    inventoryPage.addItemToCart('4');

    // Verify that the cart icon shows the item count
    inventoryPage.goToCart();
    cy.get('.cart_item').should('have.length', 1);
  });

  it('should log out successfully', () => {
    // Log out from the inventory page
    inventoryPage.logout();

    // Verify that the user is redirected to the login page
    cy.url().should('include', '/');
    cy.get(loginPage.usernameInput).should('be.visible');
  });
});
