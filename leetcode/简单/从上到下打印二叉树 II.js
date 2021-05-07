/**
 * {@link https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/}
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description BFS
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let temp = [root];
  const result = []
  let idx = -1;
  while (true) {
    if (temp.length === 0) break
    idx++;
    result[idx] = [];

    const tempLen = temp.length
    for (let i = 0; i < tempLen; i++) {
      result[idx].push(temp[i].val);

      if (temp[i].left) temp.push(temp[i].left)
      if (temp[i].right) temp.push(temp[i].right)
    }

    temp = temp.slice(tempLen)
  }

  return result
};

console.log(levelOrder({ "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }))
console.log(levelOrder())