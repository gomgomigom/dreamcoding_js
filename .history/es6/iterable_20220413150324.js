'use strict';

console.clear();
{
  const array = [11, 22, 33];
  console.log(array.values());
  console.log(array.entries());
  console.log(array.keys());

  for (let item of array.values()) {
    console.log(item);
  }
  for (let item of array.entries()) {
    console.log(item);
  }
  for (let item of array.keys()) {
    console.log(item);
  }
}
