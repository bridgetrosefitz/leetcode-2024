/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function traverse(node) {
    if (!node) {
      return null;
    }

    // if non null on left, pass up node from left
    // if non null on right, pass up node from right
    // if both non null, pass up self
    // if node is p or q, pass up self

    if (node === p || node === q) {
      return node;
    }

    const left = traverse(node.left);
    const right = traverse(node.right);

    if (left && right) {
      return node;
    }

    return left || right;
  }

  return traverse(root);
};
