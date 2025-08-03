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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // compare two nodes at a time
  // has same value
  // has same null / not null
  /*
    
                1
            2       2
          3. 4.   4. 3
    
    */

  function compare(node1, node2) {
    // 2,2 3
    if (!node1 && !node2) {
      return true;
    }

    if (!node1 || !node2) {
      return false;
    }

    if (node1.val !== node2.val) {
      return false;
    }

    return compare(node1.left, node2.right) && compare(node1.right, node2.left);
  }

  return compare(root.left, root.right);
};
