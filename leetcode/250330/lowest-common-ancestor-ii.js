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
  function search(node) {
    if (!node) {
      return null;
    }

    if (node === p || node === q) {
      return node;
    }

    const left = search(node.left);
    const right = search(node.right);

    if (left && right) {
      return node;
    }

    return left || right;
  }

  function dfs(node, target) {
    if (!node) {
      return false;
    }

    if (node === target) {
      return true;
    }

    return dfs(node.left, target) || dfs(node.right, target);
  }

  const lca = search(root);

  if (lca === p) {
    //check if q is in the subtree (because we returned early)
    if (!dfs(p, q)) {
      return null;
    }
  }

  if (lca === q) {
    if (!dfs(q, p)) {
      return null;
    }
  }

  return lca;
};
