/**
 * @description new 操作符
 * 1. 创建一个继承传入对象的prototype的新对象
 * 2. 以新对象this的作为上下文，执行传入对象构造函数中的代码
 * 3. 返回该新对象;
 */


function myNew(A, ...rest) {
  // es5原型继承， 1. 创建一个继承传入对象的prototype的新对象
  const _constructor = Object.create(A.prototype);

  // 3. 以新对象this的作为上下文，执行传入对象构造函数中的代码
  const obj = A.apply(_constructor, rest);
  // 4. 返回该新对象;
  return obj;
}