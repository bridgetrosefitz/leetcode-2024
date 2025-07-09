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
var maxLevelSum = function (root) {
  let maxSum = root.val;
  let maxSumLevel = 1;
  let currLevel = 1;
  let currNodes = [root];

  while (currNodes.length) {
    let sum = 0;
    const nextLevelNodes = [];
    currNodes.forEach(node => {
      sum += node.val;
      // add val
      // enqueue

      if (node.left) {
        nextLevelNodes.push(node.left);
      }
      if (node.right) {
        nextLevelNodes.push(node.right);
      }
    });

    // update max and max level
    if (sum > maxSum) {
      maxSum = sum;
      maxSumLevel = currLevel;
    }
    currNodes = nextLevelNodes;
    currLevel += 1;
  }

  return maxSumLevel;
};
