/**
 * @description 全排列 + 剪枝
 * {@link https://leetcode-cn.com/problems/generate-parentheses/}
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const nStr = '('.repeat(n) + ')'.repeat(n);
  const result = [];
  const visit = [];

  function DFS(str, leftNum, rightNum) {
    if (str.length === nStr.length) {
      result.push(str);
      return;
    }
    for (let i = 0; i < nStr.length; i++) {
      if (!visit[i] && visit[i - 1] && nStr[i] === nStr[i - 1]) break; // 剪枝 break or continue 根据情况决定。
      if (!visit[i] && (nStr[i] === '(' || nStr[i] === ')' && rightNum < leftNum)) {
        visit[i] = true;
        if (i < n) DFS(str + nStr[i], leftNum + 1, rightNum);
        else DFS(str + nStr[i], leftNum, rightNum + 1);
        visit[i] = false;
      }
    }
  }

  DFS('', 0, 0);
  return result;
};

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
// console.log(generateParenthesis(1)); // ["()"]
