const Base = require('../base');

class Banner extends Base {
    get closeBannerButton() {
        return $('button.clean-btn.close.closeButton_CVFx.announcementBarClose_gvF7');
    }
}

module.exports = Banner;