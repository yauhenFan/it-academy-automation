const mainPage = require('../pageobjects/mainPage')
const DATA = require('../configData')
const mainHelper  = require('../helpers/mainHelper')
const calalogPage = require('../pageobjects/catalogPage')
const catalogPage = require('../pageobjects/catalogPage')


describe('Add goods to compare and remove', () => {
    beforeEach(async() => {
        await mainPage.open(DATA.BASE_URL);
        await mainHelper.verifyIsDisplayed(mainPage.allGoodsButton);
        await mainPage.maximize();
    })

    it('Goods can be added for comparison', async() => {
        await mainPage.searchAndHitEnter('ноутбуки');
        await mainPage.acceptCookieIfDisplays();
        await calalogPage.addProductToComparison(1);
        await calalogPage.addProductToComparison(2);
        await mainHelper.verifyIsDisplayed(calalogPage.compareToast);
        await mainHelper.clickOnElement(calalogPage.compareToast);
        await mainHelper.verifyIsDisplayed(catalogPage.numberOfGoodsToCompare);
        await expect(await mainPage.getElementText(catalogPage.numberOfGoodsToCompare)).toContain('2')
    })

    it('Should be possible to remove goods from comparison', async() => {
        await mainHelper.verifyIsDisplayed(calalogPage.compareToast);
        await mainHelper.clickOnElement(calalogPage.compareToast);
        await mainHelper.verifyIsDisplayed(calalogPage.clearComparisonBtn);
        await mainHelper.clickOnElement(catalogPage.clearComparisonBtn);
        await browser.acceptAlert();
        await expect(await mainPage.getElementText(catalogPage.noGoodsToCompareText)).toContain('Нет товаров для сравнения!')
    })
})

