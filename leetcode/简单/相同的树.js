/**
 * {@link https://leetcode-cn.com/problems/same-tree/}
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p ^ !q || p.val !== q.val) return false; //  undefined ^ {} === 0 因此需要先变换为 Boolean
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree({ "val": 1, "left": { "val": 2, "left": null, "right": null }, "right": { "val": 3, "left": null, "right": null } }
  , { "val": 1, "left": { "val": 2, "left": null, "right": null }, "right": { "val": 3, "left": null, "right": null } }));