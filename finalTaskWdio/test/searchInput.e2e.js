const mainPage = require('../pageobjects/mainPage')
const DATA = require('../configData')
const mainHelper  = require('../helpers/mainHelper')
const calalogPage = require('../pageobjects/catalogPage')
const catalogPage = require('../pageobjects/catalogPage')


describe('Result should display when using search input', () => {
    beforeEach(async() => {
        await mainPage.open(DATA.BASE_URL);
        await mainHelper.verifyIsDisplayed(mainPage.allGoodsButton);
        await mainPage.maximize();
    })

    it('Search by category name using input field and hit Enter', async() => {
        await mainPage.searchAndHitEnter('телевизоры');
        await mainHelper.verifyIsDisplayed(calalogPage.catalogTitle);
        expect(await calalogPage.getTotalResultCategorySearch('Телевизоры')).toBeDisplayed();
        expect(await calalogPage.getCatalogTitleCategorySearch('Телевизоры')).toBeDisplayed();
    })

    it('Search by good name using input and hit Enter', async() => {
        await mainPage.searchAndHitEnter('Lg');
        await mainHelper.verifyIsDisplayed(catalogPage.modelSearchResult);
        expect(await calalogPage.getModelSearchResult('Lg')).toBeDisplayed();
    })

    it('Page Not found should display with invalid inout', async() => {
        await mainPage.searchAndHitEnter('dsdfgbfbdfbfdbfdb');
        expect(catalogPage.notFoundMessage).toBeDisplayed();
    })

    it('Seacrh result should display when click on option from preview list', async() => {
        await mainPage.searchAndClickOnItem('Телевизоры Lg', 'Телевизоры');
        expect(await catalogPage.getCatalogTitleCategorySearch('Телевизоры Lg')).toBeDisplayed();
    })
})

