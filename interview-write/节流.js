/**
 * @description 节流，将高频操作转化为每隔一段时间执行一次，比如监测浏览器滚动事件和缩放事件
 */

function throttle(func, delay = 120) {
  let timer = null;
  return function (...args) {
    // 一段时间内第一次需要立即执行
    if (timer === null) {
      func.apply(this, args);
      timer = false;
      return;
    }
    if (timer) return;
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = null;
    }, delay);
  };
}


// 验证函数正确性
function tempFunc(...args) {
  console.log(args);
}
const temp = throttle(tempFunc, 1000);

let i = 0;
setInterval(() => {
  temp('val', i);
  i++;
}, 200); // 0 5 10 ...
