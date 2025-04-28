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
  let maxSum = -Infinity; // 1
  let maxSumLevel = 0;

  const q = [root]; //[7, 0]

  let currLevelSum = 0; // 1
  let currLevel = 1;

  while (q.length) {
    const currLevelSize = q.length;
    for (let i = 0; i < currLevelSize; i++) {
      const curr = q.shift();

      currLevelSum += curr.val;

      if (curr.left) {
        q.push(curr.left);
      }

      if (curr.right) {
        q.push(curr.right);
      }
    }

    if (currLevelSum > maxSum) {
      maxSum = currLevelSum;
      maxSumLevel = currLevel;
    }

    currLevelSum = 0;
    currLevel++;
  }

  return maxSumLevel;
};
