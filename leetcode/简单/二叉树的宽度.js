/**
 * @title 求⼆叉树的宽度;
 * @description 先利用dfs计算深度，利用2^(n-1)计算最大宽度result，在利用bfs计算n-1层节点，子节点 < 2, result--
 */

// dfs得出深度，bfs得出宽度
function getWidth(root) {
  function deep(node) {
    if (!node) return 0;

    return Math.max(deep(node.left), deep(node.right)) + 1;
  };
  const maxDeep = deep(root);

  let result = 2 ** (maxDeep - 1);

  function bfs(queue, deep) {
    if (queue.length === 0) return;
    const len = queue.length;
    deep += 1;
    for (let i = 0; i < len; i++) {
      const front = queue.shift();
      if (deep === maxDeep - 1) {
        if (!front.left || !front.right) result -= 1;
      } else {
        if (front.left) queue.push(front.left);
        if (front.right) queue.push(front.right);
        bfs(queue, deep);
      }
    }
  }

  bfs([], 0);
  return result;
}

console.log(getWidth({ "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }));
// 4

//   3
// 9  20 
//   15 7