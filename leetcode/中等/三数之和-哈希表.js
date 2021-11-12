/**
 * {@link https://leetcode-cn.com/problems/3sum/}
 */

/** 排序+单指针+哈希表
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  nums = nums.filter((item, index) => {
    if (index > 2 && item === nums[index - 3]) return false;
    return true;
  });
  const result = [];
  const filterMap = {};

  for (let i = 0; i < nums.length - 2; i++) {
    const target = nums[i];
    if (target >= 1) break;
    const tempMap = {};
    for (let j = i + 1; j < nums.length; j++) {
      const val = nums[j];
      if (tempMap[-target - val]) {
        const str = `${target}${-target - val}${val}`;
        if (!filterMap[str]) {
          result.push([target, -target - val, val]);
          filterMap[str] = true;
        }

      }
      else tempMap[val] = true;
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0])); // []
console.log(threeSum([-2, 0, 0, 2, 2])); // []