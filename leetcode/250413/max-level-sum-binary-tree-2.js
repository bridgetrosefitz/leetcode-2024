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
  let maxSum = -Infinity; // -Infinity
  let maxLevel = 0; // 0

  let currNodes = [[root, 1]];

  while (currNodes.length) {
    const nextLevel = []; // [[7,2],[-8,2]]
    let levelSum = 0;
    currNodes.forEach(([node, level], i) => {
      // add to sum
      levelSum += node.val;
      if (node.left) {
        nextLevel.push([node.left, level + 1]);
      }

      if (node.right) {
        nextLevel.push([node.right, level + 1]);
      }
      // queue up children
      if (i === currNodes.length - 1 && levelSum > maxSum) {
        maxSum = levelSum;
        maxLevel = level;
      }
    });

    // update max
    // reset currSum
    currNodes = nextLevel;
  }

  return maxLevel;
};
