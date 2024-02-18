let num1 = 3487;
let num2 = 3794;

let newArr1 = num1.toString().split('');
let newArr2 = num2.toString().split('');

let sumNumbers = 0;
let sumIndex = 0;

let matched = newArr1.filter(el => newArr2.includes(el));


for (let i = 0; i < newArr1.length; i++) {
    
    if (newArr1[i] === newArr2[i]) {
        sumIndex += 1;
        sumNumbers = matched.length - 1;
    } else {sumIndex += 0;}
}