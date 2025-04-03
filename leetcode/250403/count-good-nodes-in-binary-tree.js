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
var goodNodes = function (root) {
  // at each node
  // if my own value against the max val seen so far is larger or equal
  // increment count
  // pass max value (including myself) to left and right children
  let count = 0; //1 2
  function dfs(node, maxSoFar) {
    if (!node) {
      return;
    }

    if (node.val >= maxSoFar) {
      count++;
    }

    const newMax = Math.max(maxSoFar, node.val);
    dfs(node.left, newMax);
    dfs(node.right, newMax);
  }

  dfs(root, -Infinity);

  return count;
};
