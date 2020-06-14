/// <reference types="@emotion/core"/>
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    positionToViewport(value: string): Chainable<Element>;
  }
}
