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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0; // 10 14 19 11

  // 10 21 25 27 30

  /*               10
   *           4        11
   *         2    5
   *          3
   *
   * [4,11] > 30
   */

  function dfs(node) {
    if (!node) {
      return;
    }
    // add val to sum if within bounds
    if (node.val <= high && node.val >= low) {
      sum += node.val;
    }

    if (node.val > low) {
      dfs(node.left);
    }

    if (node.val < high) {
      dfs(node.right);
    }
  }

  dfs(root);

  return sum;
};
