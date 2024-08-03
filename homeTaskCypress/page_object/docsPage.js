const Base = require('./base');

class DocsPage extends Base {
    get searchButton() {
        return cy.get('div.searchBox_H2mL button', {timeout: 12000});
    }

    getHiddenBarItem(item) {
        return cy.get(`div.navbar__inner [href="${item}"]`)
    }

    clickOnDocsPageMenu(option) {
        this.searchButton.should('be.visible');
        this.getHiddenBarItem(option).click();
    }
}

module.exports = new DocsPage();