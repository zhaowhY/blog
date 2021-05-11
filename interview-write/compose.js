/**
 * @description 函数组合
 * 1. compose的参数是函数，返回的也是一个函数
 * 2. 因为除了第一个函数的接受参数，其他函数的接受参数都是上一个函数的返回值，所以初始函数的参数是多元的，而其他函数的接受值是一元的
 * 3. compsoe函数可以接受任意的参数，所有的参数都是函数，且执行方向是 自右向左 的，初始函数一定放到参数的最右面
 * 4. pipe是从左往右，compose从右往左
 */

function compose(...funcs) {
  if (funcs.length === 0) return args => args;

  // 当funcs.length === 1 时，直接返回funcs[0]
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// 函数解释
// -----------------------------
// ////////// step1 : //////////
// -----------------------------
// a = f(a) ; b= f(b);
// 返回值: (...args) => a(b(...args))

// -----------------------------
// ////////// step2 : //////////
// -----------------------------
// a = (...args) => a(b(...args)); b = f(c);
// 返回值: (...args) => ((...args) => a(b(...args))(c(...args)))


var greeting = (firstName, lastName) => {
  return 'hello, ' + firstName + ' ' + lastName;
};
var toUpper = str => {
  return str.toUpperCase();
};
var Console = str => {
  console.log(str);
};
var fn = compose(Console, toUpper, greeting);
fn('jack', 'smith'); // ‘HELLO，JACK SMITH’


// 另外一种实现方式，循环实现
function compose2() {
  let temp = [funcs[0]];
  for (let i = 1; i < funcs.length; i++) {
    temp[i] = (...args) => temp[i - 1](funcs[i](...args));
  }
  console.log(temp);
  return temp[funcs.length - 1];
}

