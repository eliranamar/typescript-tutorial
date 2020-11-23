// basic
const inputs = document.querySelectorAll('input')

inputs.forEach((input) => {
  console.log(input);
})

const circ = (diameter: number) => {

  return diameter * Math.PI;

}

console.log(circ(3));

let a = 3;

let s: string;

s = 'good';
// s = 6

// a = 'hi';

// Arrays
const numsArr: string[] = ['one', 'two']

// arr.push(3);
numsArr.push('three');


const mixedArr: (string | number)[] = [3, 'test']

mixedArr.push(6);
mixedArr.push('some');

// objects

let obj = {
  name: 'Mark',
  belt: 'yellow',
  age: 30,
}

// obj.age ='test';
// obj = {
//   name: 'sh',
//   belt: 2,
//   age: '5,'
// }


let obj2: object;

obj2 = { test: 1 };
obj2 = [];


let obj3: {name: string};

// obj3 = [];
