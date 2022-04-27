'use strict';
console.clear();

function loop() {
  const array = [];
  // var과 let의 차이점!
  for (var i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
      console.log(arr);
    });
  }
  return array;
}

const array = loop();
array.forEach((fn) => fn());
