/**
 * @description BFC遍历 层级遍历
 * {@link https://leetcode-cn.com/problems/binary-tree-right-side-view/}
 */

/**
 Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const queueLen = queue.length;
    result.push(queue[queueLen - 1].val);

    for (let i = 0; i < queueLen; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};

// [1, 3, 4]
console.log(rightSideView({ "val": 1, "left": { "val": 2, "left": null, "right": { "val": 5, "left": null, "right": null } }, "right": { "val": 3, "left": null, "right": { "val": 4, "left": null, "right": null } } }));
console.log(rightSideView(null)); // []
// [1, 3, 4]
console.log(rightSideView({ "val": 1, "left": { "val": 2, "left": { "val": 4, "left": null, "right": null }, "right": null }, "right": { "val": 3, "left": null, "right": null } }));