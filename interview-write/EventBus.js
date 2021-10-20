/**
 * @description 事件总线. 发布订阅模式
 */

class EventBus {
  constructor() {
    this.events = {};
  }

  // 订阅
  on(name, fn) {
    this.events[name] = this.events[name] || [];
    this.events[name].push(fn);
  }

  // 发布
  emit(name, ...params) {
    if (Object.prototype.toString.call(this.events[name]) !== "[object Array]") return;

    this.events[name].forEach(fn => {
      fn.apply(this, params);
    });
  }
}

const temp1 = new EventBus();

temp1.on('one', (...val) => {
  console.log(...val); // 12
});
temp1.on('one', (...val) => {
  console.log(val); // [1,2]
});
temp1.emit('one', 1, 2);
