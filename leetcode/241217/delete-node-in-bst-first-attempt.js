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
  /*
    Delete 5
            10
        5
    4       7
        6
    
    */

  // if I am the node to be deleted
  // pass my right child as far down right subtree of left child as poss, and attach right child
  // return left child to parent
  // else,
  // recurse left
  // recurse right
  // return self to parent

  function dfs(node, rightChild) {
    if (!node) {
      return null;
    }
    if (node.val === key.val) {
      dfs(node.left);
    }
  }

  return dfs(root, root.right);
};
