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

// Quiz

{
  const iterable() {
    let n  = 0;
    lreturn {
      next: function () {
        n+=2;
        return {value:n, done:false}
      }
    }
  }
}