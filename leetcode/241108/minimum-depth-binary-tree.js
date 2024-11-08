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
var minDepth = function (root) {
  if (!root) return 0;

  // store currLevel (start at 1)
  // bfs level order traversal
  // the first time we encounter leaf, return currLevel
  // increment level after iterating through nodes at each level

  let currLevelNodes = [root];
  let currLevel = 1;

  while (currLevelNodes.length) {
    const nextLevelNodes = [];

    for (const node of currLevelNodes) {
      if (!node.left && !node.right) {
        return currLevel;
      }
      if (node.left) {
        nextLevelNodes.push(node.left);
      }
      if (node.right) {
        nextLevelNodes.push(node.right);
      }
    }

    currLevel += 1;
    currLevelNodes = nextLevelNodes;
  }
};
