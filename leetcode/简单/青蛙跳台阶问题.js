/**
 * {@link https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/}
 */

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {

  let result = 1;
  let temp1 = 1;
  let temp2 = 2;

  if (n === 1) return temp1
  if (n === 2) return temp2

  for (let i = 3; i <= n; i++) {
    result = (temp1 + temp2) % 1000000007;
    temp1 = temp2;
    temp2 = result;
  }

  return result;
};

console.log(numWays(2)) // 2
console.log(numWays(7)) // 21
console.log(numWays(0)) // 1
console.log(numWays(44)) // 134903163