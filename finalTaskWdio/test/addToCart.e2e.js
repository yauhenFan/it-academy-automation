const mainPage = require('../pageobjects/mainPage')
const DATA = require('../configData')
const mainHelper  = require('../helpers/mainHelper')
const calalogPage = require('../pageobjects/catalogPage')
const catalogPage = require('../pageobjects/catalogPage')
const cartWindow = require('../pageobjects/components/cartWindow')


describe('Add item to card and verify result', () => {
    beforeEach(async() => {
        await mainPage.open(DATA.BASE_URL);
        await mainHelper.verifyIsDisplayed(mainPage.allGoodsButton);
        await mainPage.maximize();
    })

    it('Item can be added to the cart', async() => {
        await mainPage.searchAndHitEnter('телевизоры');
        await mainHelper.verifyIsDisplayed(calalogPage.catalogTitle);
        await mainHelper.verifyIsDisplayed(catalogPage.getTotalResultCategorySearch('Телевизоры'));
        await calalogPage.addItemtoCart(1);
        await mainHelper.verifyIsDisplayed(mainPage.cartWindow);
        await expect(cartWindow.oneItemInCart).toHaveText('1 товар')
    })

    it('Quantity should encrease when add items in the cart', async() => {
        await mainPage.searchAndHitEnter('телевизоры');
        await mainHelper.verifyIsDisplayed(catalogPage.catalogTitle);
        await mainHelper.verifyIsDisplayed(catalogPage.getTotalResultCategorySearch('Телевизоры'));
        await calalogPage.addItemtoCart(1);
        await mainHelper.verifyIsDisplayed(mainPage.cartWindow);
        await cartWindow.clickPlusInCart();
        await expect(cartWindow.twoItemsInCart).toHaveText('2 товара')
    })

    it('Cart window should disappear when delete items', async() => {
        await mainHelper.verifyIsDisplayed(mainPage.cartIcon);
        await mainHelper.clickOnElement(mainPage.cartIcon);
        await mainHelper.verifyIsDisplayed(cartWindow.minusCartItem);
        await cartWindow.clickMinusInCart();
        await cartWindow.clickMinusInCart();
        await expect(mainPage.cartWindow).not.toBeDisplayed();
    })

    it('Category page should display when select proceed ordering', async() => {
        await mainPage.searchAndHitEnter('телевизоры');
        await mainHelper.verifyIsDisplayed(catalogPage.catalogTitle);
        await mainHelper.verifyIsDisplayed(catalogPage.getTotalResultCategorySearch('Телевизоры'));
        await mainPage.closeDiscountSpinnerIfAppears();
        await mainHelper.verifyIsDisplayed(mainPage.cartWindow);
        await mainHelper.clickOnElement(cartWindow.proccedOrderingBtn);
        await expect(mainPage.cartWindow).not.toBeDisplayed();
        expect(await calalogPage.getCatalogTitleCategorySearch('Телевизоры')).toBeDisplayed();
    })

    it('Cart icon should display notification when item is added', async() => {
        await mainHelper.verifyIsDisplayed(mainPage.cartIcon);
        await mainHelper.verifyIsDisplayed(mainPage.cartIconNotification);
        await expect(mainPage.cartIconNotification).toExist();
        await expect(await mainPage.getElementText(mainPage.cartIconNotification)).toContain('1')
    })

    it('Cart icon should display notification when item is added and Web page refresh', async() => {
        await mainHelper.verifyIsDisplayed(mainPage.cartWindow);
        await mainHelper.verifyIsDisplayed(mainPage.cartIconNotification);
        await mainPage.refreshWebPage();
        await mainHelper.verifyIsDisplayed(mainPage.cartWindow);
        await mainHelper.verifyIsDisplayed(mainPage.cartIconNotification);
        await expect(mainPage.cartIconNotification).toExist();
    })

    it('Cart window should open when click on cart icon with added item', async() => {
        await mainHelper.verifyIsDisplayed(mainPage.cartIcon);
        await mainHelper.clickOnElement(mainPage.cartIcon);
        await mainHelper.verifyIsDisplayed(mainPage.cartWindow);
        await mainHelper.clickOnElement(cartWindow.cartCloseBtn);
        await mainHelper.verifyIsDisplayed(mainPage.cartIcon);
        await mainHelper.clickOnElement(mainPage.cartIcon);
        await expect(mainPage.cartWindow).toBeDisplayed();
    })

    it('Empty cart should be clickable', async() => {
        await mainHelper.verifyIsDisplayed(mainPage.cartIcon);
        await mainHelper.clickOnElement(mainPage.cartIcon);
        await mainHelper.verifyIsDisplayed(mainPage.cartWindow);
        await cartWindow.clickMinusInCart();
        await expect(mainPage.cartIconNotification).not.toBeDisplayed();
        await expect(mainPage.cartIcon).toBeClickable();
    })

})