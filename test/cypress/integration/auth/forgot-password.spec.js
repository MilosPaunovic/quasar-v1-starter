describe('AUTH: Forgot password', () => {
  beforeEach(function () {
    cy.logout().visit('/forgot-password');

    cy.intercept('POST', 'forgot-password').as('forgotPassword');

    cy.fixture(`${Cypress.env('ENVIRONMENT')}/auth`).then((auth) => {
      this.auth = auth;
    });
  });

  it('Test route.', () => {
    cy.testRoute('forgot-password');
  });

  it('Reset password attempt with no email.', () => { });

  it('Reset password attempt with invalid email.', () => { });

  it('Reset password attempt with email of existing user.', () => { });

  it('Check is there a working link to login page.', () => {
    cy.dataCy('forgot_password__login_redirect').click()
      .location('pathname').should('eq', '/login');
  });
});
