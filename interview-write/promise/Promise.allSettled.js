const one = new Promise((resolve) => {
  setTimeout(() => {
    console.log('one');
    resolve(1);
  }, 1000);
});
const two = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('two');
    reject(2);
    resolve(2);
  }, 2000);
});
const three = new Promise((resolve) => {
  setTimeout(() => {
    console.log('three');
    resolve(3);
  }, 3000);
});

Promise.allSettled([one, two, three]).then((val) => {
  console.log('Promise.all success', val);
}).catch((error) => {
  console.log('Promise.all reject', error);
});

/**
 * @title 实现Promise.allSettled方法
 * @description 所以promise均返回结果才结束（无论成功失败）
 * @link https://es6.ruanyifeng.com/#docs/promise#Promise-allSettled
 */

const allSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let returnValue = [];
    let sum = 0;
    promises.forEach(promise => {
      promise.then((val) => {
        returnValue.push({ status: 'fulfilled', value: val });
      }).catch((error) => {
        returnValue.push({ status: 'rejected', reason: error });
      }).finally(() => {
        sum++;
        if (sum === promises.length) resolve(returnValue);
      });
    });
  });
};

allSettled([one, two, three]).then((val) => {
  console.log('all success', val);
}).catch((error) => {
  console.log('all reject', error);
});;

// one
// two
// three
// Promise.all success [ 1, 2, 3 ]
// all success [ 1, 2, 3 ]