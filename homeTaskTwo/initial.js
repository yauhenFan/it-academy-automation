const fs = require('fs-extra');

const dirOne = './firstFolder';
fs.ensureDirSync(dirOne);

fs.ensureFileSync('./firstFolder/file.txt');

const dirTwo = './secondFolder';
fs.ensureDirSync(dirTwo);

fs.moveSync('./firstFolder/file.txt', './secondFolder/file.txt');

const dirThree = './thirdFoler';
fs.ensureDirSync(dirThree);

fs.copySync('./secondFolder/file.txt', './thirdFoler/newfile.txt');

fs.removeSync('./thirdFoler/newfile.txt');
fs.removeSync('./secondFolder/file.txt');

fs.removeSync(dirThree);
fs.removeSync(dirTwo);
fs.removeSync(dirOne);