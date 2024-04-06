/* eslint-disable no-undef */
const Base = require('../base');
const mainPage = require('../mainPage');


class SearchModalWindow extends Base {
    get searchInput() {
        return $('header.DocSearch-SearchBar');
    }

    get activeSeachModalInput() {
        return $('div.DocSearch-Modal input.DocSearch-Input');
    }

    async findBySearch(string) {
        await mainPage.searchIcon.isDisplayed();
        await mainPage.searchIcon.click();
        await this.searchInput.isDisplayed();
        await this.activeSeachModalInput.click();
        await this.activeSeachModalInput.isDisplayed();
        await this.activeSeachModalInput.setValue(string);
        await browser.keys("\uE007");
    }
}

module.exports = new SearchModalWindow();