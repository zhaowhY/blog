/**
 * {@link https://leetcode-cn.com/problems/invert-binary-tree/}
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null; // 这个分号很重要！！！

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

  return root;
};

console.log(invertTree({ "val": 4, "left": { "val": 2, "left": { "val": 1, "left": null, "right": null }, "right": { "val": 3, "left": null, "right": null } }, "right": { "val": 7, "left": { "val": 6, "left": null, "right": null }, "right": { "val": 9, "left": null, "right": null } } }));
console.log(invertTree({ "val": 4, "left": { "val": 2, "left": null, "right": null }, "right": { "val": 3, "left": null, "right": null } }));
