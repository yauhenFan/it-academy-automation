const Base = require('./base');
const inputPreview = require('../pageobjects/components/inputPreview')

class MainPage extends Base {

    get allGoodsButton() {
        return $('div.header_menu__wrap div.header_menu__item:nth-child(1)');
    }

    get mainBanner() {
        return $('div.banner2019.ban_all');
    }

    get cookieBanner() {
        return $('div.cookies_wrap.show');
    }

    get acceptCookieButton() {
        return $('div.wrap_btns_cookie >button:nth-child(1)');
    }

    get searchInput() {
        return $('div.top form[name="searchform"] input:nth-child(7)');
    }

    get cartWindow() {
        return $('div.popup_korz');
    }

    get discountSpinner() {
        return $('div.popmechanic-main div.popmechanic-content');
    }

    get discountSpinnerSloceBtn() {
        return $('div.popmechanic-main div.popmechanic-close');
    }

    get cartIcon() {
        return $('div.top_new span.top_korz');
    }



    get cartIconNotification() {
        return $('div.top_flypanel div.top_transp.menu_not_verf span.top_korz a.red > b');
    }

    get menuelement() {
        return $('div.main a.block_catalog__item.smartphone_sl');
    }

    get loginIcon() {
        return $('div.top_new span.top_lk >a');
    }

    async getElementText(anyEl) {
        return await anyEl.getHTML();
     }

    async getTopMenuItem(name) {
        return $(`//div[@class = "t_menu2"]/a[text() = "${name}"]`)
    }

    async clickOnTopMenuItem(itemName) {
        await (await this.getTopMenuItem(itemName)).click();
    }

    async phonesElement() {
        return $('div.top div.top_transp.menu_not_verf p.phones > u');
    }

    async acceptCookieIfDisplays() {
        if(this.cookieBanner.isDisplayed()) {
            await this.acceptCookieButton.click();

        } 
    }

    async searchAndHitEnter(text) {
        await this.searchInput.isDisplayed();
        await this.searchInput.click();
        await this.searchInput.setValue(text);
        await browser.keys("\uE007");
    }

    async searchAndClickOnItem(sendText, selectText) {
        await this.searchInput.isDisplayed();
        await this.searchInput.click();
        await this.searchInput.setValue(sendText);
        await inputPreview.previewList.isDisplayed();
        await (await inputPreview.selectFisrtItemWithText(selectText)).click();
    }

    async closeDiscountSpinnerIfAppears() {
        if(this.discountSpinner.isDisplayed()) {
            await this.discountSpinnerSloceBtn.click();
        } else {
            return false;
        }
    }

}

module.exports = new MainPage();