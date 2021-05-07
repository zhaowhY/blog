/**
 * {@link https://leetcode-cn.com/problems/permutations/}
 */


/**
 * @description DFS，依次固定位置上的值
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (!nums.length) return []
  const visit = [];
  const result = [];

  function dfs(path) {
    if (path.length === nums.length) {
      result.push(path)
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visit[i]) continue;
      visit[i] = true;
      dfs([...path, nums[i]])
      visit[i] = false;
    }
  }
  dfs([])
  return result
};