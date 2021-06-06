/** 
 * @link https://leetcode-cn.com/problems/longest-common-subsequence/
 * @summary 动态规划，二维数组
 * @throws new Array(n) 不具有遍历的，只有赋值才行，.fill([])
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = new Array(text1.length + 1).fill([]).map(() => new Array(text2.length + 1).fill(0));
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[text1.length][text2.length];
};

console.log(longestCommonSubsequence('abcde', 'ace')); // 3
console.log(longestCommonSubsequence('mhunuzqrkzsnidwbun', 'szulspmhwpazoxijwbq')); // 6
console.log(longestCommonSubsequence('bsbininm', 'jmjkbkjkv')); // 1
console.log(longestCommonSubsequence('abc', 'def')); // 0
console.log(longestCommonSubsequence('bl', 'yby')); // 1
