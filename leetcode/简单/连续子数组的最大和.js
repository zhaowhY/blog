/**
 * @link https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 * @description 要求时间复杂度为O(n)
 * @summary 滑动窗口
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;
  for (let num of nums) {
    sum += num;
    max = Math.max(max, sum);
    if (sum < 0) sum = 0; // 巧妙之处在于 前几项如果和为负数，则舍弃，从新开始
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-2, -3])); // 6