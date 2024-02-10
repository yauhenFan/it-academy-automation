function taskTwo (strArr) {
    let arr1 = Array.prototype.map
    .call(strArr, (ind) => parseInt(ind))
    .slice(0, 3)
    
    let arr2 = Array.prototype.map
    .call(strArr, (ind) => parseInt(ind))
    .slice(3, 6);

    let sum1 = arr1.reduce((sum, current) => sum + current);
    let sum2 = arr2.reduce((sum, current) => sum + current);

    if (sum1 === sum2) {
        console.log('да');
    } else {console.log('нет');}
}

taskTwo('33333333');