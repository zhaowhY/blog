/**
 * {@link https://leetcode-cn.com/problems/jump-game/}
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (!Array.isArray(nums) || nums.length <= 1) return true;

  let max = nums[0];
  let i = 0;
  while (i <= max) {
    max = Math.max(max, i + nums[i]);
    if (max >= nums.length - 1) return true;
    i++;
  }
  return false;
};

console.log(canJump([0])); // true;
console.log(canJump([1, 2, 3])); // true;
console.log(canJump([3, 2, 1, 0, 4])); // false;;

