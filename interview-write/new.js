/**
 * @description new 操作符
 * 1. 创建一个新的对象
 * 2. 将构造函数的作用域赋给新的对象
 * 3. 执行构造函数中的代码
 * 4. 返回新的对象
 */


function myNew(A, ...rest) {
  // 1. 创建一个新的对象; 2.将构造函数的作用域赋给新的对象;
  const _constructor = Object.create(A.prototype);

  // 3.执行构造函数中的代码;
  const obj = A.apply(_constructor, rest);
  // 4. 返回新的对象;
  return obj;
}