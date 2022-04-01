describe('AUTH: Forgot password', () => {
  Cypress.env('RESOLUTIONS').forEach((resolution) => {
    context(resolution.message, () => {
      before(() => cy.viewport(resolution.width, resolution.height));

      beforeEach(function () {
        cy.logout().visit('/forgot-password');

        cy.intercept('POST', 'forgot-password').as('forgotPassword');

        cy.fixture(`${Cypress.env('ENVIRONMENT')}/auth`).then((auth) => {
          this.auth = auth;
        });
      });

      it('Test route /forgot-password', () => {
        cy.testRoute('forgot-password');
      });

      it('Reset password attempt with no email', () => { });

      it('Reset password attempt with invalid email', () => { });

      it('Reset password attempt with email of existing user', () => { });

      it('Check is there a working link to login page', () => {
        cy.dataCy('forgot-password-login-link').click()
          .location('pathname').should('eq', '/login');
      });
    });
  });
});
