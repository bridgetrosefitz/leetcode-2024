// Given a binary tree, determine if it is height-balanced

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let treeIsBalanced = true;
  // base cases
  // if node is null > return 0
  // is dfs from my left node the same as my right node?
  function dfs(node) {
    if (!node) return 0;
    const leftDepth = dfs(node.left) + 1;
    const rightDepth = dfs(node.right) + 1;

    if (Math.abs(leftDepth - rightDepth) > 1) treeIsBalanced = false;
    return Math.max(leftDepth, rightDepth);
  }

  dfs(root);

  return treeIsBalanced;
};
