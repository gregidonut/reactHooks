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
        cy.get("@todoListUL")
            .children()
            .last()
            .as("lastTodoItem")
            .should("have.css", "text-decoration")
            .and("includes", "none");
        cy.get(':nth-child(2) > [data-cy="todo-body"]').contains("tanginamo");
        cy.get("@lastTodoItem").find('[data-cy="completed-toggle"]').click();
        cy.get("@lastTodoItem")
            .should("have.css", "text-decoration")
            .and("includes", "line-through");

        cy.get("@lastTodoItem").find('[data-cy="delete-btn"]').click();
        cy.get("@todoListUL").children().should("have.length", 1);
    });
});
