
/**
 * @description 两层循环，每次找小的依次放到前面的位置， 前面位置的值放到此次循环锁定小值的位置
 * @complexity  时间空间复杂度：O(n^2), O(logn)
 */

function selectSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[min] > nums[j]) min = j;
    }
    [nums[i], nums[min]] = [nums[min], nums[i]];
  }

  return nums;
}

console.log(selectSort([6, 4, 5, -1, 0, 1, 3, 2]));