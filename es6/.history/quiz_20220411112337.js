'use strict';

let num = 2;
let res;

num % 2 === 0 ? (res = 'up') : (res = 'down');
console.log(res);

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.clear();

const sum = (a, b) => a + b;
const multiply = (a, b) => a + b;
console.log(add(1, 2));
console.log(sum(2, 4));

(function something() {
  console.log(1 + 2);
})();

function calculate(a, b, action) {
  const result = action(a, b);
  console.log(result);
  return result;
}

calculate(1, 5);
