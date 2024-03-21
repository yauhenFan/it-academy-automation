
function getNum() {
    return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * (5 - 1 + 1) +1));
    }, 3000)
})
}

async function waitNum(result) {
    let res = await getNum(result);
    let sqrtCalc = Math.pow(res, 2);
    return console.log(sqrtCalc);
}

waitNum();