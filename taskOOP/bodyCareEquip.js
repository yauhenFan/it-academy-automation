const Equipment = require('./equipment');

class BodyCareEquip extends Equipment {
    constructor(equipType, consumptionCapacity, typeOfBody) {
        super(equipType, consumptionCapacity);
        this.typeOfBody = typeOfBody;
        this.chargeType = 'plug';
    } 

    setCharging(chargeType) {
        this.chargeType = chargeType;
    }
}

module.exports = BodyCareEquip;