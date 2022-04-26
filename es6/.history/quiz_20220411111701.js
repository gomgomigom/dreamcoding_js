'use strict';

let num = 2;
let res;

num % 2 === 0 ? (res = 'up') : (res = 'down');
console.log(res);

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.clear();

const add = (a, b) => a + b;
const sum = (a, b, c) => a + b + c;
console.log(add(1, 2));
console.log(sum(1, 2, 3));

(function something() {
  console.log(1 + 2);
})();

console.log(something());
