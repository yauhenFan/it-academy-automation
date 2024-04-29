const Base = require('./base');

class HomePage extends Base {
    get anouncementBanner() {
        return $("div.announcementBar_mb4j");
    }

    get languageSelect() {
        return $('div.navbar__item.dropdown > a');
    }

    get currentLanguageValue() {
        return $("//div[@class = 'navbar__item dropdown dropdown--hoverable dropdown--right']/a");
    }

    dropDownLanguageValue(liNumber) {
        return $(`//div[@class = 'navbar__item dropdown dropdown--hoverable dropdown--right']//li[${liNumber}]`)
    }

    get welcomeIcon() {
        return $('div.ms-rotate-0.ms-flex.ms-h-full');
    }

    navMenuOptions(option) {
        return $(`//div[@class = 'navbar__inner']//a[text() = '${option}']`)
    }
}

module.exports = HomePage;