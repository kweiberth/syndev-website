const emailHref = 'mailto:franz.weiberth@syndev.co';

it('should test all the major stuff', () => {
  cy.visit('/');

  // Logo in header is visible, i.e. within the viewport
  cy.get('[data-test-id="header"]').find('svg').positionToViewport('inside');

  // Contact button in the header has the correct email address href
  cy.get('[data-test-id="header"]')
    .find('a')
    .contains('Contact')
    .invoke('attr', 'href')
    .should('eq', emailHref);

  // Footer contains Franz's name, email and LinkedIn
  cy.get('[data-test-id="footer"]')
    .find('div')
    .contains('Franz J. Weiberth, Ph.D.');
  cy.get('[data-test-id="footer"]')
    .find('a')
    .contains('Email')
    .invoke('attr', 'href')
    .should('eq', emailHref);
  cy.get('[data-test-id="footer"]')
    .find('a')
    .contains('LinkedIn')
    .invoke('attr', 'href')
    .should(
      'contain',
      'https://www.linkedin.com/in/franz-j-weiberth-ph-d-6a239a2a/',
    );

  // Home page (EXPERTISE) should be showing
  cy.get('div').contains('Founded and led by Franz Weiberth');

  // Click the SUCCESSES tab, should route to /successes, no longer show content
  // from EXPERTISE, now showing content for SUCCESSES
  cy.get('[data-test-id="header-tabs"]')
    .find('button')
    .contains('SUCCESSES')
    .click();
  cy.url().should('contain', '/successes');
  cy.get('div')
    .contains('Founded and led by Franz Weiberth')
    .should('not.exist');
  cy.get('div').contains('Accelerated timelines');

  // Scroll all the way to bottom, header logo should be hidden, but the header
  // tabs should still be visible in the viewport
  cy.scrollTo('bottom');
  cy.get('[data-test-id="header"]').find('svg').positionToViewport('above');
  cy.get('[data-test-id="header-tabs"]').positionToViewport('inside');

  // Click the PUBLICATIONS tab, should route to /publications, no longer show
  // content from SUCCESSES, now showing content for PUBLICATIONS
  cy.get('[data-test-id="header-tabs"]')
    .find('button')
    .contains('PUBLICATIONS')
    .positionToViewport('inside')
    .click();
  cy.url().should('contain', '/publications');
  cy.get('div').contains('Weiberth, F. J. “Key Green');
  cy.get('div').contains('Accelerated timelines').should('not.exist');

  // Scroll all the way to bottom, header logo should be outside viewport while
  // header tabs should still be visible. Then scroll back up to the top and
  // both header logo and tabs should be within viewport
  cy.scrollTo('bottom');
  cy.get('[data-test-id="header"]').find('svg').positionToViewport('above');
  cy.get('[data-test-id="header-tabs"]').positionToViewport('inside');
  cy.scrollTo('top');
  cy.get('[data-test-id="header"]').find('svg').positionToViewport('inside');
  cy.get('[data-test-id="header-tabs"]').positionToViewport('inside');

  // Click the EXPERTISE tab, should load EXPERTISE content, and the URL should
  // not be /expertise, but should just be apex path '/'
  cy.get('[data-test-id="header-tabs"]')
    .find('button')
    .contains('EXPERTISE')
    .click();
  cy.url()
    .should('not.contain', 'expertise')
    .should('eq', 'http://localhost:26780/');
  cy.get('div').contains('Founded and led by Franz Weiberth');
});
