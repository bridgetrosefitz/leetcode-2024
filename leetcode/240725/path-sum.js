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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  function dfs(node, currSum) {
    if (!node) {
      return false;
    }

    currSum += node.val;

    if (!node.left && !node.right) {
      if (currSum === targetSum) return true;
    }

    if (dfs(node.left, currSum)) return true;
    if (dfs(node.right, currSum)) return true;

    return false;
  }

  return dfs(root, 0);
};
