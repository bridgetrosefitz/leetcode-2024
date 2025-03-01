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
var maxPathSum = function (root) {
  let max = -Infinity;

  function dfs(node) {
    if (!node) {
      return 0;
    }

    // calc sums and update max
    const left = dfs(node.left);
    const right = dfs(node.right);
    const leftWithSelf = left + node.val;
    const rightWithSelf = right + node.val;
    const bothWithSelf = left + right + node.val;

    max = Math.max(max, leftWithSelf, rightWithSelf, bothWithSelf, node.val);

    return Math.max(leftWithSelf, rightWithSelf, node.val);

    /*

            -10
        3          5

            20
        -5      7
        [-5,20]
        [7,20]
        [-5,20,7]
        [20]

        
             
        */

    // determine which legal sum is largest

    // return largest legal sum
  }

  dfs(root);
  return max;
};
