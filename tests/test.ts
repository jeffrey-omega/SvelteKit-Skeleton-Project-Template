import { expect, test } from '@playwright/test';

test.describe('index page', () => {

    test.describe('dark mode', () => {
        test.use({ colorScheme: 'dark' });

        test.beforeEach(async ({ page }) => {
            await page.goto('/');
        });

        test('display video with dark mode', async ({ page }) => {
            await page.waitForLoadState('domcontentloaded');
            await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
            await page.screenshot({ path: 'static/screenshot-dark.png', fullPage: true });
        });
    });

    test.describe('light mode', () => {
        test.use({ colorScheme: 'light' });

        test.beforeEach(async ({ page }) => {
            await page.goto('/');
        });

        test('display video with light mode', async ({ page }) => {
            await page.waitForLoadState('domcontentloaded');
            await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
            await page.screenshot({ path: 'static/screenshot-light.png', fullPage: true });
        });
    });

});
