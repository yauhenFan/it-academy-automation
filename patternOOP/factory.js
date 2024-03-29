class Equipment{
    constructor(equipType, name, isPlugedIn, consumptionCapacity){
        this.equipType = equipType;
        this.name = name;
        this.isPlugedIn = isPlugedIn;
        this.consumptionCapacity = consumptionCapacity;
        }
    }

let arrEquipment = [];

class equipmentFactory{
    createEquipment(equipType, name, isPlugedIn, consumptionCapacity) {
        if(equipType.toLowerCase() === 'wash'){
           return arrEquipment.push(new Equipment(equipType, name, isPlugedIn, consumptionCapacity));
        } 
        if(equipType.toLowerCase() === 'body_care') {
            return arrEquipment.push(new Equipment(equipType, name, isPlugedIn, consumptionCapacity));
        }
        if(equipType.toLowerCase() === 'house_keeping') {
            return arrEquipment.push(new Equipment(equipType, name, isPlugedIn, consumptionCapacity));
        }
    }
}

const factory = new equipmentFactory();

let razor = factory.createEquipment('Body_care', 'razor', true, 1);
let washingMachine = factory.createEquipment('Wash', 'Washing_Machine', false, 2.5);
let dishWasher = factory.createEquipment('Wash', 'DishWashing_Machine', false, 2);
let iron = factory.createEquipment('House_keeping', 'Iron', false, 1.5);

function filterConsumption(consumption){
    return console.log(arrEquipment.filter((equip) => equip.consumptionCapacity < consumption));
};

let sumOfCapacity =0;

function sumCapacity() {
    for(let el of arrEquipment) {
        sumOfCapacity += el.consumptionCapacity;
    }
    return sumOfCapacity;
}