const mainPage = require('../../page_object/mainPage');
const data = require('../../data');
const docsPage = require('../../page_object/docsPage');
const contactSalesWindow = require('../../page_object/components/contactSales');
const searchModal = require('../../page_object/components/searchModal');

describe('Test suit for Cypress framework home site', () => {
    it('Verify search results using Search input', () => {
        mainPage.open(data.BASE_URL);
        mainPage.clickDocumentationButton();
        mainPage.clickAndSearch(" ");
        searchModal.defaultSearch.should('be.visible');
    })

    it('Verify URL anchor is updated on navigation', () => {
        mainPage.open(data.BASE_URL);
        mainPage.clickDocumentationButton();
        mainPage.verifyUrlContains('overview/why-cypress');
        docsPage.clickOnDocsPageMenu('/api/table-of-contents');
        docsPage.searchButton.should('be.visible');
        mainPage.verifyUrlContains('api/table-of-contents');
    })

    it('Verify error appears when Contact Sales without data', () => {
        mainPage.open(data.BASE_URL);
        mainPage.openContactSales();
        contactSalesWindow.clickOnWindowButton(1);
        contactSalesWindow.errorMessage.should('be.visible');
    })

    it('Hover over mainmenu items and submenu appears', () => {
        mainPage.open(data.BASE_URL);
        mainPage.hoverOverAndSubMenuAppears(data.DROP_DOWN[0], 'be.visible');
        mainPage.hoverOverAndSubMenuAppears(data.DROP_DOWN[1], 'be.visible');
        mainPage.hoverOverAndSubMenuAppears(data.DROP_DOWN[2], 'be.visible');
        mainPage.hoverOverAndSubMenuAppears(data.DROP_DOWN[3], 'be.visible');
    })
})