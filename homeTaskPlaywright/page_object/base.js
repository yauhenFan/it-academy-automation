class Base {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await this.page.goto(url);
    }
}

module.exports = Base;