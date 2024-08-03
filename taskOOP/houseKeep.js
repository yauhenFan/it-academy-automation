const Equipment = require('./equipment');

class HouseKeepEquip extends Equipment{
    constructor(equipType, consumptionCapacity, manageType) {
        super(equipType, consumptionCapacity);
        this.manageType = manageType;
    }
}

module.exports = HouseKeepEquip;
