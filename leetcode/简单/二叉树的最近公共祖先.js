/**
 * @link https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
 * @description
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let result = null;
  function dfs(node) {
    if (result) return;
    if (!node) return false;
    const left = dfs(node.left);
    const right = dfs(node.right);
    if ((left && right) ||
      ((node.val === p.val || node.val === q.val) && (left || right))) {
      result = node;
    }

    return node.val === p.val || node.val === q.val || left || right;
  }
  dfs(root);
  return result;
};

// 2
console.log(
  lowestCommonAncestor({
    "val": 3, "left": {
      "val": 5, "left": { "val": 6, "left": null, "right": null }, "right": { "val": 2, "left": { "val": 7, "left": null, "right": null }, "right": { "val": 4, "left": null, "right": null } }
    }, "right": { "val": 1, "left": { "val": 0, "left": null, "right": null }, "right": { "val": 8, "left": null, "right": null } }
  }, { "val": 2, "left": { "val": 7, "left": null, "right": null }, "right": { "val": 4, "left": null, "right": null } }, { "val": 4, "left": null, "right": null })
);