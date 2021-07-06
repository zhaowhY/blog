
/**
 * @description 归并排序是一种分而治之算法，利用递归，先分割为一个个单元，成对单元进行合并
 * @complexity  时间空间复杂度：O(nlogn), O(n)
 */

function merge(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) result.push(left.shift());
    else if (left[0] > right[0]) result.push(right.shift());
    else result.push(left.shift(), right.shift());
  }
  return result.concat(left, right);
}

function mergeSort(nums) {
  if (nums.length === 1) return nums;
  const len = Math.floor(nums.length / 2);
  return merge(mergeSort(nums.slice(0, len)), mergeSort(nums.slice(len)));
}

console.log(mergeSort([6, 4, 5, -1, 0, 1, 3, 2]));