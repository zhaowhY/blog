
/**
 * @description 找一个基准值，小于它的放在左边，大于它的放在右边， 左右部分，循环此步骤， 递归出口是长度为2
 * @complexity  时间空间复杂度：O(nlogn) ~ O(n^2), O(logn)
 */

function quickSort(nums) {
  if (nums.length === 0) return [];
  const val = nums[0];
  const mid = [];
  const left = [];
  const right = [];
  nums.forEach((item) => {
    if (item < val) left.push(item);
    else if (item > val) right.push(item);
    else mid.push(item);
  });

  return quickSort(left).concat(mid, quickSort(right));
}

console.log(quickSort([6, 4, 5, -1, 0, 1, 3, 2]));