'use strict';

console.clear();
{
  const arr = [11, 22, 33];
  console.log(arr.values());
  console.log(arr.entries());
  console.log(arr.keys());

  for (let item of arr.values()) {
    console.log(item);
  }
  for (let item of arr.entries()) {
    console.log(item);
  }
  for (let item of arr.keys()) {
    console.log(item);
  }
}
console.clear();
// Quiz

{
  function iterable() {
    let n = 0;
    return {
      next() {
        return { value: n * 2, done: false };
      },
    };
  }

  const n = iterable();
  console.log(n.next().done);

  // const makeIterable = (number, max, callback) => {
  //   const max = max;
  //   let number = number;
  //   return {};
  // };
}
