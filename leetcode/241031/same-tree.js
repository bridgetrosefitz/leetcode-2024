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
  //     1
  // 2       3

  //     1
  // 3       2

  //         1
  //     2
  // 3

  //         1
  //             2
  //                 3

  //         ===

  //         1
  //     2

  //         1
  //     2
  //         3

  function compare(node1, node2) {
    // if one node is null but the other is not, return false
    // if both are null, return true

    // if left and right subtrees both return true and value of current nodes is the same
    // return true
    // return false

    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;

    const leftSubtree = compare(node1.left, node2.left);
    const rightSubtree = compare(node1.right, node2.right);

    if (leftSubtree && rightSubtree && node1.val === node2.val) return true;
    return false;
  }

  return compare(p, q);
};
