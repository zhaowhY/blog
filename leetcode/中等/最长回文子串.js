/**
 * {@link https://leetcode-cn.com/problems/longest-palindromic-substring/}
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s) return '';
  let result = '';
  let dp = []
  for (let i = 0; i < s.length; i++) {
    dp[i] = []
  }

  for (let len = 0; len < s.length; len++) {
    for (let i = 0; i + len < s.length; i++) {
      if (len === 0) {
        dp[i][i + len] = true
      } else if (len === 1) {
        dp[i][i + len] = s[i] === s[i + 1]
      } else {
        dp[i][i + len] = dp[i + 1][i + len - 1] && s[i] === s[i + len]
      }
      if (dp[i][i + len] && (len + 1) > result.length) result = s.slice(i, i + len + 1)
    }
  }

  return result
};

console.log(longestPalindrome('babad')) // bab or aba
console.log(longestPalindrome('cbbd')) // bb
console.log(longestPalindrome('a')) // a
console.log(longestPalindrome('ac')) // ac