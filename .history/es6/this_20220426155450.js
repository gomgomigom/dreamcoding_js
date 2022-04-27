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

const cat1 = new Cat('야옹');
const cat2 = new Cat('야옹');
