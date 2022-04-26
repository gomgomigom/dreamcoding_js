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

const printAll = (max) => {
  for (let i = 0; i <= max; i++) {
    console.log(i);
  }
};

const printAllx2 = (max) => {
  for (let i = 0; i <= max; i++) {
    console.log(i * 2);
  }
};

const iterate = (max, action) => {
  let result = action(max);
};
