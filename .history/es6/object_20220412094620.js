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
  console.log(isFinite(1));
  console.log(isFinite(Infinity));
  console.clear();

  const URL = 'http://드림코딩.com';
  console.log(URL);
  const encoded = encodeURI(URL);
  console.log(encoded);

  const decoded = decodeURI(encoded);
  console.log(decoded);

  const encode = encodeURIComponent(URL);
  console.log(encode);

  const decode = decodeURI(encode);
  console.log(decode);
}
