/* eslint-disable no-undef */
const Base = require('./base');

class SubPage extends Base {
    get leftHandLIst() {
        return $(".sidebar_njMd nav");
    }

    get navigateToProtocol() {
        return $('h2#navigateto');
    }
}

module.exports = new SubPage();