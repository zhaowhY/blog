// 重点看bind

/**
 * @description 实现apply
 */
Function.prototype.myapply = function (obj, params) {
  if (typeof this !== 'function' || !Array.isArray(params)) throw new Error('参数有误');
  if (!obj) {
    this(params);
    return;
  }
  obj.fn = this; // this是一个具体方法
  obj.fn(params);
};

/**
 * @description 实现call
 */
Function.prototype.mycall = function (obj, ...params) {
  if (typeof this !== 'function') throw new Error('参数有误');
  if (!obj) {
    this(params);
    return;
  }
  obj.fn = this; // this是一个具体方法
  obj.fn(...params);
};


/** bind 重点!!!
 * @description 实现bind
 */
Function.prototype.mybind = function (obj, ...params) {
  if (typeof this !== 'function') throw new Error('参数有误');

  const self = this;

  // 看继承，1. 执行this构建函数方法 2. prototype继承obj
  const Child = function (...args) {
    return self.call(obj, ...params, ...args);
  };

  Child.prototype = Object.create(obj);

  return Child;
};

function sayName(...arr) {
  console.log(this.name, ...arr); // undefined
}

var obj = {
  name: 'obj'
};

// sayName.myapply(null, [1, 2, 3])
// sayName.myapply(obj, [1, 2, 3])
// sayName.mycall(obj, [1, 2, 3])
const bindFunc = sayName.mybind(null, [1, 2, 3]);
bindFunc(4, 5);

// 当一个绑定函数是用来构建一个值的，原来提供的 this 就会被忽略。
function Point(...params) {
  console.log(this.name);
  this.name = params;
  // console.log(this.name)
}
const newBindFunc = Point.mybind(obj, 8);
newBindFunc(); // obj,  this 指向obj
new newBindFunc(1, 2, 3); // undefined this指向Point, 不指向obj



