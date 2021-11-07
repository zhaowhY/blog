/**
 * JavaScript深入之继承的多种方式和优缺点 {@link https://github.com/mqyqingfeng/Blog/issues/16}  
 */

/** Object.create(obj) 代码实现 
 * 原型继承 = Object.create(obj)，仅继承特定的obj
 * @description 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__，即a.__proto__ = obj
 */
function myCreate(obj) {
  function F() { }
  F.prototype = Object(obj);
  return new F();
}

// 原型链继承, 继承所有内容，即new Parent()
// Child.prototype = Object.create(Parent.prototype);
Child.prototype = new Parent();


// 继承!!!!!!!!!!
// 1. 执行Parent构造函数代码 
// 2. Object.create继承Parent.prototype（否则每次实例化Child时，都会new Parent中所有内容）
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

function Child(name, age) {
  Parent.call(this, name); // 1. 执行Parent构造函数代码
  this.age = age;
}

// 这一步 不能写 Child.prototype = new Parent(); 这样每次都会执行Parent 构造函数内容
Child.prototype = Object.create(Parent.prototype); // 2. Object.create继承Parent.prototype


const child1 = new Child('kevin', 18);






