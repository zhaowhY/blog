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
lazyMan("Hank").sleep(1000).eat("dinner");