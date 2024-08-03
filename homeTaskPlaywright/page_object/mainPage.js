const Base = require('./base');

class MainPage extends Base {
    constructor(page) {
        super(page);
    }

    get docsButton() {
        return this.page.locator('nav.navbar.navbar--fixed-top a.navbar__item.navbar__link:nth-child(3)');
    }
 
    get getStartedButton() {
        return this.page.locator('div.buttons_pzbO > a')
    }

    get playWrigthButton() {
        return this.page.locator('div.navbar__logo')
    }

    get searchButton() {
        return this.page.locator('button.DocSearch.DocSearch-Button')
    }
    
    async clickOnSearch() {
        await this.searchButton.isVisible();
        await this.searchButton.click();
    }

    async clickOnGetStarted() {
        await this.getStartedButton.isVisible();
        await this.getStartedButton.click();
    }

    async clickOnGetPlayWrigth() {
        await this.playWrigthButton.isVisible();
        await this.playWrigthButton.click();
    }
    
}

module.exports = MainPage;