
/**
 * @link https://juejin.im/post/5b4ef681f265da0f4b7a8d44
 * @description 依次与数组前面的值进行比较，小则依次换位置，直到不小于前一个值
 * @complexity  时间空间复杂度：O(n^2), O(1)
 */

function insertSort(nums) {
  const result = [];
  nums.forEach(num => {
    const idx = result.findIndex((item) => item > num);
    if (idx === -1) result.push(num);
    else result.splice(idx, 0, num);
  });
  return result;
}

console.log(insertSort([6, 4, 5, -1, 0, 1, 3, 2]));