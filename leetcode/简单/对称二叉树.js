/**
 * {@link https://leetcode-cn.com/problems/symmetric-tree/}
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  function check(temp1, temp2) {
    if (!temp1 && !temp2) return true;
    if (!temp1 || !temp2) return false;
    return temp1.val === temp2.val && check(temp1.left, temp2.right) && check(temp1.right, temp2.left);
  }

  return check(root.left, root.right);
};

console.log(isSymmetric({ "val": 1, "left": { "val": 2, "left": { "val": 3, "left": null, "right": null }, "right": { "val": 4, "left": null, "right": null } }, "right": { "val": 2, "left": { "val": 4, "left": null, "right": null }, "right": { "val": 3, "left": null, "right": null } } }
));