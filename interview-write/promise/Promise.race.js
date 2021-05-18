const one = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('one');
    reject(1);
    resolve(1);
  }, 1000);
});
const two = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('two');
    resolve(2);
  }, 2000);
});
const three = new Promise((resolve) => {
  setTimeout(() => {
    console.log('three');
    resolve(3);
  }, 3000);
});

Promise.race([one, two, three]).then((val) => {
  console.log('Promise.race success', val);
}).catch((error) => {
  console.log('Promise.race reject', error);
});

/**
 * @description promise.race
 */

const race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((val) => {
        resolve(val);
      }).catch((error) => {
        reject(error);
      });
    });
  });
};

race([one, two, three]).then((val) => {
  console.log('race success', val);
}).catch((error) => {
  console.log('race reject', error);
});;