/**
 * @link https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

};

console.log();

// 前序遍历 preorder = [3, 9, 20, 15, 7];
// 中序遍历 inorder = [9, 3, 15, 20, 7];
