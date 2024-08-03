const Base = require('../base');

class SearchModal extends Base {
    get modalWindow() {
        return cy.get('div.DocSearch-Modal', {timeout: 15000});
    }

    get modalWindowInput() {
        return cy.get('div.DocSearch-Modal input', {timeout: 15000});
    }

    get defaultSearch() {
        return cy.get('div.DocSearch-Dropdown', {timeout: 10000});
    }
}

module.exports = new SearchModal();