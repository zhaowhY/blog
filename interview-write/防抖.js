/**
 * 
 * @description 防抖, 规定时间内多次高频操作转化为仅最后一次操作起作用，比如输入内容校验，只在用户高频输入完成后进行一次校验
 *  _.debounce(func, [wait=0])
 */

function debounce(func, delay = 120) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


// 验证函数正确性
function tempFunc(...args) {
  console.log(args);
}

const temp = debounce(tempFunc, 700);

let idx = 0;
function test() {
  idx++;

  setTimeout(() => {
    if (idx <= 4) {
      temp('val', idx);
      test();
    };
  }, idx * 200);  //200 400 600 800
}

test(); // 3, 4