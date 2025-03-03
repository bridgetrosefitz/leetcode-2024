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
 * @return {number}
 */
var maxDepth = function (root) {
  // traverse to null node
  // return max level of two children and add one to this

  function dfs(node) {
    if (!node) {
      return 0;
    }

    const childrenMaxLevel = Math.max(dfs(node.left), dfs(node.right));
    // 1

    return childrenMaxLevel + 1;
  }

  return dfs(root);
};
