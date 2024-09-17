// Example of a custom command
Cypress.Commands.add("login", (username: string, password: string) => {
    cy.request("POST", "/api/login", {
      username,
      password,
    }).then((response) => {
      window.localStorage.setItem("authToken", response.body.token);
    });
  });
  