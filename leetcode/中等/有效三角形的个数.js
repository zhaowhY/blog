/**
 * {@link https://leetcode-cn.com/problems/valid-triangle-number/}
 */

/**
 * 双指针，固定最长的一条边
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => b - a) // 逆序
  let result = 0;
  let currentNum = 0;

  let pointer1 = 0;
  let pointer2 = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      pointer1 = j
      pointer2 = j + 1
      // 剪枝开始
      if (j > i + 1 && nums[pointer1] === nums[pointer1 - 1]) {
        if ((nums[pointer1] + nums[pointer1 - 1]) > nums[i]) currentNum--
        result += currentNum
        continue;
      }
      // 剪枝结束

      currentNum = 0
      while (true) {
        if (nums[i] >= (nums[pointer1] + nums[pointer2]) || pointer2 > nums.length - 1) break
        result++;
        currentNum++;
        pointer2++
      }
    }
  }

  return result
};

console.log(triangleNumber([2, 2, 3, 4])) // 3
// 有效的组合是:
// 2,3,4 (使用第一个 2)
// 2,3,4 (使用第二个 2)
// 2,2,3

console.log(triangleNumber([1, 2, 3, 4, 5, 6])) // 7

// 75781
console.log(triangleNumber([96, 95, 93, 92, 91, 91, 90, 88, 88, 88, 87, 86, 86, 85, 84, 84, 82, 79, 74, 74, 72, 72, 71, 71, 71, 70, 68, 66, 64, 64, 64, 63, 63, 61, 61, 60, 59, 59, 55, 54, 53, 52, 52, 52, 49, 49, 48, 48, 47, 47, 47, 44, 42, 41, 39, 39, 39, 38, 37, 36, 35, 35, 34, 33, 32, 29, 28, 28, 27, 25, 24, 23, 23, 23, 22, 21, 20, 19, 18, 18, 18, 17, 17, 17, 16, 16, 16, 15, 15, 10, 10, 10, 10, 8, 6, 6, 3, 3, 3, 3]))



