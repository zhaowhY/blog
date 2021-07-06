
/**
 * @description 两层循环，一个数和其后面的数进行比较，小的值，放在前面
 * @complexity  时间空间复杂度：O(n^2), O(1)
 */

function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }

  return nums;
}

console.log(bubbleSort([6, 4, 5, -1, 0, 1, 3, 2]));