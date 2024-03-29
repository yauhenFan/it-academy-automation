const Equipment = require('./equipment');

class CookEquip extends Equipment {
    constructor(equipType, consumptionCapacity, typeOfCook) {
        super(equipType, consumptionCapacity);
        this.typeOfCook = typeOfCook;
    }
}

module.exports = CookEquip;