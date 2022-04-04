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
  { prevSubject: 'optional' },
  (subject, value) => cy.get(`[data-cy=${value}]`, { withinSubject: subject }),
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
  if (email) cy.dataCy('login-email-input').type(email);
  else cy.dataCy('login-email-input').clear();

  if (password) cy.dataCy('login-password-input').type(password);
  else cy.dataCy('login-password-input').clear();

  if (email && password) cy.dataCy('login-submit-button').click();
});

Cypress.Commands.add('register', (name, email, password) => {
  if (name) cy.dataCy('register-name-input').type(name);
  else cy.dataCy('register-name-input').clear();

  if (email) cy.dataCy('register-email-input').type(email);
  else cy.dataCy('register-email-input').clear();

  if (password) cy.dataCy('register-password-input').type(password);
  else cy.dataCy('register-password-input').clear();

  if (name && email && password) cy.dataCy('register-submit-button').click();
});

Cypress.Commands.add('forgotPassword', (email) => {
  if (email) cy.dataCy('forgot-password-email-input').type(email);
  else cy.dataCy('forgot-password-email-input').clear();

  if (email) cy.dataCy('forgot-password-submit-button').click();
});

const USER_KEY = 'user';
Cypress.Commands.add('bypassLogin', (route = 'home') => {
  cy.fixture(`${Cypress.env('ENVIRONMENT')}/auth`).then((auth) => {
    localStorage.setItem(USER_KEY, JSON.stringify({
      email: auth.user.email,
      password: auth.user.password,
    }));

    cy.visit(`/${route}`);
  });
});

Cypress.Commands.add('logout', () => {
  cy.clearLocalStorage().visit('/login');
});
