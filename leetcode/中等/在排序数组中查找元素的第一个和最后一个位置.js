/**
 * {@link https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/}
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

  // 二分法
  let start = 0;
  let end = nums.length - 1;
  while (true) {
    if (start > end) return [-1, -1];
    const mid = Math.floor((start + end) / 2);
    if (target < nums[mid]) end = mid - 1;
    else if (target > nums[mid]) start = mid + 1;
    else {
      start = mid;
      end = mid;
      while (nums[start - 1] === target) {
        start--;
      }
      while (nums[end + 1] === target) {
        end++;
      }
      return [start, end];
    }
  }
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]