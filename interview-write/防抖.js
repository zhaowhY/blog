/**
 * @description 防抖, 规定时间内多次高频操作转化为仅最后一次操作起作用，比如输入内容校验，只在用户高频输入完成后进行一次校验
 * @param {Function} func 执行函数
 * @param {Number} delay 防抖时长
 */

let timer = null;
function debounce(func, delay) {
  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    func();
  }, Number(delay));
}
