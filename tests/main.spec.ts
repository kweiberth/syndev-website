import { test, expect } from '@playwright/test';

test('Main stuff', async ({ page }) => {
  // This was how we did it w/ Cypress. Maybe using the "projects"/devices from
  // Playwright is a better way to handle this?
  await page.setViewportSize({ width: 375, height: 812 }); // iPhone X viewport

  await page.goto('/');

  // Logo in header is visible, i.e. within the viewport
  const headerLogo = page.locator('[data-test-id="header"] svg');
  await expect(headerLogo).toBeInViewport();

  // Contact button in the header has the correct email address href
  await expect(
    await page.getByRole('link', { name: 'Contact' }),
  ).toHaveAttribute('href', 'mailto:franz.weiberth@syndev.co');

  // Footer contains Franz's name, email address and LinkedIn URL
  const footer = page.locator('[data-test-id="footer"]').first();
  await expect(footer).toContainText('Franz J. Weiberth, Ph.D.');
  await expect(
    await footer.getByRole('link', { name: 'Email' }),
  ).toHaveAttribute('href', 'mailto:franz.weiberth@syndev.co');
  await expect(
    await footer.getByRole('link', { name: 'LinkedIn' }),
  ).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/franz-j-weiberth-ph-d-6a239a2a/',
  );

  // Home page (i.e. expertise tab) should be showing
  await expect(
    page.getByText('Founded and led by Franz Weiberth'),
  ).toBeVisible();

  // Click the successes tab, app should route to /successes, no longer show
  // content from expertise tab, and now show content from successes tab
  await page.getByRole('button', { name: 'SUCCESSES' }).click();
  await expect(page).toHaveURL('/successes');
  await expect(
    page.getByText('Founded and led by Franz Weiberth'),
  ).not.toBeVisible();
  await expect(page.getByText('Accelerated timelines')).toBeVisible();

  // Scroll all the way to bottom, header logo should be hidden, but the header
  // tabs should still be visible in the viewport
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(headerLogo).not.toBeInViewport();
  await expect(page.locator('[data-test-id="header-tabs"]')).toBeInViewport();

  // Click publications tab, app should route to /publications, no longer show
  // content from successes tab, and now show content from publications tab
  await page.getByRole('button', { name: 'PUBLICATIONS' }).click();
  await expect(page).toHaveURL('/publications');
  await expect(page.getByText('Accelerated timelines')).not.toBeVisible();
  await expect(page.getByText('Weiberth, F. J.; Powers, M. R;')).toBeVisible();

  // Scroll all the way to bottom, header logo should be outside viewport while
  // header tabs should still be visible. Then scroll back up to the top and
  // both header logo and tabs should be within viewport.
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(headerLogo).not.toBeInViewport();
  await expect(page.locator('[data-test-id="header-tabs"]')).toBeInViewport();
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(headerLogo).toBeInViewport();
  await expect(page.locator('[data-test-id="header-tabs"]')).toBeInViewport();

  // Click the expertise tab, should load expertise content, and the URL should
  // not be /expertise, but should just be apex path '/'
  await page.getByRole('button', { name: 'EXPERTISE' }).click();
  await expect(page).toHaveURL('http://localhost:26780/');
  await expect(page).not.toHaveURL('/expertise');
  await expect(
    page.getByText('Founded and led by Franz Weiberth'),
  ).toBeVisible();
});
