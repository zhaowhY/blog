/**
 * {@link https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/}
 */

/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return root;
  const nodes = [];
  function traverse(node) {
    if (!node) return;
    nodes.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);

  let temp = root;
  root.left = null;
  nodes.slice(1).forEach(item => {
    temp.right = new TreeNode(item);
    temp.left = null;
    temp = temp.right;
  });

  return root;
};

console.log(flatten({ "val": 1, "left": { "val": 2, "left": { "val": 3, "left": null, "right": null }, "right": { "val": 4, "left": null, "right": null } }, "right": { "val": 5, "left": null, "right": { "val": 6, "left": null, "right": null } } }
));[1, null, 2, null, 3, null, 4, null, 5, null, 6];