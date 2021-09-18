/**
 * @description 考察 var和function的变量提升  var 先于 function。 var属于声明提升（即undefined), 执行顺序不变，且执行时才赋值
 */

 

console.log(func1, func2, func3);

var func1 = function () {
  console.log('func1');
};


function func2() {
  console.log('func2');
}


var func3 = 'func3';

var func1, func2, func3;

console.log(func1, func2, func3);