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
  // we have found LCA if
  // 1. we have a non-null result from left subtree AND right subtree
  // 2. the LCA is myself
  // in either of these cases, we should pass myself up
  // otherwise we pass up the node where we found the LCA or where we found p or q

  /*
            1
    2               3
        4
    */
  function traverse(node) {
    if (!node) {
      return null;
    }

    if (node.val === p.val || node.val === q.val) {
      return node;
    }

    const leftSubtree = traverse(node.left);
    const rightSubtree = traverse(node.right);

    if (leftSubtree && rightSubtree) {
      return node;
    }

    return leftSubtree || rightSubtree;
  }

  return traverse(root);
};
