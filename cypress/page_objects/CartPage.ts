// cypress/page_objects/CartPage.ts

class CartPage {
    // Static Locators
    static continueShoppingButton = 'button[data-test="continue-shopping"]';
    static checkoutButton = 'button[data-test="checkout"]';
    static cartItemContainer = 'div[data-test="cart-list"]';
    static cartItemQuantity = 'div[data-test="cart-quantity-label"]';
    static cartItemDescription = 'div[data-test="cart-desc-label"]';
  
    // Methods
    static continueShopping() {
      cy.get(CartPage.continueShoppingButton).click();
    }
  
    static checkout() {
      cy.get(CartPage.checkoutButton).click();
    }
  
    static verifyCartItemQuantity(quantity: string) {
      cy.get(CartPage.cartItemQuantity).should('have.text', quantity);
    }
  
    static verifyCartItemDescription(description: string) {
      cy.get(CartPage.cartItemDescription).should('contain.text', description);
    }
  
    static verifyCartContainsItems() {
      cy.get(CartPage.cartItemContainer).find('.cart_item').should('have.length.greaterThan', 0);
    }
  
    static verifyEmptyCart() {
      cy.get(CartPage.cartItemContainer).find('.cart_item').should('have.length', 0);
    }
  }
  
  export const cartPage = CartPage;
  