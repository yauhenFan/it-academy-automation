const MainPage = require('../page_object/mainPage');
const SearchModal = require('../page_object/components/searchModal');
const data = require('../dataConfig');
const LeftSideMenu = require('../page_object/components/leftSideMenu');
// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Test suit for Playwright home site', async function() {
  let mainPage;
  let searchModal;
  let leftSideMenu;

  test.beforeEach(async({page}) => {
    mainPage = new MainPage(page);
    searchModal = new SearchModal(page);
    leftSideMenu = new LeftSideMenu(page);
    await mainPage.open(data.BASE_URL);
    await mainPage.getStartedButton.isVisible();    
  })
  test('Verify left side menu is expandible', async ({ page }) => {
    await mainPage.docsButton.click();
    await leftSideMenu.clickOnLeftMenuItem('Getting Started');
    await expect(await leftSideMenu.getLeftMenuItem('Installation')).not.toBeVisible();
    await leftSideMenu.clickOnLeftMenuItem('Getting Started');
    await expect(await leftSideMenu.getLeftMenuItem('Installation')).toBeVisible();
  });

  test('Type text in search and verify result in drop dow', async({page}) => {
    await mainPage.clickOnSearch();
    await expect(searchModal.searchWindow).toBeVisible();
    await searchModal.typeToSearch('Emulation');
    await expect(await searchModal.getPreviewResult(0)).toContainText('Emulation');
  });

  test('Search Window is not dislayed after reload', async({ page }) => {
    await mainPage.clickOnSearch();
    await page.reload();
    await expect(searchModal.searchWindow).not.toBeVisible();
  });

  test('User navigates to default page when clcik on Playwright icon', async({ page }) => {
    await mainPage.clickOnGetStarted();
    await mainPage.clickOnGetPlayWrigth();
    await expect(page).toHaveTitle(data.HOME_TITLE);
  })
})