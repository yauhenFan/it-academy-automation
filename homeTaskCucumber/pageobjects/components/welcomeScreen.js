const Base = require('../base')

class WelcomeScreen extends Base {
    get setScriptOption() {
        return $('div.ms-p-2.ms-mr-2:nth-child(1)');
    }

    get welcomeSuggestList() {
        return $('div.main-module_ms-main-bot__QKkRf div.ms-bg-transparent.ms-flex.ms-h-full:nth-child(4) > div');
    }
}

module.exports = WelcomeScreen;