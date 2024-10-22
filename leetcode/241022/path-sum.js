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
  //             5
  //         4       8
  //     11        13    4
  // 7       2               1
  // CASES

  // target is 0 with empty tree
  // target is non-zero with empty tree
  // target is 0 and path does not exist
  // target exists, but before leaf node is hit
  // target exists and leaf node is a right child

  // from the root, we want to be able to flag that path exists

  if (!root) return false;

  let pathExists = false;
  let currSum = 0; //5 // 9 //20
  function dfs(node) {
    // if we reach a leaf (aka both children are null)
    // if currSum + curr node val matches target
    // update pathExists to true
    // return
    if (!node.left && !node.right) {
      if (currSum + node.val === targetSum) {
        pathExists = true;
      }
      return;
    }

    if (pathExists === true) return;

    // add curr node val to currSum
    currSum += node.val;

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);

    // remove curr node val from currSum
    currSum -= node.val;
  }

  dfs(root);
  return pathExists;
};
