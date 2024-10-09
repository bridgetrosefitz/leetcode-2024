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
  // if we find at least one node in left subtree, pass the root of that subtree up
  // if we find at least one node in right subtree, pass the root of that subtree up
  // if find one node in left and one node in right subtree, pass current node up because it IS the root

  if (!root) return root;

  if (root === p || root === q) return root;

  const leftRoot = lowestCommonAncestor(root.left, p, q);
  const rightRoot = lowestCommonAncestor(root.right, p, q);

  if (leftRoot && rightRoot) return root;
  if (leftRoot) return leftRoot;
  if (rightRoot) return rightRoot;
};
