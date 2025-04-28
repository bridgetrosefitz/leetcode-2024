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
var maxDepth = function (root) {
  let maxDepth = 0;

  /*
    
            1
        2       4
    3

    currDepth = 0


    */

  function traverse(node, currDepth) {
    if (!node) {
      return;
    }

    maxDepth = Math.max(currDepth, maxDepth);
    traverse(node.left, currDepth + 1);
    traverse(node.right, currDepth + 1);
  }

  traverse(root, 1);

  return maxDepth;
};
