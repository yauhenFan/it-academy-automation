let run1 = (Math.round(Math.random() * 6) + 1);
let run2 = (Math.round(Math.random() * 6) + 1);
let sum1 = 0;
let sum2 = 0;
let num = 3;

for (let i = 0; i < num; i++) {
    sum1 += run1;
    sum2 += run2;
}

if (sum1 > sum2) {
    console.log('Player one is a winner');
} else if (sum1 < sum2) {
    console.log('Player two is a winner')
} else if (sum1 === sum2) {
    console.log('There are no winners');
} else {console.log('Something goes wrong')};