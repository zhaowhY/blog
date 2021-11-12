/**
 * {@link https://leetcode-cn.com/problems/two-sum/}
 */


/**
 * @description 哈希映射
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = {};
  for (let i in nums) {
    const val = nums[i];
    if (numsMap[target - val]) return [numsMap[target - val], i];
    else numsMap[val] = i;
  }
  return null;
};


console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]