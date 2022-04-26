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
        return { value: n++ * 2, done: false };
      },
    };
  }

  const n = iterable();
  console.log(n.next().done);

  const multiple = {
    [Symbol.iterator]: () => {
      const max = 10;
      let num = 0;
      return {
        next() {
          return { value: num++ * 2, done: num > max };
        },
      };
    },
  };

  for (let item of multiple) {
    console.log(item);
  }

  console.log('----');
  function makeIterable(initialValue, maxValue, callback) {
    return {
      [Symbol.iterator]: () => {
        const max = maxValue;
        let num = initialValue;
        return {
          next() {
            return { value: callback(num++), done: num > max };
          },
        };
      },
    };
  }

  const multiple2 = makeIterable(0, 22);
}
