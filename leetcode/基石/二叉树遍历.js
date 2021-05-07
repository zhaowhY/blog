/**
 * @description 二叉树四种遍历。前序遍历、中序遍历、后序遍历、层次遍历
 *
 * 1. 前序遍历：根结点 ---> 左子树 ---> 右子树
 * 2. 中序遍历：左子树 ---> 根结点 ---> 右子树
 * 3. 后序遍历：左子树 ---> 右子树 ---> 根结点
 * 4. 层次遍历（BFS)
 */

/**
 * @description 树结构
 *     5
 *   3   8
 *  2 4 6 9
 * 1
 */
const tree = { "val": 5, "left": { "val": 3, "left": { "val": 2, "left": { "val": 1, "left": null, "right": null }, "right": null }, "right": { "val": 4, "left": null, "right": null } }, "right": { "val": 8, "left": { "val": 6, "left": null, "right": null }, "right": { "val": 9, "left": null, "right": null } } }


// 1 前序遍历
function frontTraverse(treeRoot) {
  const result = []

  function dfs(root) {
    if (!root) return;
    result.push(root.val)
    dfs(root.left)
    dfs(root.right)
  }
  dfs(treeRoot)
  return result;
}

console.log(frontTraverse(tree)) // 5, 3, 2, 1, 4, 8, 6, 9

// 2. 中序遍历
function middleTraverse(treeRoot) {
  const result = []

  function dfs(root) {
    if (!root) return;
    dfs(root.left)
    result.push(root.val)
    dfs(root.right)
  }
  dfs(treeRoot)
  return result;
}
console.log(middleTraverse(tree)) // 1, 2, 3, 4, 5, 6, 8, 9


// 3. 后序遍历
function behindTraverse(treeRoot) {
  const result = []

  function dfs(root) {
    if (!root) return;
    dfs(root.left)
    dfs(root.right)
    result.push(root.val)
  }
  dfs(treeRoot)
  return result;
}
console.log(behindTraverse(tree)) // 1, 2, 4, 3, 6, 9, 8, 5

// 4. 层次遍历
function BFSTraverse(root) {
  if (!root) return []
  const res = [];
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      res.push(node.val)
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return res
}

console.log(BFSTraverse(tree)) // 5, 3, 8, 2, 4, 6, 9, 1
