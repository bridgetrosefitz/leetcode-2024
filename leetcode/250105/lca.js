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
  function dfs(node) {
    if (!node) {
      return null;
    }

    if (node.val === p.val) {
      return p;
    }

    if (node.val === q.val) {
      return q;
    }

    const leftSubtree = dfs(node.left); // will return null, lca or p or q
    const rightSubtree = dfs(node.right); // same

    if (leftSubtree && rightSubtree) {
      return node;
    }

    return leftSubtree || rightSubtree;
  }

  return dfs(root);
};
