/**  排序，筛选，哈希表
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  nums = nums.filter((val, index) => {
    if (index >= 4 && nums[index - 4] === val) return false;
    return true;
  });
  const result = [];
  const strMap = {};
  for (let i = 0; i < nums.length - 2; i++) {
    const val1 = nums[i];

    for (let j = i + 1; j < nums.length - 1; j++) {
      const val2 = nums[j];
      const tempMap = {};

      for (let k = j + 1; k < nums.length; k++) {
        const val3 = nums[k];
        if (tempMap[val3]) {
          const temp = tempMap[val3].concat(val3);
          const str = String(temp);
          if (!strMap[str]) result.push(temp);
          strMap[str] = true;

        } else {
          tempMap[target - val3 - val1 - val2] = [val1, val2, val3];
        }
      }

    }
  }
  return result;
};