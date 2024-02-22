class EquipSet {
    constructor() {
        this.set = [];
    }

    addEquip(equip) {
        this.set.push(equip);
    }

    getConsumptionSum() {
        let consumptionCapacity = 0;
       for (let equip of this.set){
        consumptionCapacity += equip.consumptionCapacity;
       }
        return consumptionCapacity;
    }

    filterByElectricityConsumption(consumptionCapacity, isPlugedIn) {
        return this.set.filter((equip) => equip.consumptionCapacity > consumptionCapacity && equip.isPlugedIn === isPlugedIn);
    }
}

module.exports = new EquipSet();