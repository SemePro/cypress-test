// cypress/page_objects/CheckoutStepTwoPage.ts

class CheckoutStepTwoPage {
  // Static Locators
  static finishButton = 'button[data-test="finish"]';
  static cancelButton = 'button[data-test="cancel"]';
  static paymentInfoLabel = 'div[data-test="payment-info-label"]';
  static paymentInfoValue = 'div[data-test="payment-info-value"]';
  static shippingInfoLabel = 'div[data-test="shipping-info-label"]';
  static shippingInfoValue = 'div[data-test="shipping-info-value"]';
  static itemTotalLabel = 'div[data-test="subtotal-label"]';
  static taxLabel = 'div[data-test="tax-label"]';
  static totalLabel = 'div[data-test="total-label"]';

  // Methods

  static clickFinish() {
    cy.get(CheckoutStepTwoPage.finishButton).click();
  }

  static clickCancel() {
    cy.get(CheckoutStepTwoPage.cancelButton).click();
  }

  static verifyPaymentInfo(paymentInfo: string) {
    cy.get(CheckoutStepTwoPage.paymentInfoValue).should('contain.text', paymentInfo);
  }

  static verifyShippingInfo(shippingInfo: string) {
    cy.get(CheckoutStepTwoPage.shippingInfoValue).should('contain.text', shippingInfo);
  }

  static verifyItemTotal(total: string) {
    cy.get(CheckoutStepTwoPage.itemTotalLabel).should('contain.text', total);
  }

  static verifyTax(tax: string) {
    cy.get(CheckoutStepTwoPage.taxLabel).should('contain.text', tax);
  }

  static verifyTotalAmount(total: string) {
    cy.get(CheckoutStepTwoPage.totalLabel).should('contain.text', total);
  }

  // New Method: Verify Order Summary Contains Specific Item
  static verifyOrderSummaryContains(productName: string) {
    cy.contains(productName).should('exist');
  }
}

export const checkoutStepTwoPage = CheckoutStepTwoPage;
