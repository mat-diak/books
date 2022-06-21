describe("user searches for a book", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.intercept(
      "GET",
      "https://reststop.randomhouse.com/resources/titles/?start=0&max=10&expandLevel=1&search=Pooh",
      { fixture: "searchAPIResponse" }
    ).as("searchAPIResponse");
  });

  it("should take input", () => {
    cy.get('[data-cy="search-input"]')
      .type("Pooh")
      .should("have.value", "Pooh");
  });

  // Given a query
  it("should clear input", () => {
    cy.get('[data-cy="search-input"]').type("Pooh").as("input");
    cy.get('[data-cy="clear-search"]').click();

    cy.get("@input").should("have.value", "");
  });

  it("should make an API call", () => {
    cy.get('[data-cy="search-input"]').type("Pooh").as("input");
    cy.wait("@searchAPIResponse");
  });

  it("should show 10 results", () => {
    cy.get('[data-cy="search-input"]').type("Pooh").as("input");
    cy.wait("@searchAPIResponse");
    cy.get('[data-cy="search-results"] > li').should("have.length", 10);
  });

  // Clicking on result
  it("should open book details", () => {
    cy.get('[data-cy="search-input"]').as("input");

    cy.get("@input").type("Pooh");
    cy.wait("@searchAPIResponse");

    cy.get('[data-cy="search-results"]').first().click();
    cy.get('[data-cy="book-page"]');
  });
});
