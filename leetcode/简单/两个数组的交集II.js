/**
 * {@link https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/}
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const NUMS1_OBJ = {};
  nums1.forEach((item) => {
    NUMS1_OBJ[item] = (NUMS1_OBJ[item] || 0) + 1;
  })

  const result = [];

  nums2.forEach(item => {
    if (NUMS1_OBJ[item]) {
      result.push(item)
      NUMS1_OBJ[item]--
    }
  })
  return result
};

console.log(intersect([1, 2, 2, 1], [2, 2])) // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])) // [4, 9]