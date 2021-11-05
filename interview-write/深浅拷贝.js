/**
 * @description 浅拷贝 (对象和数组)
 */
const arr = [1, { a: 1 }];
// 1. 扩展运算符
cloneArr = [...arr];
// slice 和 concat
cloneArr = arr.slice();
cloneArr = arr.concat();

const obj = { a: 1, b: { c: 1 } };
// 1. 扩展运算符
cloneObj = { ...obj };


function shallowClone(obj) {
  if (typeof obj !== 'object') return;
  const temp = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) temp[key] = obj[key];
  }
  return temp;
}
let val = { a: { b: 2 } };
console.log(val === shallowClone(val));
console.log(val.a === shallowClone(val).a);

/**
 * @description 深拷贝 递归浅拷贝 (对象和数组)
 */

function deepClone(obj) {
  if (typeof obj !== 'object') return;
  const temp = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      temp[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return temp;
}
val = { a: { b: 2 } };
console.log(val === deepClone(val));
console.log(val.a === deepClone(val).a);

/**
 * @description JSON.stringify() 知识补充
 */
// 安全的JSON值，可以使用JSON.stringify()进行深拷贝， JSON.stringify()使用到了toString()
JSON.stringify(42); // "42" 
JSON.stringify("42"); // ""42""（含有双引号的字符串） 
JSON.stringify(null); // "null" 
JSON.stringify(true); // "true"

// 不安全到JSON值：undefined, function, symbol 和包含循环引用到对象
// JSON.stringify(..) 在对象中遇到 undefined 、 function 和 symbol 时会自动将其忽略， 在 数组中则会返回 null （以保证单元位置不变）。
JSON.stringify(undefined);
JSON.stringify(function () { });
JSON.stringify([1, undefined, function () { }, 4]);
JSON.stringify({ a: 2, b: function () { } });
// undefined // undefined
// "[1,null,null,4]"
// "{"a":2}"