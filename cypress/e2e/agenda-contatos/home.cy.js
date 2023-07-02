/// <reference types="cypress" />

describe('Teste para Home', () => {
 beforeEach(() => {
  cy.visit('https://agenda-contatos-react.vercel.app/');
 });
 it('Renderiza 6 contatos e 3 inputs', () => {
  cy.get('.contato').should('have.length', 3);
  cy.get('.sc-gLDzan > input').should('have.length', 3);
 });
 it('Adiciona Contato', () => {
  cy.get('[type="text"]').type('Marco Romagna');
  cy.get('[type="email"]').type('maromagna@gmail.com');
  cy.get('[type="tel"]').type('45999800148');
  cy.get('.adicionar').click();
 });
 it('Alterando Contato', () => {
  cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
  cy.get('[type="text"]').type('gian Souza1');
  cy.get('.alterar').click();
 });
 it('Remover Contato', () => {
  cy.get(':nth-child(2) > .sc-gueYoa > .delete').click();
 });
});
