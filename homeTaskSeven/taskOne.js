//Solution for chains of promises

const prom1 = new Promise((resolve, reject) => {
    const ran1 = Math.floor(Math.random() * (5 - 1) + 1);
    setTimeout(() => {
        resolve('Success')
    }, ran1 * 1000)
})
.then((result) => {
    return 1;
});

const prom2 = new Promise((resolve, reject) => {
    const ran2 = Math.floor(Math.random() * (5 - 1) + 1);
    setTimeout(() => {
        resolve('Success');
    }, ran2 * 1000)
})
.then((result) => {
    return 2;
});

const prom3 = new Promise((resolve, reject) => {
    const ran3 = Math.floor(Math.random() * (5 - 1) + 1);
    setTimeout(() => {
        resolve('Success')
    }, ran3 * 1000)
})
.then((result) => {
    return 3;
});

Promise.race([prom1, prom2, prom3]).then((value) => {
    console.log(`This is the result of chains ====> ${value}`);
},
(error) => {
    console.log(`This is the failure reason ${error}`)
});


// Silution for async await

const prom11 = new Promise((resolve, reject) => {
    const ran1 = Math.floor(Math.random() * (5 - 1) + 1);
    setTimeout(() => {
        resolve(1)
    }, ran1 * 1000)
});

const prom22 = new Promise((resolve, reject) => {
    const ran2 = Math.floor(Math.random() * (5 - 1) + 1);
    setTimeout(() => {
        resolve(2);
    }, ran2 * 1000)
});

const prom33 = new Promise((resolve, reject) => {
    const ran3 = Math.floor(Math.random() * (5 - 1) + 1);
    setTimeout(() => {
        resolve(3)
    }, ran3 * 1000)
});

async function promRace() {
    let promResult = [prom11, prom22, prom33];
    let result = await promResult;
    Promise.race(promResult).then((result) => console.log(`This is the result of async/await ====> ${result}`));
}

promRace();