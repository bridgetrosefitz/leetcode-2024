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
var isValidBST = function (root) {
  // curr
  // inorder traverse
  // is next item in array greater than prev

  let curr = -Infinity;
  let isBinary = true;

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    if (node.val <= curr) isBinary = false;
    curr = node.val;
    dfs(node.right);
  }

  dfs(root);

  return isBinary;
};
