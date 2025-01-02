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
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;
  // track level
  // run dfs looking for parents of leaf nodes
  // increment count of leaves if leaf is at lowest level
  let maxLevel = -1;
  let countLeaves = 0;

  function isLeaf(node) {
    if (!node) return false;
    return !node.left && !node.right;
  }

  let scoutNode = root;

  while (scoutNode) {
    scoutNode = scoutNode.left; // 2 3 n
    maxLevel++; // 1 2 3
  }

  /*
    
    max = 2
            1
        2       4
    3

    */

  function helper(node, level) {
    const leftChildIsLeaf = isLeaf(node.left);
    const rightChildIsLeaf = isLeaf(node.right);

    if (leftChildIsLeaf || rightChildIsLeaf) {
      if (level === maxLevel) {
        countLeaves += leftChildIsLeaf + rightChildIsLeaf;
        return;
      }
    }

    if (node.left) helper(node.left, level + 1);
    if (node.right) helper(node.right, level + 1);
  }

  helper(root, 0);

  // console.log(2**(maxLevel - 1) - countLeaves)
  // return 2**(maxLevel - 1) - countLeaves

  return 2 ** maxLevel + countLeaves - 1;
};
