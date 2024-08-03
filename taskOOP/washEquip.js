const Equipment = require('./equipment');

class WashEquipment extends Equipment {
   constructor(equipType, consumptionCapacity, washProduct) {
     super(equipType, consumptionCapacity);
     this.washProduct = washProduct;
   }
}

module.exports = WashEquipment;
