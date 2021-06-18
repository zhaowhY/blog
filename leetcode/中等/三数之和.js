/**
 * {@link https://leetcode-cn.com/problems/3sum/}
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const target = 0;
  nums = nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] === nums[i - 2]) continue;
    const curVal = nums[i - 1];
    let start = i;
    let end = nums.length - 1;

    while (true) {
      if (start >= end) break;

      // 处理[-2, 0, 0, 2, 2]情况
      if (start > i && nums[start] === nums[start - 1]) {
        start += 1;
        continue;
      }
      if (nums[end] === nums[end + 1]) {
        end -= 1;
        continue;
      }

      const sum = curVal + nums[start] + nums[end];
      if (sum === target) {
        result.push([curVal, nums[start], nums[end]]);
        start += 1;
        end -= 1;
      } else if (sum < target) {
        start += 1;
      } else {
        end -= 1;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0])); // []
console.log(threeSum([-2, 0, 0, 2, 2])); // []