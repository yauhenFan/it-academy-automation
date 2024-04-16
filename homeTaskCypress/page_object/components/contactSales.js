const Base = require('../base');

class ContactSalesWindow extends Base {
    get windowHeader() {
        return cy.get('dialog.pointer-events-auto div.flex.shrink-0.items-center.justify-between.rounded-t-md.border-b', {timeout: 9000});
    }

    get errorMessage() {
        return cy.get('div.relative.flex.flex-wrap:nth-child(3) div.flex-1:nth-child(1) div.text-red-600.w-full');
    }

    windowButton(number) {
        return cy.get(`dialog.pointer-events-auto div.absolute.bottom-0 button:nth-child(${number})`)
    }

    clickOnWindowButton(buttonNum) {
        this.windowButton(buttonNum).click();
    }

}

module.exports = new ContactSalesWindow();