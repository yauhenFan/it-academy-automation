const Base = require('../base')

class CartWindow extends Base {
    get cartCloseBtn() {
        return $('div.popup_korz div.close');
    }

    get plusCartItemBtn() {
        return $('div.popup_korz div.plus');
    }

    get minusCartItem() {
        return $('div.popup_korz div.minus');
    }

    get oneItemInCart() {
        return $('//div[@class = "tb_popup_zakaz"]//b[@class = "cnt_tov"][text() = "1 товар"]');
    }

    get twoItemsInCart() {
        return $('//div[@class = "tb_popup_zakaz"]//b[@class = "cnt_tov"][text() = "2 товара"]');
    }

    get proccedOrderingBtn() {
        return $('div.btn_popup_close');
    }

    get closeBtn() {
        return $('div.popup_close div.close');
    }

    async clickPlusInCart() {
        await this.plusCartItemBtn.waitForDisplayed();
        await this.plusCartItemBtn.click();
    }

    async clickMinusInCart() {
        await this.minusCartItem.waitForDisplayed();
        await this.minusCartItem.click();
    }
}

module.exports = new CartWindow();