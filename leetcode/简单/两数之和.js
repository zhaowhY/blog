/**
 * {@link https://leetcode-cn.com/problems/two-sum/}
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsSort = [...nums].sort((a, b) => a - b);
  let start = 0;
  let end = numsSort.length - 1;

  while (true) {
    if (start >= end) return [];
    const addSum = numsSort[start] + numsSort[end];
    if (addSum > target) end--;
    else if (addSum < target) start++;
    else {
      let result = [];
      for (let i = 0; i < nums.length; i++) {
        if ((nums[i] === numsSort[start] || nums[i] === numsSort[end])) {
          result.push(i);
          if (result.length === 2) return result;
        }
      }
      return [];
    }
  }
};


/**
 * @description 哈希映射
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = {};
  nums.forEach((item, index) => {
    hashMap[item] = String(index); // 这块比较关键，统一格式
  });
  for (let i in nums) {
    const temp = target - nums[i];
    if (hashMap[temp] && i !== hashMap[temp]) return [i, hashMap[temp]];
  }
};


console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]