describe("Gatsby blog", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads home page", () => {
    cy.contains('Great coffee with a conscience')
  });
});
