import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Voices United|Advocacy/)
    await expect(page.locator('h1, h2').first()).toBeVisible()
  })

  test('has working navigation links', async ({ page }) => {
    await page.goto('/')
    const campaignsLink = page.getByRole('navigation').getByRole('link', { name: 'Campaigns' })
    await expect(campaignsLink).toBeVisible()
    await campaignsLink.click()
    await expect(page).toHaveURL('/campaigns')
  })
})

test.describe('Campaigns Page', () => {
  test('displays campaigns from Drupal', async ({ page }) => {
    await page.goto('/campaigns')
    await expect(page).toHaveTitle(/Campaigns/)
    await expect(page.getByText('Climate Justice Now').first()).toBeVisible()
  })
})

test.describe('Issues Page', () => {
  test('displays issues from Drupal', async ({ page }) => {
    await page.goto('/issues')
    await expect(page).toHaveTitle(/Issues/)
    await expect(page.getByText('Racial Justice').first()).toBeVisible()
  })
})

test.describe('Action Alerts Page', () => {
  test('displays action alerts from Drupal', async ({ page }) => {
    await page.goto('/action-alerts')
    await expect(page).toHaveTitle(/Action Alerts/)
    await expect(page.getByText('Call Your Senators', { exact: false }).first()).toBeVisible()
  })
})

test.describe('Reports Page', () => {
  test('displays reports from Drupal', async ({ page }) => {
    await page.goto('/reports')
    await expect(page).toHaveTitle(/Reports/)
    await expect(page.getByText('Annual Impact Report', { exact: false }).first()).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('header is present on all pages', async ({ page }) => {
    for (const path of ['/', '/campaigns', '/issues', '/action-alerts', '/reports']) {
      await page.goto(path)
      await expect(page.getByText('Voices United', { exact: false }).first()).toBeVisible()
    }
  })
})
