/**
 * @link https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @description 不断从左右子树角度拆分中序遍历， 从前序遍历中查找左右子树的根节点
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
  let idx = -1;
  function recursion(inorder) {
    if (inorder.length === 0) return null;
    idx += 1;
    const rootVal = preorder[idx];
    const root = new TreeNode(rootVal);
    const rootIndex = inorder.indexOf(rootVal); // 因为从左 在到 右，因此可以保证每次值都存在

    root.left = recursion(inorder.slice(0, rootIndex));
    root.right = recursion(inorder.slice(rootIndex + 1));

    return root;
  }

  return recursion(inorder);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));

// 前序遍历 preorder = [3, 9, 20, 15, 7]; 根 左 右
// 中序遍历 inorder = [9, 3, 15, 20, 7]; 左 根 右
