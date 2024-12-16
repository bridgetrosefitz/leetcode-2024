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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

const isIdentical = (root, subRoot) => {
  if (!root && !subRoot) {
    return true;
  }

  if (!root || !subRoot || root.val !== subRoot.val) {
    return false;
  }

  return (
    isIdentical(root.left, subRoot.left) &&
    isIdentical(root.right, subRoot.right)
  );
};

var isSubtree = function (root, subRoot) {
  if (!root) {
    return false;
  }

  return (
    isIdentical(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};
