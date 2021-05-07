/**
 * @description 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
 */

function myCreate(obj) {
  function F() { }
  F.prototype = obj;
  return new F()
}