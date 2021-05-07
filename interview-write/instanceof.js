/**
 * @description instanceof 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 */

function myInstanceof(left, right) {
  if (left.__proto__ === null) return false;

  if (left.__proto__ === right.prototype) {
    return true
  } else {
    return myInstanceof(left.__proto__, right)
  }
}

function F() { }
console.log(myInstanceof(F, Function))
console.log(myInstanceof(F.prototype, Object))
console.log(myInstanceof(F, Object)) // = F.prototype 调用其上的__proto__
console.log(myInstanceof(new F(), F))