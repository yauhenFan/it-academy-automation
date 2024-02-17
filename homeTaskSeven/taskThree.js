function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) +min); 
 }

function getNum(number, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number);
        }, timeout)
    })
}

async function twoFunc() {
    let res1 = await getNum(ranNum(1, 5), 3000);
    let res2 = await getNum(ranNum(6, 10), 5000);
    return console.log(res1 + res2);
};

twoFunc();