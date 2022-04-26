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

const printAll = (num) => {
  console.log(num);
};

const printAllx2 = (num) => {
  console.log(num * 2);
};

const iterate = (max, action) => {
  for (let i = 0; i <= max; i++) {
    setTimeout(() => action(i), 300);
  }
};

console.clear();
iterate(5, printAllx2);

iterate(5, printAll);

setTimeout(() => console.log('1초..'), 100);
