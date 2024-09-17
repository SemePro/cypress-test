export class ApiHelper {
    static baseUrl = 'https://reqres.in/api';

    // Generic GET request
    static get(endpoint: string, failOnStatusCode = true) {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}${endpoint}`,
            failOnStatusCode: failOnStatusCode
        });
    }

    // Generic POST request
    static post(endpoint: string, body: any, failOnStatusCode = true) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}${endpoint}`,
            body: body,
            failOnStatusCode: failOnStatusCode
        });
    }

    // Generic PUT request
    static put(endpoint: string, body: any, failOnStatusCode = true) {
        return cy.request({
            method: 'PUT',
            url: `${this.baseUrl}${endpoint}`,
            body: body,
            failOnStatusCode: failOnStatusCode
        });
    }

    // Generic DELETE request
    static delete(endpoint: string, failOnStatusCode = true) {
        return cy.request({
            method: 'DELETE',
            url: `${this.baseUrl}${endpoint}`,
            failOnStatusCode: failOnStatusCode
        });
    }
}
