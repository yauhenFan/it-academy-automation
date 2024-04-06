/* eslint-disable no-undef */
const Base = require('./base');
const banner = require('../POM/components/anouncementBanner');

class MainPage extends Base {
    get mainNavMenu() {
        return $("nav.navbar.navbar--fixed-top div.navbar__inner");
    }

    get anouncementBanner() {
        return $("div.announcementBar_mb4j");
    }

    async getNavMenuOption(childNumber) {
        return $(`div.navbar__items:nth-child(1) a:nth-child(${childNumber})`);
    }

    get searchIcon() {
        return $('div.navbarSearchContainer_Bca1 svg.DocSearch-Search-Icon');
    }

    async clickOnNavMenuOption(number) {
        await (await this.getNavMenuOption(number)).isDisplayed();
        await (await this.getNavMenuOption(number)).click();
    }

    async closeAnouncementBanner() {
        await banner.closeBannerButton.isDisplayed();
        await banner.closeBannerButton.click();
    }
}

module.exports = new MainPage();