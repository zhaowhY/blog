/**
 * @description new 操作符
 * 1. 以构造函数的作用域（包含prototype）创建一个新的对象
 * 2. 将新创建的对象作为this的上下文，执行构造函数中的代码
 * 3. 返回该新对象;
 */


function myNew(A, ...rest) {
  // es5原型继承， 1. 以构造函数的作用域（包含prototype）创建一个新的对象
  const _constructor = Object.create(A.prototype);

  // 3. 将新创建的对象作为this的上下文，执行构造函数中的代码
  const obj = A.apply(_constructor, rest);
  // 4. 返回该新对象;
  return obj;
}