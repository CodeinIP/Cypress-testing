describe("Checking Form Input", () => {
  it("Check if form is present", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").should("exist");
    cy.get(".form-input").should("be.focused");
  });
  it("Check if the input is correct", () => {
    cy.visit("http://localhost:3000");
    cy.get(".form-input").type("My name is Inder");
    cy.get(".form-input").should("have.value", "My name is Inder");
  });
  it("Check if it adds value to div element", () => {
    cy.visit("http://localhost:3000");
    cy.get(".form-input").type("Sachin Tendulkar");
    cy.get(".form-input").should("have.value", "Sachin Tendulkar");
  });
});
