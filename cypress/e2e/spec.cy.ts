describe("template spec", () => {
    beforeEach(() => {
        cy.viewport("iphone-6");
    });
    it("passes", () => {
        cy.visit("/lessons/useReducer-todoList");
        cy.get('[data-cy="input-field"]').as("inputField").type("pakyu");
        cy.get('[data-cy="add-button"]').as("addBtn").click();
        cy.get('[data-cy="todo-list"]')
            .as("todoListUL")
            .children()
            .should("have.length", 1);
        cy.get("@inputField").clear().type("tanginamo");
        cy.get("@addBtn").click();
        cy.get("@todoListUL").children().should("have.length", 2);
    });
});
