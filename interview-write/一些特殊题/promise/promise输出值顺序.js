// 一个题
const promise = new Promise(function (resolve, reject) {
  resolve(2);
  throw new Error('test'); // throw new Error 也会被catch捕获到，可以理解为reject
});
promise.then((a) => { console.log(a); }).catch(function (error) {
  console.log(11);
  console.log(error);
});

// 第一题
console.log(1);
new Promise((resolve, reject) => {
  console.log(2);
  reject(-1);
  setTimeout(() => {
    console.log(3);
    resolve(-2);
  }, 0);
}).then((value) => {
  console.log(4);
  console.log(value);
}, (value) => {
  console.log(value);
}).catch((error) => {
  console.log(5);
  console.log(error);
}).finally(() => {
  console.log(6);
});
console.log(7);;

// 1, 2, 7, -1, 6 ,3


// 第二题
let a;
const b = new Promise((resolve, reject) => {
  console.log('promise1');
  resolve();
}).then(() => {
  console.log('promise2');
}).then(() => {
  console.log('promise3');
}).then(() => {
  console.log('promise4');
});

a = new Promise(async (resolve, reject) => {
  console.log(a);
  await b;
  console.log(a);
  console.log('after1');
  await a;
  resolve(true);
  console.log('after2');
});

console.log('end');

// promise1
// undefined
// end
// promise2
// promise3
// promise4
// Promise { <pending> }
// after1


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    throw new Error(2); // ！！！ 在这种情况的setTimeout中，setTimeout直接报错，里面内容不被执行
  }, 2000);
});


const p2 = p1.then((val) => {
  console.log(val);
  return val + 1;
}).catch(err => {
  console.log(err);
  return err;
});


Promise.all([p2, Promise.reject(3)]).then((val2) => {
  console.log(val2);
}).catch(err2 => {
  console.log(err2);
});

// 3 Error:2