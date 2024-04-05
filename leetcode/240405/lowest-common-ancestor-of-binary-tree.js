// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

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
  // pSeen = false
  // qSeen = false

  function dfs(node) {
    // if node is null
    // return
    // if val === p
    // set pSeen to true
    // if val === q
    // set qSeen to true
    // if both pSeen and qSeen are true
    // return ??
    // if(!pSeen) push val into pAncestors
    // if(!qSeen) push val into qAncestors
    // dfs(node.left)
    // dfs(node.right)
    // if(!qSeen) {
    // qAncestors.pop()
    // }
    // if(!pSeen) pAncestors.pop()
    // return
  }
};
