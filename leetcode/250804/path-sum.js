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
  /*

        currSum = 0 5 9 20 // 0 5 9 
        Target = 22
        Target = 20
        Target = 1

                    5
                4
                   11
                       2

        
        // track curr sum as we traverse a path
        // if we are at a leaf, if curr sum + curr val equals target, roll true back up, else false

        Examples

        
        */

  function dfs(node, currSum) {
    if (!node) {
      return false;
    }

    if (!node.left && !node.right) {
      if (currSum + node.val === targetSum) {
        return true;
      }
    }

    return (
      dfs(node.left, currSum + node.val) || dfs(node.right, currSum + node.val)
    );
  }

  return dfs(root, 0);
};
