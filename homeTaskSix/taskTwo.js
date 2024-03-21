let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['a', 'b', 'c'];

function insertArr(n, arrName) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.splice(n + i, 0, arrName[i]);
    }
        return arr1;
}