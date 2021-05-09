try {
  throw new Error();
} catch (error) {
  var test = 'aa';
  let temp1 = 'b';
  console.log(error);
}
console.log(test);
console.log(temp1);