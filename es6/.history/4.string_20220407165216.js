'use strict';

let string = 'hello';
string = 'hi!';
console.log(string);

// 특수문자
string = '안녕! \n줄바꿈 \t\t 탭  \\dd';
console.log(string);

// Template Literal
let id = 'ellie';
let greetings = `hello!, ${id}`;
