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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) {
    return null;
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.right === null && root.right === null) {
      root = null;
    } else if (root.left === null || root.right === null) {
      root = root.left || root.right;
    } else {
      if (root.right.left === null) {
        root.right.left = root.left;
        root = root.right;
      } else {
        let minPredecessorNode = root.right;
        while (
          minPredecessorNode.left &&
          minPredecessorNode.left.left !== null
        ) {
          minPredecessorNode = minPredecessorNode.left;
        }

        const minValue = minPredecessorNode.left.val;
        root.val = minValue;
        minPredecessorNode.left = deleteNode(minPredecessorNode.left, minValue);
      }
    }
  }

  return root;
};
