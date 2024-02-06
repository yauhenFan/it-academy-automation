//When the initial array is changed

let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 =arr1.reverse();

// When initial array stays without changes

let arr3 = [1, 2, 3, 4, 5, 6]
let arr4 = [];

for (let i = arr3.length - 1; i >=0; i--) {
    arr4.push(arr3[i]);
}