/**
 * {@link https://leetcode-cn.com/problems/climbing-stairs/}
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;

  let temp1 = 1;
  let temp2 = 2;

  for (let i = 3; i <= n; i++) {
    const temp = temp2;
    temp2 = temp1 + temp2;
    temp1 = temp
  }

  return temp2
};

console.log(climbStairs(2)) // 2
console.log(climbStairs(3)) // 3
console.log(climbStairs(30)) // 3