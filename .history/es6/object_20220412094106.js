'use strict';
{
  console.clear();
  const number = 1321;

  console.log(number.toString());
  console.log(number);

  const text = 'text';
  console.log(text);
  console.log(text.length);
}

{
  console.clear();
  console.log(globalThis);
  console.log(this);
  console.log(Infinity);
  eval('const num =2; console.log(num)');
}
