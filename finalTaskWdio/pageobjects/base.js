class Base {
    async open(url) {
        await browser.url(url);
    }

    async maximize() {
        await browser.maximizeWindow();
    }

    async switchToWindow(number) {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[number]);
    }

    async refreshWebPage() {
        await browser.refresh();
    }
}

module.exports = Base;