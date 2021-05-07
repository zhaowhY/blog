/**
 * {@link https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/}
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  const tempMap = {}; // 当前某个数的数量
  const tails = {}; // 当前以某个数结尾的个数
  nums.forEach((item) => {
    tempMap[item] = (tempMap[item] || 0) + 1
    tails[item] = 0;
  })

  for (i of nums) {
    if (tempMap[i] === 0) continue;
    else if (tempMap[i] > 0 && tails[i - 1] > 0) {
      tempMap[i]--;
      tails[i - 1]--;
      tails[i]++;
    } else if (tempMap[i] > 0 && tempMap[i + 1] > 0 && tempMap[i + 2] > 0) {
      tempMap[i]--
      tempMap[i + 1]--
      tempMap[i + 2]--
      tails[i + 2]++
    } else return false
  }

  return true
};

console.log(isPossible([1, 2, 3, 3, 4, 5])) // true
console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5])) // true
console.log(isPossible([4, 5, 6, 6, 7, 8, 9, 10, 10, 11])) // false
console.log(isPossible([1, 2, 3, 5, 5, 6, 7])) // false













// /** 
//  * @description 采用最短原则，贪心算法
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var isPossible = function (nums) {
//   let result = [[nums[0]]];
//   for (let i = 1; i < nums.length; i++) {
//     result.sort((a, b) => a.length - b.length) // 帮助优先给最短的数组添加
//     if (nums[i] <= (nums[i - 1] + 1)) { // 如果是连续的
//       // 如果补充到之前数组中，则补充，不然添加新数组
//       const bool = result.some((item) => {
//         if ((item[item.length - 1] + 1) === nums[i]) {
//           item.push(nums[i])
//           return true;
//         }
//         return false
//       })
//       if (!bool) result.push([nums[i]])
//     } else {
//       // 不连续时，判断之前数组长度，有小于3 返回false, 否则开启新一轮
//       if (result.some(item => item.length < 3)) return false;
//       result = [[nums[i]]]
//     }
//   }
//   return result.every(item => item.length >= 3)
// };

// console.log(isPossible([1, 2, 3, 3, 4, 5])) // true
// console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5])) // true
// console.log(isPossible([4, 5, 6, 6, 7, 8, 9, 10, 10, 11])) // false
// console.log(isPossible([1, 2, 3, 5, 5, 6, 7])) // false