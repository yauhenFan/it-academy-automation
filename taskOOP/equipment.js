class Equipment {
  constructor(equipType, consumptionCapacity){
    this.equipType = equipType;
    this.isPlugedIn = false;
    this.consumptionCapacity = consumptionCapacity;
  }
    setIsPluged(isPlugedIn) {
        this.isPlugedIn = isPlugedIn;
    }
}

module.exports = Equipment;
