class MainHelper {

    async verifyIsDisplayed(element) {
        try{
    await element.isDisplayed();
        } catch(err) {
           console.error(err);
        }
}
    async clickOnElement(icon) {
       await icon.click();
    }

    async getPageUrl() {
        await browser.getUrl();
    }

    async getPageTitle() {
        await browser.getTitle();
    }
}

module.exports = new MainHelper();