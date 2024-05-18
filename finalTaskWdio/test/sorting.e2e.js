const mainPage = require('../pageobjects/mainPage')
const DATA = require('../configData')
const mainHelper  = require('../helpers/mainHelper')
const calalogPage = require('../pageobjects/catalogPage')
const catalogPage = require('../pageobjects/catalogPage')


describe('Sort by categories and parameters', () => {
    beforeEach(async() => {
        await mainPage.open(DATA.BASE_URL);
        await mainHelper.verifyIsDisplayed(mainPage.allGoodsButton);
        await mainPage.maximize();
        await mainPage.closeDiscountSpinnerIfAppears();
        await mainPage.acceptCookieIfDisplays();
    })

    it('Items should be sorted by selected candition', async() => {
        await mainPage.searchAndHitEnter('телевизоры');
        await mainHelper.verifyIsDisplayed(catalogPage.catalogTitle);
        await mainHelper.verifyIsDisplayed(catalogPage.getTotalResultCategorySearch('Телевизоры'));
        await expect(await catalogPage.selectCategoryAndVerifySorting(2, calalogPage.labelMadeIn)).toContain('Сделано в Беларуси');
    })

    it('Filter popup should appear after selecting any parameter', async() => {
        await mainPage.searchAndHitEnter('телевизоры');
        await mainHelper.verifyIsDisplayed(catalogPage.catalogTitle);
        await mainHelper.verifyIsDisplayed(catalogPage.getTotalResultCategorySearch('Телевизоры'));
        await catalogPage.selectProducer('CANDY');
        await expect(calalogPage.filterPopup).toBeDisplayed();
    })

    it('Should display results of filtering by producer', async() => {
        await mainPage.searchAndHitEnter('телевизоры');
        await mainHelper.verifyIsDisplayed(catalogPage.catalogTitle);
        await mainHelper.verifyIsDisplayed(catalogPage.getTotalResultCategorySearch('Телевизоры'));
        await expect(await catalogPage.selectProducerAndVerifyResult('CANDY', catalogPage.getProductCardName)).toContain('CANDY');
    })
})