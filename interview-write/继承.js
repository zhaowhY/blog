/**
 * @description 继承 1. es5原型继承 2. 原型链继承 3. 构造函数继承（经典继承） 4. 组合继承  5. 寄生继承
 * JavaScript深入之继承的多种方式和优缺点 {@link https://github.com/mqyqingfeng/Blog/issues/16}  
 */

/**
 * @description 1. es5原型继承 (Object.create)
 * 缺点：包含引用类型的属性值会共享相应的值，和原型链一样
 */
function myCreate(obj) {
  function F() { }
  F.prototype = obj;
  return new F()
}

/**
 * @description 2. 原型链继承
 * 缺点：包含引用类型的属性值会共享相应的值，和es5原型继承一样
 */
function Parent() {
  this.name = 'name'
}
Parent.prototype.getName = function () {
  console.log(this.name)
}
function Child() { }
Child.prototype = new Parent()


/**
 * @description 3. 构建函数继承(经典继承)
 * 优点：1. Child可以给Parent传参，2. 避免了引用类型被所有实例共享(每个实例都有自己的obj)
 * 缺点：每次创建实例时，都会执行一边Parent构造函数
 */
function Parent(obj) {
  this.obj = obj
}
function Child() {
  Parent.call(this, { val: '' })
}


/**
 * @description 3. 组合继承 构造函数继承+原型链继承
 * 优点：融合二者的优点，1. 仅调用两次Parent构造函数，Child实例利用原型链访问Parent  2. 可以传参  + 避免了引用类型被所有实例共享
 * 
 */
function Parent(name) {
  this.name = name;
}

Parent.prototype.getName = function () {
}
function Child(name) {
  Parent.call(this, name);
}

Child.prototype = new Parent();
Child.prototype.constructor = Child; // Object.prototype.constructor 返回实例对象的Object构造函数引用，不写则指向Parent函数

/**
 * @description 4. 寄生组合式继承 (原型链继承+构造函数继承（经典继承）+es5原型继承)
 * 组合继承中调用链两次Parent构造函数，此继承中利用es5继承减少一次Parent构建函数执行
 */
// 
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
  console.log(this.name)
}
function Child(name, age) {
  Parent.call(this, name); // 组合继承
  this.age = age;
}
// 关键的三步,寄生式继承 作用：减少一次Parent构建函数执行
var F = function () { };
F.prototype = Parent.prototype; // 原型继承
Child.prototype = new F();

var child1 = new Child('kevin', '18');
console.log(child1);