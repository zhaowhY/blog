/**
 * {@link https://leetcode-cn.com/problems/merge-intervals/}
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  for (let val of intervals) {
    if (result.length === 0) result.push(val);
    else {
      const [start, end] = val;
      const [start2, end2] = result[result.length - 1];
      if (end2 >= start) {
        result.splice(result.length - 1, 1, [start2, Math.max(end, end2)]);
      } else {
        result.push(val);
      }
    }
  }
  return result;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]])); // [[1,5]]
console.log(merge([[1, 4], [2, 3]]));  //[[1,4]]
