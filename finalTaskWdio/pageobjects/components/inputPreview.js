const Base = require('../base')

class InputPreview extends Base {
    get previewList() {
        return $('ul#ui-id-2');
    }

    async selectFisrtItemWithText(text) {
        return $(`//ul[@id = "ui-id-2"]//li[@class = "list_tovar_3 ui-menu-item"]//b[contains(text(), "${text}")]`)
    }
}

module.exports = new InputPreview();