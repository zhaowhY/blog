/**
 * @description 全排列 + 剪枝
 * {@link https://leetcode-cn.com/problems/generate-parentheses/}
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const temp = '('.repeat(n) + ')'.repeat(n);
  console.log(temp);
  const result = [];
  const visit = [];
  function dfs(path, left, right) {
    if (right > left) return;
    if (path.length === temp.length) {
      result.push(path);
      return;
    }

    for (let i = 0; i < temp.length; i++) {

      if (visit[i]) continue;
      if (visit[i - 1] && (i > 0 && temp[i] === temp[i - 1])) break; // 剪枝操作

      if (right > left) return;

      visit[i] = true;
      if (i < n) dfs(path + temp[i], left + 1, right);
      else dfs(path + temp[i], left, right + 1);

      visit[i] = false;
    }
  }

  dfs('', 0, 0);
  return result;

};

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
// console.log(generateParenthesis(1)); // ["()"]
