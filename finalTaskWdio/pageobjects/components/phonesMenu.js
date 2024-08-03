const Base = require('../base');
const DATA = require('../../configData')

class PhonesMenu extends Base {
    get selectButton() {
        return $('div.top p.phones > u >img');
    }

    get phoneSubMenu() {
        return $('div.top_transp_phones > div');
    }

    async getPhoneCode(code) {
        return $(`//div[@class = "top"]//p[@class = "phones"]//i[contains(text(), "${code}")]`)
    }

    async verifyAllPhoneCodeDisplayed(arr) {
        for(let i = 0; i < arr.length; i++) {
          await(await this.getPhoneCode(arr[i])).isDisplayed();
        }
    }
}

module.exports = new PhonesMenu();