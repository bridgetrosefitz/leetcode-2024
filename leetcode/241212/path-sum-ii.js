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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  /*
    
        1
    2

        1
    2       5
        3

    6

    >> [[1,2,3], [1,5]]    

    
    */

  const res = [];

  function helper(node, currSum, path) {
    // currSum 0 > 1 > 3
    // path [] > [1] > > [1,2]
    if (!node) return;
    if (!node.left && !node.right) {
      if (currSum + node.val === targetSum) {
        res.push([...path, node.val]);
        return;
      }
    }

    helper(node.left, currSum + node.val, [...path, node.val]);
    helper(node.right, currSum + node.val, [...path, node.val]);
  }

  helper(root, 0, []);

  return res;
};
