/**
 * {@link https://leetcode-cn.com/problems/min-cost-climbing-stairs/}
 */

/**
 * @param {number[]} cost
 * @return {number}
 * cost 的长度范围是 [2, 1000]
 */
var minCostClimbingStairs = function (cost) {
  const dp = [0, 0];
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[cost.length];
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));