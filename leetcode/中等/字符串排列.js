/**
 * {@link https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/}
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  if (!s) return [];
  const result = [];
  s = s.split('').sort().join(''); // 排序不能滥用 sort((a,b) => a-b)
  const visit = new Array(s.length)
  function dfs(path) {
    if (path.length === s.length) {
      result.push(path)
      return;
    }
    for (let i = 0; i < s.length; i++) {
      if (visit[i]) continue;
      if (visit[i - 1] && (i > 0 && s[i] === s[i - 1])) break; // 剪枝操作

      visit[i] = true;
      dfs(path + s[i])
      visit[i] = false
    }
  }

  dfs("")
  return result
};

console.log(permutation("abc")) // ["abc","acb","bac","bca","cab","cba"]
console.log(permutation("ada")) // ["aba","aab","baa"]