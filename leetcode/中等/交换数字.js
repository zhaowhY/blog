/**
 * {@link https://leetcode-cn.com/problems/swap-numbers-lcci/}
 */

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function (numbers) {
  let [a, b] = numbers;

  // 1. es6结构赋值
  [a, b] = [b, a];

  // // 2, 逗号, 从左到右运算特性
  // a = b + (b = a, 0)

  return [a, b]
};

console.log(swapNumbers([1, 2])) // [2,1]