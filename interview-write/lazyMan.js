// 实现一个LazyMan，可以按照以下方式调用:
// lazyMan("Hank")输出:
// Hi! This is Hank!
//  
// lazyMan("Hank").sleep(10).eat("dinner")输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
//  
// lazyMan("Hank").eat("dinner").eat("supper")输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
//  
// lazyMan("Hank").sleepFirst(5).eat("supper")输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
//  

class LazyMan {
  constructor(name) {
    this.funcs = [() => { console.log(` Hi! This is ${name}!`); this.next(); }];
    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    const fn = this.funcs.shift();
    if (typeof fn === 'function') fn();
  }

  sleep(time) {
    this.funcs.push(() => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time);
    });
    return this;
  }
  sleepFirst(time) {
    this.funcs.splice(-1, 0, () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time);
    });
    return this;
  }

  eat(food) {
    this.funcs.push(() => {
      console.log(`Eat ${food}`);
      this.next();
    });
    return this;
  }
}
const lazyMan = (name) => new LazyMan(name);

// lazyMan("Hank");
lazyMan("Hank").sleep(3).eat("dinner");
// lazyMan("Hank").eat("dinner").eat("supper");
// lazyMan("Hank").sleepFirst(3).eat("supper");




