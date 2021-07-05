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
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
    else return mid;
  }
  // null、undefined和其他任何结果的比较值都为false。
  // splice(idx, 0, nums[idx])
  return nums[left] > target ? left : left + 1;
};