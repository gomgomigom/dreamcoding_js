// 'use strict';

// let num = 2;
// let res;

// num % 2 === 0 ? (res = 'up') : (res = 'down');
// console.log(res);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.clear();

// const sum = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// console.log(sum(2, 4));

// (function something() {
//   console.log(1 + 2);
// })();

// function calculate(a, b, action) {
//   const result = action(a, b);
//   console.log(result);
//   return result;
// }

// console.log(calculate(1, 5, multiply));

// const printAll = (num) => {
//   console.log(num);
// };

// const printAllx2 = (num) => {
//   console.log(num * 2);
// };

// const iterate = (max, action) => {
//   for (let i = 0; i <= max; i++) {
//     (function (k) {
//       setTimeout(function () {
//         action(i);
//       }, i * 500);
//     })(i);
//   }
// };

// console.clear();

// // iterate(1, printAll);

// // setTimeout(() => console.log('1초..'), 500);

// class Student {
//   firstName;
//   lastName;
//   label = '1';
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.label} ${this.lastName} ${this.firstName}`;
//   }

//   set fullName(value) {
//     console.log(value);
//   }
// }

// const student = new Student('철수', '김');
// console.log(student.fullName);
// student.fullName = 341;
// console.log(student.fullName);

// console.clear();

// class Counter {
//   constructor(count) {
//     this.count = count;
//   }

//   get currentCount() {
//     return ++this.count;
//   }

//   set currentCount(number) {
//     this.count = number;
//   }
// }

// const counter = new Counter(2);
// console.log(counter.currentCount);
// counter.currentCount = 121;
// console.log(counter.currentCount);

// console.clear();

// class Counter2 {
//   #value;
//   constructor(startValue) {
//     isNaN(startValue) || startValue < 0
//       ? (this.#value = 0)
//       : (this.#value = startValue);
//   }

//   get value() {
//     return this.#value;
//   }

//   increment = () => {
//     this.#value++;
//   };
// }

// const counter2 = new Counter2('aaa');
// counter2.increment();
// console.log(counter2);
// console.log(counter2.value);

// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

console.clear();

class FullTime {
  constructor(name, division, time){
    this name = name
  }
}

class PartTime {}

const gom = new FullTime('우', 's/w', 30);
const bob = new PartTime('밥', 's/w', 20);
console.log(gom.calculatePay());
console.log(bob.calculatePay());
