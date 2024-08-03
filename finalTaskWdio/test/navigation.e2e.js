const mainPage = require('../pageobjects/mainPage')
const actionPage = require('../pageobjects/actionPage')
const DATA = require('../configData')
const mainHelper  = require('../helpers/mainHelper')
const phonesMenu = require('../pageobjects/components/phonesMenu')
const footer = require('../pageobjects/components/footer')
const loginPage = require('../pageobjects/loginPage')


describe('Navgate via Top and bottom menu', () => {
    beforeEach(async() => {
        await mainPage.open(DATA.BASE_URL);
        await mainHelper.verifyIsDisplayed(mainPage.allGoodsButton);
        await mainPage.maximize();
    })

    it('Error should be dislayed on login without phone number', async() => {
        await mainHelper.verifyIsDisplayed(mainPage.loginIcon);
        await mainHelper.clickOnElement(mainPage.loginIcon);
        await mainHelper.verifyIsDisplayed(loginPage.submitBtn);
        await mainHelper.clickOnElement(loginPage.submitBtn);
        await expect(loginPage.errorPhoneInput).toBeDisplayed();
    })
    
    it('It returns on a Homepage when clicks on logo', async () => {
        await mainPage.clickOnTopMenuItem(DATA.TOP_MENU2[0]);
        await mainHelper.verifyIsDisplayed(actionPage.actionPageName);
        await mainHelper.clickOnElement(actionPage.logoImg);
        await expect(mainPage.mainBanner).toBeDisplayed();
    })

    it('URL and title should change on navigation through Top Menu', async() => {
        await mainPage.clickOnTopMenuItem(DATA.TOP_MENU2[1]);
        expect(await mainHelper.getPageUrl()).toHaveUrlContaining(DATA.TOP_MENU_DATA[1].url);
        expect(await mainHelper.getPageTitle()).toHaveTitle(DATA.TOP_MENU_DATA[1].title);
    })

    it('Phone numbers for all code should display', async() => {
        await mainHelper.clickOnElement(phonesMenu.selectButton);
        await mainHelper.verifyIsDisplayed(phonesMenu.phoneSubMenu);
        expect(await phonesMenu.verifyAllPhoneCodeDisplayed(DATA.PHONE_CODE)).toBeDisplayed();
    })

    it('Social Media resources are opened in a new Browser', async() => {
        await mainPage.acceptCookieIfDisplays();
        await mainHelper.clickOnElement(await footer.getMediaIcon(1));
        await mainPage.switchToWindow(1);
        expect(await mainHelper.getPageUrl()).toHaveUrlContaining('instagram.com/elektrosila.by/');
    })
})