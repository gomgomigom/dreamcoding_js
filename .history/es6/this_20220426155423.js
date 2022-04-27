'use strict';

console.clear();

console.log(this);

const x = 0;
module.exports.x = x;

console.log(this);
console.log(globalThis);

console.clear();

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
