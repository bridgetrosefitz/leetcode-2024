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

    if (node === p || node === q) {
      return node;
    }
    // get node returned from left subtree
    // get node returned from right subtree

    const left = traverse(node.left);
    const right = traverse(node.right);

    if (left && right) {
      return node;
    }

    return left || right;

    // if I am a target node, pass self up
    // if both have a node, we must be the lca, so pass self up
    // if one has a node, it's either one or the lca, so pass that one up
  }

  return traverse(root);
};
