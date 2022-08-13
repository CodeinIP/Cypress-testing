describe("Checking todolist application", () => {
  it("Should exist", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").should("exist");
  });
  it("should intersept the GET request", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "http://localhost:8080/list", { title: "React" }).as(
      "getReq"
    );
    cy.wait("@getReq");
    cy.get(".list").should("have.length", 1);
  });
  it("Should intercept the post request", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("POST", "http://localhost:8080/list", {
      fixture: "list",
    }).as("postReq");
    cy.get("button").click();
    cy.wait("@postReq");
  });
  it("Should handle error", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "http://localhost:8080/list", (req) => {
      req.reply({
        statusCode: 404,
      });
    });
  });
});
