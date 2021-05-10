/**
 * @link https://leetcode-cn.com/problems/4sum-ii/
 * @description 归并思想+哈希存储， 将n 分为2,2,2,2， 然后不断合并，O(n2logn)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 * 四个数组长度相同 6参考
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let result = 0;
  let tempMap = {};
  for (let i in nums1) {
    for (let j in nums2) {
      tempMap[nums1[i] + nums2[j]] = (tempMap[nums1[i] + nums2[j]] || 0) + 1;
    }
  }

  for (let i in nums3) {
    for (let j in nums4) {
      result += tempMap[-(nums3[i] + nums4[j])] || 0;
    }
  }
  return result;
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));;


// 输入:
// A = [ 1, 2]
// B = [-2,-1]
// C = [-1, 2]
// D = [ 0, 2]

// 输出:
// 2

// 解释:
// 两个元组如下:
// 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

