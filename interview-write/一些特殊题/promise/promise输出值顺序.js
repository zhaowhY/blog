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
