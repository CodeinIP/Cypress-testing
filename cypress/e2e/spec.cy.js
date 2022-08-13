/// <reference types="Cypress" />

describe("Checking Counter Application", () => {
  // it("Check if counter application is present", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.get("h2").should("exist"); // expect().toBeInTheDocument();
  //   cy.get(".addCounter").should("exist");
  //   cy.get(".reduceCounter").should("exist");
  // });
  // it("Should increment counter", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.get("h2").should("have.text", "The count is 0");
  //   cy.get(".addCounter").click();
  //   cy.get("h2").should("have.text", "The count is 1");
  // });
  // it("Should Increment multiple times", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.get("h2").should("have.text", "The count is 0");
  //   cy.get(".addCounter").click();
  //   cy.get(".addCounter").click();
  //   cy.get(".addCounter").click();
  //   cy.get(".addCounter").click();
  //   cy.get(".addCounter").click();
  //   cy.get("h2").should("have.text", "The count is 5");
  // });
  // it("Should Decrement multiple times", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.get("h2").should("have.text", "The count is 0");
  //   cy.get(".reduceCounter").click();
  //   cy.get(".reduceCounter").click();
  //   cy.get(".reduceCounter").click();
  //   cy.get(".reduceCounter").click();
  //   cy.get(".reduceCounter").click();
  //   cy.get("h2").should("have.text", "The count is -5");
  // });
  // it("Should increment and decremenet", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.get("h2").should("have.text", "The count is 0");
  //   cy.get(".addCounter").click();
  //   cy.get(".reduceCounter").click();
  //   cy.get(".addCounter").click();
  //   cy.get(".reduceCounter").click();
  //   cy.get(".addCounter").click();
  //   cy.get(".reduceCounter").click();
  //   cy.get("h2").should("have.text", "The count is 0");
  // });
  it("Should intersept the GET request",()=>{
    cy.visit("http://localhost:3000");
    cy.intercept("GET","http://localhost:8080/count",{value:100}).as("getReq");
    cy.wait("@getReq").should((data)=>{
      console.log("Data from cypress",data);
    })
  })
  it("Should intercept the POST request",()=>{
    cy.visit("http://localhost:3000");
    cy.intercept("GET","http://localhost:8080/count",{value:100}).as("getReq");
    cy.intercept("POST","http://localhost:8080/count",{})
  })
});
