/**
 * {@link https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/}
 */

/**
 * @description 增量
 * @param {number} n
 * @return {number}
 */
var fib1 = function (n) {
  const temp = [0, 1];

  if (n === 0) return 0;
  if (n === 1) return 1;


  for (let i = 2; i <= n; i++) {
    temp[i] = (temp[i - 1] + temp[i - 2]) % 1000000007;
  }

  return temp[n];
};

console.log(fib1(2), fib1(81))

/**
 * @description 递归
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {

  if (n === 0) return 0;
  if (n === 1) return 1;

  return (fib(n - 1) + fib(n - 2)) % 1000000007;
};

console.log(fib2(2), fib2(81))
