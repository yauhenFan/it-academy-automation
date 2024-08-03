const Base = require('./base');
const docsPage = require('./docsPage');
const contactSalesWindow =  require('./components/contactSales')
const searchModal = require('./components/searchModal');

class MainPage extends Base {
    get documentationButton() {
        return cy.get('div.fluid-container.relative.z-50 a[href="https://on.cypress.io"]', {timeout: 15000})
    }

    get contactSales() {
        return cy.get('div[data-cy="header-cta"] button:nth-child(1)');
    }

    mainMenuItems(itemName) {
        return cy.get(`div a#dropdown${itemName}`);
    }

    get subMenu() {
        return cy.get('div.open div.dropdown-item');
    }

    clickDocumentationButton() {
        this.documentationButton.click();
    }

    clickAndSearch(text){
        docsPage.searchButton.click();
        searchModal.modalWindowInput.type(text);
        searchModal.modalWindowInput.type('{enter}');
    }

    verifyUrlContains(anchorUrl) {
        docsPage.searchButton.should('be.visible');
        cy.url().should('include', anchorUrl);
    }

    openContactSales() {
        this.contactSales.click();
        contactSalesWindow.windowHeader.should('be.visible');
    }

    hoverOverAndSubMenuAppears(name, param) {
        this.mainMenuItems(name).trigger('mouseover');
        this.subMenu.should(param);
    }
}

module.exports = new MainPage();