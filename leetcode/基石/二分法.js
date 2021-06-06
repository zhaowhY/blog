/**
 * @description 二分法 O(logn)
 * @param {number[]} nums 有序数组
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  // nums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (true) {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
};