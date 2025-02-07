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
  let lca = null;

  function search(node) {
    if (!node) {
      return false;
    }

    const curr = node === p || node === q;

    const left = search(node.left);
    const right = search(node.right);

    if (curr + left + right === 2) {
      lca = node;
    }

    return curr || left || right;
  }

  search(root);

  return lca;
};
