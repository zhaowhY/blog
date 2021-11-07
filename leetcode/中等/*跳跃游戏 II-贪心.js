/**
 * 贪心算法, 计算下一轮可以跳远的位置，然后跳到那个位置
 * 贪心 + n段计算 不断求最大值
 * {@link https://leetcode-cn.com/problems/jump-game-ii/}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (!Array.isArray(nums) || nums.length <= 1) return 0;
  let max = 0;
  let num = 0;
  let start = 0;
  while (max < nums.length - 1) {
    let temp = max;

    for (let i = start; i <= max; i++) {
      if ((i + nums[i]) > max) {
        temp = Math.max(temp, i + nums[i]);
      }
    }
    if (temp > max) {
      num++;
      start = max + 1;
      max = temp;
    } else {
      return false; // 不能跳到最后一个位置
    }
  }
  return num;
};

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
console.log(jump([1, 2])); // 1 
console.log(jump([2, 3, 1])); // 1
console.log(jump([7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3])); // 2