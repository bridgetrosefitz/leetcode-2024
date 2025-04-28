/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  /*
    
        1
    2

        1
    2

    >> true

    null

    null
    
    >> true

        1
    2

        1
            2
    
    >> false
    
        1
    3

        1
    4

    */

  function traverse(node1, node2) {
    if (!node1 && !node2) {
      return true;
    }

    if (!node1 || !node2) {
      return false;
    }

    if (node1.val !== node2.val) {
      return false;
    }

    // if either subtree returns false, bubble up false
    const leftCheck = traverse(node1.left, node2.left);
    const rightCheck = traverse(node1.right, node2.right);

    if (!leftCheck || !rightCheck) {
      return false;
    }

    return true;
  }

  return traverse(q, p);
};
