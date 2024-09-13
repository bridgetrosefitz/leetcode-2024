/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function (node) {
  // go to the first right child
  let curr = node.right;

  // go as deep as possible to the left
  while (curr) {
    if (!curr.left) return curr;
    curr = curr.left;
  }

  // while node is less than parent and not null, keep going to parent
  if (!curr) {
    curr = node.parent;
    while (curr && curr.val < node.val) {
      curr = curr.parent;
    }
  }

  return curr;
};
