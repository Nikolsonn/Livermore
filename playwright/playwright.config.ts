import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    headless: false,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'], browserName: 'webkit' },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['iPhone 12'], browserName: 'chromium' },
    },
  ],
});
