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
    this.name = name;
    this.task = [() => { this.hello(); }];
    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    if (this.task.length > 0) {
      this.task.shift()();
    }
    return this;
  }

  hello() {
    console.log(`Hi This is ${this.name}!`);
    this.next();
    return this;
  }

  sleep(delay) {
    this.task.push(
      () => {
        setTimeout(() => {
          console.log('Wake up after ' + delay);
          this.next();
        }, delay * 1000);
      }
    );
    return this;

  }

  sleepFirst(delay) {
    this.task.unshift(
      () => {
        setTimeout(() => {
          console.log('Wake up after ' + delay);
          this.next();
        }, delay * 1000);
      }
    );
    return this;
  }

  eat(food) {
    this.task.push(() => {
      console.log(`Eat ${food}!`);
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




