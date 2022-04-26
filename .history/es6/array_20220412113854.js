'use strict';

console.clear();
{
  let array = new Array(3);
  console.log(array);
  let array1 = new Array(1, 2, 3);
  console.log(array1);

  array = Array.of(1, 2);
  console.log(array);

  const anotherArray = [1, 2, 3];
  console.log(anotherArray);
  array = Array.from('text');
  console.log(array);
  array = Array.from(anotherArray);
  console.log(array);
}
