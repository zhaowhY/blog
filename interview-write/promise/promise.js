/**
 * @description promise
 * 三个状态：pending, rejected, fulfilled
 * resolve异步情况：callback数组
 * FIXME: resolve和reject 不是异步的（介于同步和setTimeout之间)
 */

class myPromise {
  constructor(executor) {
    this.status = 'pending';
    this.fulfilledValue = null;
    this.rejectValue = null;
    this.fulfillCallback = [];
    this.rejectCallback = [];

    let resolve = (value) => {
      if (this.status !== 'pending') return;
      this.fulfilledValue = value;
      this.status = 'fulfilled';
      this.fulfillCallback.forEach((fn) => {
        fn(this.fulfilledValue);
      });
      this.fulfillCallback = [];
    };

    let reject = (value) => {
      if (this.status !== 'pending') return;
      this.rejectValue = value;
      this.status = 'rejected';
      this.rejectCallback.forEach((fn) => {
        fn(this.rejectValue);
      });
      this.rejectCallback = [];
    };


    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(fn) {
    if (this.status === 'pending') this.fulfillCallback.push(fn);
    if (this.status === 'fulfilled') {
      try {
        fn(this.fulfilledValue);
      } catch (error) {
        throw new Error();
      }
    }
  }

  catch(fn) {
    if (this.status === 'pending') this.rejectCallback.push(fn);
    if (this.status === 'rejected') {
      try {
        fn(this.rejectValue);
      } catch (error) {
        throw new Error();
      }
    }
  }
}

console.log(0);
new myPromise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    resolve(2);
  }, 1000);
}).then((value) => {
  console.log(value);
  console.log(3);
});
console.log(4);;
// console.log('------------------')
// console.log(0)
// new myPromise((resolve, reject) => {

//   console.log(1)
//   reject(2)
// }).catch((value) => {
//   console.log(value)
//   console.log(3)
// })
// console.log(4)
