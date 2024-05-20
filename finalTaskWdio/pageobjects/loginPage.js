const Base = require('./base')

class LoginPage extends Base {
    get phoneInput() {
        return $('div.form_main input.form_phone');
    }

    get errorPhoneInput() {
        return $('div.form_main input.form_phone.red');
    }

    get submitBtn() {
        return $('div.form_main input.form_submit');
    }

}

module.exports = new LoginPage();