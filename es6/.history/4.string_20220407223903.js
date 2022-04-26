'use strict';

let string = 'hello';
string = 'hi!';
console.log(string);

// 특수문자
string = '안녕! \n줄바꿈 \t\t 탭  \\dd';
console.log(string);

// 템플릿 리터럴 Template Literal
let id = 'ellie';
let greetings = `hello!, ${id} have a nice day`;

console.log(greetings);
console.log();
