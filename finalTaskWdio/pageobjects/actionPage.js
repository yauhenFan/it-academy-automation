const Base = require('./base');

class ActionPage extends Base {
    get actionPageName() {
        return $('//div[@class = "main"]/h1[text() = "Акции в «ЭЛЕКТРОСИЛА»"]')
    }

    get logoImg() {
        return $('//div[@class = "top"]//a/img[@class = "logo_sila"]');
    }
}

module.exports = new ActionPage();