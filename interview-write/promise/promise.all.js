const one = new Promise((resolve) => {
  setTimeout(() => {
    console.log('one');
    resolve(1);
  }, 1000);
});
const two = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('two');
    // reject(2);
    resolve(2);
  }, 2000);
});
const three = new Promise((resolve) => {
  setTimeout(() => {
    console.log('three');
    resolve(3);
  }, 3000);
});

Promise.all([one, two, three]).then((val) => {
  console.log('Promise.all success', val);
}).catch((error) => {
  console.log('Promise.all reject', error);
});

/**
 * @title 实现all方法
 * @description 成功返回值，失败返回值
 */

const all = function (promises) {
  return new Promise((resolve, reject) => {
    let resolveValue = [];
    let resolveSum = 0;
    promises.forEach(promise => {
      promise.then((val) => {
        resolveSum++;
        resolveValue.push(val);
        if (resolveSum === promises.length) {
          resolve(resolveValue);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  });
};

all([one, two, three]).then((val) => {
  console.log('all success', val);
}).catch((error) => {
  console.log('all reject', error);
});;

// one
// two
// three
// Promise.all success [ 1, 2, 3 ]
// all success [ 1, 2, 3 ]