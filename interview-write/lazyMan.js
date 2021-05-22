// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan("Hank")输出:
// Hi! This is Hank!
//  
// LazyMan("Hank").sleep(10).eat("dinner")输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
//  
// LazyMan("Hank").eat("dinner").eat("supper")输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
//  
// LazyMan("Hank").sleepFirst(5).eat("supper")输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
//  
// 以此类推。

class LazyMan {
  constructor(name) {
    this.name = name;
    this.task = [() => hello];
    setTimeout(this.next, 0);
  }

  next() {
    console.log(this.task);
    console.log(this.task.length);
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
        }, delay);
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
        }, delay);
      }
    );
    return this;
  }

  eat(food) {
    this.task.push(() => {
      console.log(`Eat ${food}!`);
    });
    this.next();
    return this;
  }
}
new LazyMan("Hank").sleepFirst(5).eat("supper");





