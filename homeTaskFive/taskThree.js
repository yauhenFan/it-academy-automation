let arr = [12, 15, 20, 25, 59, 79];

function taskThree(arrayValue) {
    let arrLen = arrayValue.length;
    let aryth = arrayValue.reduce((sum, current) => (sum + current))/arrLen;
    return aryth;
}
