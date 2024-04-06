/* eslint-disable no-undef */
class Base {
    async openPage(url) {
        await browser.url(url);
    }

    async switchToWindowNumber(number) {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[number]);
    }
}

module.exports = Base;