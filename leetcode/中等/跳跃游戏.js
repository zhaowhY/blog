/**
 * {@link https://leetcode-cn.com/problems/jump-game/}
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const dp = new Array(nums.length).fill(0);
  let max = nums[0];
  if (max >= nums.length - 1) return true;
  for (let i = 0; i <= max; i++) {
    dp[i] = i + nums[i];
    max = Math.max(max, dp[i]);

    if (max >= nums.length - 1) return true;

  }
  return false;
};

console.log(canJump([0])); // true;
console.log(canJump([1, 2, 3])); // true;
console.log(canJump([3, 2, 1, 0, 4])); // false;;

