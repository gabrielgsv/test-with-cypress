/// <reference types="Cypress" />
describe("Input form", () => {
  const typedText = "Buy anything";

  beforeEach(() => {
    cy.sendAndVisit([]);
  });

  it("focuses input on load", () => {
    cy.focused().should("have.class", "new-todo");
  });

  it("accepts input", () => {
    cy.get(".new-todo")
      .type(typedText)
      .should("have.value", typedText);
  });

  context("Form submission", () => {
    beforeEach(() => {
      cy.server();
    })
    it("Add a new todo on submit", () => {
      cy.route("POST", "/api/todos", {
        name: typedText,
        id: 1,
        isComplete: false
      });

      cy.get(".new-todo")
        .type(typedText)
        .type("{enter}")
        .should("have.value", "");

      cy.get(".todo-list li")
        .should("have.length", 1)
        .and("contain", typedText);
    });

    it("Shows an error message on a failed submision", () => {
      cy.route({
        url: "/api/todos",
        method: "POST",
        status: 500,
        response: {}
      });

      cy.get(".new-todo").type("test{enter}");

      cy.get(".todo-list li").should("not.exist");

      cy.get(".error").should("be.visible");
    });
  });
});
