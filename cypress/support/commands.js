Cypress.Commands.add("sendAndVisit", (seedData = "fixture:todos") => {
  cy.server();
  cy.route("GET", "/api/todos", seedData);
  cy.visit("/");
});
