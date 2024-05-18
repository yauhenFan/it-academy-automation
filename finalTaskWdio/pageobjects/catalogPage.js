const mainHelper = require('../helpers/mainHelper');
const Base = require('./base')

class CatalogPage extends Base {

    get orderBtn() {
        return $('div.tovars div.wrap_tov_compr:nth-child(1) div.btn_zak');
    }

    get modelSearchResult() {
        return $('h1.search > b');
    }

    get notFoundMessage() {
        return $('div.not_find');
    }

    get itemPreviewCard() {
        return $$('div.tovars div.tov_prew');
    }

    get toCartButton() {
        return $$('div.tovars div.btn_zak');
    }

    get labelMadeIn() {
        return $$('div.tov_prew span.text_bel');
    }

    get filterPopup() {
        return $('div.filter_fly');
    }

    get filterShowBtn() {
        return $('div.filter_fly u');
    }

    get compareToast() {
        return $('div.left_transp_comp');
    }

    get numberOfGoodsToCompare() {
        return $('div#tabs span.compare_count_tab');
    }

    get compareCheckBox() {
        return $$('div.tovars div.wrap_tov_compr div.tov_prew label.add_cmpr');
    }

    get clearComparisonBtn() {
        return $('div.clear_btn_compare');
    }

    get noGoodsToCompareText() {
        return $('div.tovars_search');
    }

    get getProductCardName() {
        return $$('div.tovars div.wrap_tov_compr strong');
    }

    async sortCategory(categoryNum) {
        return $(`div.sorted_podcategory ul.sorted_podcategory_item li:nth-child(${categoryNum}) a`);
    }

    async getTotalResultCategorySearch(name) {
        return $(`//div[@class = "total"]//span[contains(text(), "${name}")]`)
    }

    async getCatalogTitleCategorySearch(title) {
        return $(`//div[@class = "right_panel"]/h1[contains(text(), "${title}")]`)
    }

    async getModelSearchResult(model) {
        return $(`//h1[@class = "search"]/b[contains(text(), "${model}")]`)
    }

    async getProducerName(producer) {
        return $(`form[name = "sortform"] label[for = "idsort${producer}"] a`)
    }

    async addItemtoCart(itemNumber) {
        await this.itemPreviewCard[itemNumber].waitForDisplayed();
        await this.toCartButton[itemNumber].waitForDisplayed();
        await this.toCartButton[itemNumber].click();
    }

    async selectCategoryAndVerifySorting(category, elementSelector) {
        await (await this.sortCategory(category)).waitForDisplayed();
        await (await this.sortCategory(category)).click(); 
        let ele = await elementSelector;
        for(let i = 1; i < ele.length; i++) {
            return await ele[i].getHTML();
        }
    }

    async selectProducerAndVerifyResult(producerName, selector) {
        await (await this.getProducerName(producerName)).waitForDisplayed();
        await (await this.getProducerName(producerName)).click();
        await this.clickOnShowBtn();
        let ele = await selector;
        for(let i = 1; i < ele.length; i++) {
            return await ele[i].getHTML();
        }
    }

    async clickOnShowBtn() {
        await this.filterShowBtn.waitForDisplayed();
        await this.filterShowBtn.click();
    }

    async addProductToComparison(productId) {
        await this.itemPreviewCard[productId].waitForDisplayed();
        await this.compareCheckBox[productId].waitForDisplayed();
        await this.compareCheckBox[productId].click();
    }
}

module.exports= new CatalogPage();