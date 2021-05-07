/**
 * @description 节流，将高频操作转化为每隔一段时间执行一次，比如监测浏览器滚动事件和缩放事件
 * @param {Function} func 执行函数
 * @param {Number} delay 节流时长
 */

let timer = null;
function throttle(func, delay = 120) {
  if (timer) return;
  timer = setTimeout(() => {
    func();
    timer = null;
  }, Number(delay));
}

let i = 0;
setInterval(() => {
  throttle(() => {
    console.log(i)
  }, 1000)
  i++
}, 200);
