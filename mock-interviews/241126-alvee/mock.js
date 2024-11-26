// approx one hour
// aim to do 2 problems
// can ask for time checks
/*

*/

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

/*

  Input: node (root of binary tree)
  - type: total number of nodes would be 5000; values can be negative
  - length: could be empty

  Output: boolean (if we can achieve a root to leaf correct sum)

  Examples:

            3
          2

          Target = 3
          Output = false

            3
          2
        -1

          Target = 4
          Output = false

  [
    return false if null node [X],
    return false if left child leaf exists and target is achieved from parent of left child [X],
    happy case [X],
    two children of root [X],
    negative values [X]
  ]

*/
var hasPathSum = function (root, targetSum) {
  // currSum = 0
  function dfs(node, currSum) {
    if (!node) return false;

    if (!node.left && !node.right) {
      if (currSum + node.val === targetSum) {
        return true;
      }

      return false;
    }

    if (dfs(node.left, currSum + node.val)) return true;
    if (dfs(node.right, currSum + node.val)) return true;

    return false;
    // go to leaf node
    // if at leaf node and currSum = targetSum, return true
    // return result of left child // MAYBE IF TRUE
    // return result of right child
  }

  return dfs(root, 0);
};
