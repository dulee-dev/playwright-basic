import { test, expect } from '@playwright/test';

test('if user visit home and click "Get Started", h1 "Introduction" is visible and page title contains "Introduction"', async ({
  page,
}) => {
  const startUrl = 'https://nextjs.org/';
  const h1 = 'Introduction';
  const title = /Introduction/;

  await page.goto(startUrl);
  await page.getByRole('link', { name: 'Get Started' }).click();

  // console.log(
  //   await page.getByRole('heading', { name: h1, level: 1 }).isVisible()
  // );
  // await page.waitForTimeout(30);
  // console.log(
  //   await page.getByRole('heading', { name: h1, level: 1 }).isVisible()
  // );
  // await page.waitForTimeout(30);
  // console.log(
  //   await page.getByRole('heading', { name: h1, level: 1 }).isVisible()
  // );
  // await page.waitForTimeout(30);
  // console.log(
  //   await page.getByRole('heading', { name: h1, level: 1 }).isVisible()
  // );

  // await page.waitForTimeout(20);
  // const isVisible = await page
  //   .getByRole('heading', { name: h1, level: 1 })
  //   .isVisible();
  // expect(isVisible).toEqual(true);

  await expect(page.getByRole('heading', { name: h1, level: 1 })).toBeVisible();
  await expect(page).toHaveTitle(title);
});
