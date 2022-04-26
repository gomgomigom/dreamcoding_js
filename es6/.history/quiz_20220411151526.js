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
    (function (k) {
      setTimeout(function () {
        action(i);
      }, i * 500);
    })(i);
  }
};

console.clear();

// iterate(1, printAll);

// setTimeout(() => console.log('1초..'), 500);

class Student {
  firstName;
  lastName;
  label = '1';
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.label} ${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log(value);
  }
}

const student = new Student('철수', '김');
console.log(student.fullName);
student.fullName = 341;
console.log(student.fullName);

console.clear();

class Counter {
  constructor(count) {
    this.count = count;
  }

  get currentCount() {
    return ++this.count;
  }

  set currentCount(number) {
    this.count = number;
  }
}

const counter = new Counter(2);
console.log(counter.currentCount);
counter.currentCount = 121;
