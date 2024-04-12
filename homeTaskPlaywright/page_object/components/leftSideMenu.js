const Base = require('../base');

class LeftSideMenu extends Base{
    constructor(page) {
        super(page);
    }
    
    async getLeftMenuItem(itemName) {
        return this.page.locator(`//div[@class = 'sidebar_njMd']//a[text() = '${itemName}']`);
    }

    async clickOnLeftMenuItem(item) {
       await (await this.getLeftMenuItem(item)).isVisible();
       await (await this.getLeftMenuItem(item)).click();
    }
}

module.exports = LeftSideMenu;