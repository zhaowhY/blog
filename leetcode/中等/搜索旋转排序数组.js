/** 
 * @description 这个题 ，我想不到那种巧妙办法，就整体遍历一下吧
 * {@link https://leetcode-cn.com/problems/search-in-rotated-sorted-array/}
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

  return nums.indexOf(target);
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); //  4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); //  -1
console.log(search([1], 0)); //  -1