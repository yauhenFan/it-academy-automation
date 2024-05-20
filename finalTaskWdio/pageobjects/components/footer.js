const Base = require('../base')

class Footer extends Base {
    async getMediaIcon(number) {
        return $(`#footer div.foot_soc a:nth-child(${number})`);
    }
}


module.exports = new Footer();