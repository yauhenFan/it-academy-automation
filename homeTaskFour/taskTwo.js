let inNum = 15;
let num = 3;
let sum = 0;
let sum1 = 0;
let min = 1;
let el = 0;
let el1 = 0;
let arr = [];
let arr1 = [];

// Solution for numbers

for (let i = 0; i < num -1; ++i) {
    let max = inNum - el;
    el = Math.floor(Math.random() * (max - min) + min);
    arr.push(el);
    sum += el;
    if (arr.length === 2) {
        let dif = inNum - sum;
        arr.push(dif);
    } else {(console.log('Error'));}
}
// Solution for float numbers

for (let i = 0; i < num -1; ++i) {
    let max1 = inNum - el1;
    el1 = (parseFloat(Math.random() * (max1 - min) + min)).toFixed(2);
    arr1.push(el1);
    sum1 += parseFloat(el1);
    if (arr1.length === 2) {
        let dif1 = (inNum - sum1).toFixed(2);
            console.log(dif1);
            arr1.push(dif1);
    } else {(console.log('Error'));}
}
