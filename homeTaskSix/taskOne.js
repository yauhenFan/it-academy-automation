function newFunc(N, M) {
let arr = [0, 1];
let el = 0;

for (let i = 2; i <= M; i++) {
 el = i <= 1 ? i : arr[i-1] + arr[i-2];
 arr.push(el);
}
 return arr.slice(N);
}

console.log(newFunc(1, 8));