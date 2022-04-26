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
const multiply = (a, b) => a * b;
console.log(sum(2, 4));

(function something() {
  console.log(1 + 2);
})();

function calculate(a, b, action) {
  const result = action(a, b);
  console.log(result);
  return result;
}

console.log(calculate(1, 5, multiply));

const printAll = (a) => {
  console.log(a);
};

const printAllx2 = (a) => {
  console.log(a * 2);
};

const iterate = (max, action) => {
  for (let i = 0; i <= max; i++) {
    action(a);
  }
};

console.clear();
iterate(5, printAllx2);

iterate(5, printAll);
