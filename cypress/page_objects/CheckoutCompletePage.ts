// cypress/page_objects/CheckoutCompletePage.ts

class CheckoutCompletePage {
    // Static Locators
    static completeHeader = 'h2[data-test="complete-header"]';
    static completeText = 'div[data-test="complete-text"]';
    static ponyExpressImage = 'img[data-test="pony-express"]';
    static backHomeButton = 'button[data-test="back-to-products"]';
  
    // Methods
    static verifyOrderCompletion() {
        cy.get(CheckoutCompletePage.completeHeader).should('have.text', 'Thank you for your order!');
        cy.get(CheckoutCompletePage.completeText).should('contain.text', 'Your order has been dispatched');
        cy.get(CheckoutCompletePage.ponyExpressImage).should('be.visible');
    }
  
    static clickBackHome() {
        cy.get(CheckoutCompletePage.backHomeButton).click();
    }

    // New Method: Verify if order is complete
    static verifyOrderComplete() {
        cy.get(CheckoutCompletePage.completeHeader).should('have.text', 'Thank you for your order!');
        cy.get(CheckoutCompletePage.completeText).should('contain.text', 'Your order has been dispatched');
    }
}

export const checkoutCompletePage = CheckoutCompletePage;
