// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add(
  'dataCy',
  {
    prevSubject: 'optional',
  },
  (subject, value) => cy.get(`[data-cy=${value}]`, {
    withinSubject: subject,
  }),
);

Cypress.Commands.add('testRoute', (route) => {
  cy.location().should((loc) => {
    if (loc.hash.length > 0) {
      // Vue-Router in hash mode
      expect(loc.hash).to.contain(route);
    } else {
      // Vue-Router in history mode
      expect(loc.pathname).to.contain(route);
    }
  });
});

// these two commands let you persist local storage between tests
const LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add('login', (email, password) => {
  if (email) cy.dataCy('login__email').type(email);
  else cy.dataCy('login__email').clear();

  if (password) cy.dataCy('login__password').type(password);
  else cy.dataCy('login__password').clear();

  if (email && password) cy.dataCy('login__password').click();
});

Cypress.Commands.add('register', (name, email, password) => {
  if (name) cy.dataCy('register__name').type(name);
  else cy.dataCy('register__name').clear();

  if (email) cy.dataCy('register__email').type(email);
  else cy.dataCy('register__email').clear();

  if (password) cy.dataCy('register__password').type(password);
  else cy.dataCy('register__password').clear();

  if (email && password) cy.dataCy('register__button').click();
});

Cypress.Commands.add('forgotPassword', (email) => {
  if (email) cy.dataCy('forgot_password__email').type(email);
  else cy.dataCy('forgot_password__email').clear();

  if (email) cy.dataCy('forgot_password__email').click();
});

Cypress.Commands.add('logout', () => {
  cy.clearLocalStorage().visit('/login');
});
