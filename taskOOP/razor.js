const BodyCareEquip = require('./bodyCareEquip');

class Razor extends BodyCareEquip{
    constructor(equipType, consumptionCapacity, typeOfBody,facePart) {
        super(equipType, consumptionCapacity, typeOfBody);
        this.facePart = facePart;
    }
}

module.exports = Razor;