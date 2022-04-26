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

console.clear();
// global
{
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

  const decode = decodeURIComponent(encode);
  console.log(decode);
}

console.clear();
{
  const num = 12345678910;
}
// quiz
{
  const text = 'Hello World!';
  for (let value of text) {
    console.log(value);
  }
}
{
  const ids = 'user1, user2, user3, user4';
  console.log(ids.split(', '));
}
{
  const now = new Date();

  function test(fn, delay) {
    fn;
    setInterval(() => console.log(fn), delay);
  }
  test(now.toTimeString(), 1000);
}
