describe("NativApps tutorials", () => {
  it("It works", () => {
    expect(true).to.equal(true);
  });

  it("Visit website", () => {
    cy.visit("/");
  });

  it("Nav to the same page", () => {
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });
});
