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

console.clear();
{
  // 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
  // 단, 주어진 배열을 수정하지 않도록!
  const arr = ['🍌', '🍓', '🍇', '🍓'];
  let result = [];
  for (let item of arr) {
    console.log(item);
    item == '🍓' ? result.push('🥝') : result.push(item);
  }
  console.log(arr);
  console.log(result);

  // solution
  function replace(arr, from, to) {
    const replaced = [];
    for (let item of arr) {
      item === from ? replaced.push(to) : replaced.push(item);
    }
    return replaced;
  }
  const solution_result = replace(arr, '🍓', '🥝');
  console.log(solution_result);
}
{
  // 퀴즈2:
  // 배열과 특정한 요소를 전달받아,
  // 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
  const arr = ['🍌', '🥝', '🍇', '🥝'];
  console.log(
    arr.reduce((pre, cur) => {
      cur == '🥝' ? (cur = 1) : (cur = 0);
      return cur + pre;
    }, 0)
  );

  function count(array, item) {
    const result = array.reduce((pre, cur) => {
      cur === item ? (cur = 1) : (cur = 0);
      return cur + pre;
    }, 0);
    return result;
  }

  console.log(count(arr, '🥝'));

  // output: 2
}
{
  // 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
  // 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
  const arr1 = ['🍌', '🥝', '🍇'];
  const arr2 = ['🍌', '🍓', '🍇', '🍓'];
  const result = [];
  for (let item1 of arr1) {
    for (let item2 of arr2) {
      item1 == item2 ? result.push(item1) : result;
    }
  }
  console.log(result);
}

console.clear();

{
  const fruits = ['🍌', '🍓', '🍇', '🍓'];
  fruits.forEach((value) => {
    console.log(value);
  });
}
console.clear();
{
  const numbs = [1, 2, 3, 4];
  let result = numbs.map((number) => number * 2);
  console.log(result);
}
console.clear();
{
  const numbers = [0, 5, 4, 2, 1, 10];
}
