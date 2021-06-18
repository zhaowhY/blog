/**
 * {@link https://leetcode-cn.com/problems/merge-intervals/}
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals || intervals.length === 0) return [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (result[0][1] >= intervals[i][0]) {
      result[0] = [result[0][0], Math.max(result[0][1], intervals[i][1])];
    } else {
      result.unshift(intervals[i]);
    }
  }
  return result.reverse();
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]])); // [[1,5]]
console.log(merge([[1, 4], [2, 3]]));  //[[1,4]]
