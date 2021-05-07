const one = new Promise((resolve) => {
  setTimeout(() => {
    console.log('one')
    resolve()
  }, 1000);
});
const two = new Promise((resolve) => {
  setTimeout(() => {
    console.log('two')
    resolve()
  }, 2000);
});
const three = new Promise((resolve) => {
  setTimeout(() => {
    console.log('three')
    resolve()
  }, 3000);
});

Promise.all([one, two, three]).then(() => {
  console.log('Promise.all success')
})

// 实现all方法
const all = function (promises) {
  let resolveSum = 0;
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(() => {
        resolveSum++;
        if (resolveSum === promises.length) {
          resolve()
        }
      }).catch(() => {
        reject()
      })
    })
  })
}

all([one, two, three]).then(() => {
  console.log('all success')
})

// one
// two
// three
// Promise.all success
// all success