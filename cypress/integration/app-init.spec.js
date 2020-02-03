/// <reference types="Cypress" />

describe("App inicialization", () => {
  it.only("Loads todos on page load", () => {
    cy.sendAndVisit();

    cy.get(".todo-list li").should("have.length", 4);
  });
});
