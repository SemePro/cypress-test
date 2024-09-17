// cypress/page_objects/InventoryPage.ts

class InventoryPage {
  // Static Locators
  static menuButton = '#react-burger-menu-btn';
  static logoutLink = 'a[data-test="logout-sidebar-link"]';
  static cartLink = '.shopping_cart_link';
  
  static getAddToCartButton(productId: string) {
    return `button[data-test="add-to-cart-${productId}"]`;
  }

  static getProductTitle(productId: string) {
    return `#item_${productId}_title_link`;
  }

  // Methods
  static openMenu() {
    cy.get(InventoryPage.menuButton).click();
  }

  static logout() {
    this.openMenu();
    cy.get(InventoryPage.logoutLink).click();
  }

  static addItemToCart(productId: string) {
    cy.get(InventoryPage.getAddToCartButton(productId)).click();
  }

  static goToCart() {
    cy.get(InventoryPage.cartLink).click();
  }

  static verifyProductInList(productId: string, productName: string) {
    cy.get(InventoryPage.getProductTitle(productId)).should('contain.text', productName);
  }
}

export const inventoryPage = InventoryPage;
