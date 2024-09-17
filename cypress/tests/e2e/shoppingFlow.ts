import { loginPage } from '../../page_objects/LoginPage';
import { inventoryPage } from '../../page_objects/InventoryPage';
import { cartPage } from '../../page_objects/CartPage';
import { checkoutStepOnePage } from '../../page_objects/CheckoutStepOnePage';
import { checkoutStepTwoPage } from '../../page_objects/CheckoutStepTwoPage';
import { checkoutCompletePage } from '../../page_objects/CheckoutCompletePage';

describe('E2E Shopping Flow', () => {
  beforeEach(() => {
    // Visiting the base URL from cypress.config.ts
    loginPage.visit();
  });

  it('should successfully complete the purchase flow', () => {
    // Log in
    loginPage.login('standard_user', 'secret_sauce');

    // Add items to cart
    inventoryPage.addItemToCart('4'); // Sample product ID
    inventoryPage.addItemToCart('1'); // Another sample product ID

    // Verify products added to cart
    inventoryPage.verifyProductInList('4', 'Sauce Labs Backpack');
    inventoryPage.verifyProductInList('1', 'Sauce Labs Onesie');

    // Go to Cart
    inventoryPage.goToCart();

    // Verify cart contains items
    cartPage.verifyCartContainsItems();

    // Proceed to checkout
    cartPage.checkout();

    // Fill in Checkout Step 1
    checkoutStepOnePage.enterFirstName('John');
    checkoutStepOnePage.enterLastName('Doe');
    checkoutStepOnePage.enterPostalCode('90210');
    checkoutStepOnePage.clickContinue();

    // Verify Checkout Step 2 - Order Overview
    checkoutStepTwoPage.verifyOrderSummaryContains('Sauce Labs Backpack');
    checkoutStepTwoPage.verifyOrderSummaryContains('Sauce Labs Onesie');
    checkoutStepTwoPage.clickFinish();

    // Verify Checkout Complete
    checkoutCompletePage.verifyOrderComplete();
  });

  afterEach(() => {
    // Log out to reset the session
    inventoryPage.logout();
  });
});
