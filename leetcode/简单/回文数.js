/**
 * {@link https://leetcode-cn.com/problems/palindrome-number/}
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return String(x).split('').reverse().join('') === String(x)
};
console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false
console.log(isPalindrome(-101)) // false