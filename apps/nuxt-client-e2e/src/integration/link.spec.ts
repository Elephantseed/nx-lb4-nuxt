describe('shared-ui', () => {
  beforeEach(() =>
    cy.visit(
      'http://localhost:3003/?path=/story/link--nuxt-website'
    )
  );

  it('should render the component', () => {
    cy.get('link').should('exist');
  });
});
