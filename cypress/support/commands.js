Cypress.Commands.add("sendAndVisit", () => {
  cy.server();
  cy.route("GET", "/api/todos", "fixture:todos");
  cy.visit("/");
});
