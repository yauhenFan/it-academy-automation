const BodyCareEquip = require('./bodyCareEquip');
const cookEquip = require('./cookEquip');
const equipSet = require('./equipSet');
const Equipment = require('./equipment');
const houseKeep = require('./houseKeep');
const Razor = require('./razor');
const washEquip = require('./washEquip');

let bodyCare1 = new BodyCareEquip('hair_Dryer', 1.5, 'hair');
let shaveOne = new Razor('Electric Razor', 0.2, 'beard', 'face');
let dishWasher = new washEquip('dishWash_Machine', 2, 'dishes');
let washMachine = new washEquip('washing_Machine', 2.5, 'dishes');

bodyCare1.setIsPluged(true);
shaveOne.setCharging('battery');
washMachine.setIsPluged(true);

equipSet.addEquip(bodyCare1);
equipSet.addEquip(shaveOne);
equipSet.addEquip(dishWasher);

equipSet.addEquip(washMachine);

console.log(equipSet.getConsumptionSum());
console.log(equipSet.filterByElectricityConsumption(1, true));