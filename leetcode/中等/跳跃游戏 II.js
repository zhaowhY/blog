/** 做的比较失败，花费时间太长了
 * 贪心算法, 计算下一轮可以跳远的位置，然后跳到那个位置
 * {@link https://leetcode-cn.com/problems/jump-game-ii/}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 0) return 0;
  let result = 0;

  let max = 0;
  let i = 0;
  while (i < nums.length - 1) {
    const maxI = i + nums[i];
    if (maxI >= nums.length - 1) return result + 1;
    max = maxI;
    for (let j = i + 1; j <= maxI; j++) {
      if (j + nums[j] > max) {
        i = j;
        max = j + nums[j];
      }
    }
    if (max > maxI) result++;
    else return null; // 跳不到最后
  }
  return result;
};

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
console.log(jump([1, 2])); // 1 
console.log(jump([2, 3, 1])); // 1
console.log(jump([7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3])); // 2