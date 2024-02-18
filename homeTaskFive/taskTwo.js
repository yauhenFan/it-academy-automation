function taskTwo (strArr) {
    let arr = strArr.split('');
    let arr1 = arr.slice(0, arr.length/2);
    
    let arr2 = arr.slice(arr.length/2);
    console.log(arr2);

    let sum1 = arr1.reduce((sum, current) => sum + current);
    let sum2 = arr2.reduce((sum, current) => sum + current);

    if (sum1 === sum2) {
        console.log('да');
    } else {console.log('нет');}
}

taskTwo('33333333');
