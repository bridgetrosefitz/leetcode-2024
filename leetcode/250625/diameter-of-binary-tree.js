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
var diameterOfBinaryTree = function (root) {
  /*

  max = 2
  
      1
  2       3
  
4      5

  */
  let max = -Infinity; // -Infinity 0 2 3

  function traverse(node) {
    if (!node) {
      return 0;
    }

    // calculate diameter of two subtrees
    // if bigger than max, update max
    // pass up the longer of the two subtrees + 1

    const left = traverse(node.left);
    const right = traverse(node.right);

    const diameter = left + right;

    max = Math.max(max, diameter);

    return Math.max(left, right) + 1;
  }

  traverse(root);

  return max;
};
