const Base = require('../base');

class SearchModal extends Base {
    constructor(page) {
        super(page);
    }

    get searchWindow() {
        return this.page.locator('div.DocSearch-Modal');
    }

    get searchDropDown() {
        return this.page.locator('div.DocSearch-Dropdown');
    }

    async getPreviewResult(listNumber) {
        return this.page.locator(`#docsearch-item-${listNumber} span.DocSearch-Hit-title mark`)
    }

    async typeToSearch(text) {
        await this.page.keyboard.type(text);
        await this.searchDropDown.isVisible();
    }
}

module.exports = SearchModal;